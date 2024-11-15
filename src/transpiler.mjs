// transpiler.js


/**
* Clase Transpiler que se encarga de transpilar el código de alto nivel a código de bajo nivel
* y generar las instrucciones necesarias para la máquina virtual.
* 
* @author Manuel Mora Sandi 
* @author Derek Rojas Mendoza
* @author Josué Vindas Pérez
* @author Joseph León Cabezas
*/
class Transpiler {
    /**
    * Constructor de la clase Transpiler que se encarga de inicializar las instrucciones
    * @constructor
    * @param {string} instructions - Instrucciones a transpilar 
    */
    constructor() {
        this.instructions = [];
    }

    /** 
    * Transpila los atributos de las funciones proporcionadas, generando las instrucciones correspondientes
    * para cada tipo de declaración en la secuencia de la función.
    * 
    * Este método recorre cada función y procesa sus atributos, transformando declaraciones como `LetDeclaration`, 
    * `ConstDeclaration`, `FunctionCall`, `ComparisionExpression`, y `IfStatement` en instrucciones que se almacenan 
    * en el array `instructions`. También maneja el caso especial para la función `main`, añadiendo una instrucción de 
    * detención (`HLT`) al final de sus instrucciones.
    * 
    * @method transpile
    * 
    * @param {Object} functionAttributes Un objeto que contiene los atributos de las funciones, donde cada función
    *                                    tiene un conjunto de instrucciones que deben ser procesadas.
    */
    transpile(functionAttributes) {

        for (const functionName in functionAttributes) {

            let bindingIndex = 0;

            this.instructions.push('=================================');
            this.instructions.push(`$FUN $${functionAttributes[functionName].id}                ; ${functionName}`);

            const attributes = functionAttributes[functionName].secuencia;
            // console.log('Atributo: ', attributes[11].args);

            for (let i = 0; i < attributes.length; i++) {

                console.log('Atributo: ', attributes[i]);

                if (attributes[i].type === 'LetDeclaration' || attributes[i].type === 'ConstDeclaration') {
                    this.transpileValueDeclaration(attributes[i], bindingIndex);
                    bindingIndex++;
                } else if (attributes[i].type === 'FunctionCall') {
                     this.transpileFunctionCall(attributes[i],  functionAttributes[functionName].id);
                } else if (attributes[i].type === 'ComparisionExpression') {
                    this.transpileComparisionExpression(attributes[i]);
                } else if (attributes[i].type === 'IfStatement') {
                    this.transpileIfStatement(attributes[i]);
                } else if (attributes[i].type === 'PrintStatement') {
                    this.transpilePrintStatement(attributes[i]); // Manejo de PrintStatement
                }

                // if (attributes[i].type === 'FunctionDeclaration') {
                //     this.transpileFunctionDeclaration(attributes[i], bindingIndex);
                // }
            }

            if (functionName === 'main') {
                this.instructions.push('HLT');
            }

            this.instructions.push('$END');
        }
        console.log('Instrucciones: ', this.instructions);
    }

    /** 
    * Carga un valor en las instrucciones según su tipo.
    * 
    * Dependiendo del tipo del valor proporcionado (`number`, `string`, o `object`), este método genera una instrucción
    * correspondiente para cargar el valor en las instrucciones. Si el valor es un número, se genera una instrucción de carga
    * con el valor numérico. Si es una cadena de texto, se genera una instrucción con la cadena entre comillas.
    * 
    * @method loadValue
    * 
    * @param {(number|string|object)} value El valor que se va a cargar. Puede ser un número, una cadena de texto,
    *                                      o un objeto con una propiedad `functionName`.
    */
    loadValue(value) {
        if (typeof value === 'number') {
            this.instructions.push(`LDV ${value}`);
        } else if (typeof value === 'string') {
            this.instructions.push(`LDV "${value}"`);
        } else if (typeof value === 'object') {
            this.instructions.push(`LDV ${value.body.args[0]}`);
           
           
        }
    }

    /** 
    * Carga una instrucción de comparación basada en el operador proporcionado.
    * 
    * Este método convierte un operador de comparación (como `==`, `>`, `>=`, `<`, `<=`) en una instrucción correspondiente
    * para la máquina virtual. Si el operador no es reconocido, se lanza un error.
    * 
    * @method loadComparisionOperator
    * 
    * @param {string} operator El operador de comparación que se va a cargar. Debe ser uno de los siguientes: `==`, `>`, `>=`, `<`, `<=`.
    * 
    * @throws {Error} Si el operador proporcionado no es reconocido.
    */
    loadComparisionOperator(operator) {
        switch (operator) {
            case '==':
                this.instructions.push('EQ');
                break;
            case '>':
                this.instructions.push('GT');
                break;
            case '>=':
                this.instructions.push('GTE');
                break;
            case '<':
                this.instructions.push('LT');
                break;
            case '<=':
                this.instructions.push('LTE');
                break;
            default:
                throw new Error(`Operador desconocido: ${operator}`);
        }
    }

    /** 
    * Carga una instrucción binaria basada en el operador aritmético proporcionado.
    * Este método convierte un operador binario aritmético (como `+`, `-`, `*`, `/`) en una instrucción correspondiente
    * para la máquina virtual. Si el operador no es reconocido, se lanza un error.
    * 
    * @method loadBinaryOperator
    * 
    * @param {string} operator El operador binario aritmético que se va a cargar. Debe ser uno de los siguientes: `+`, `-`, `*`, `/`.
    * 
    * @throws {Error} Si el operador proporcionado no es reconocido.
    */
    loadBinaryOperator(operator) {
        switch (operator) {
            case '+':
                this.instructions.push('ADD');
                break;
            case '-':
                this.instructions.push('SUB');
                break;
            case '*':
                this.instructions.push('MUL');
                break;
            case '/':
                this.instructions.push('DIV');
                break;
            default:
                throw new Error(`Operador desconocido: ${operator}`);
        }
    }
    
    transpileIfStatement(node) {
        
    }
    
    transpilePrintStatement(node) {
        // Iterar sobre los argumentos del PrintStatement
        node.args.forEach(arg => {
            this.loadValue(arg); // Cargar el valor del argumento en la pila
        });
    
        // Emitir la instrucción de impresión
        this.instructions.push('PRN'); // Comando para imprimir
    }
    
    transpileComparisionExpression(node) {
        this.loadValue(node.right);
        this.loadValue(node.left);
        this.loadComparisionOperator(node.operator);
    }

    /** 
    * Este método carga el valor de la declaración y luego genera la instrucción de carga para el valor junto con la instrucción
    * de enlace (`BLD`) para asociar el valor con un índice de enlace específico. La instrucción generada se añade a la lista de
    * instrucciones para la máquina virtual.
    * 
    * @method transpileValueDeclaration
    * @param {Object} node El nodo que representa la declaración de valor. Este nodo debe tener la propiedad:
    * - `value`: El valor que se va a cargar.
    * @param {number} bindingIndex El índice de enlace que se utiliza para asociar el valor cargado.
    */
    transpileValueDeclaration(node, bindingIndex) {
        
        if (node.value.type === 'LambdaExpression') {
            // Manejo especial para LambdaExpression
            //this.instructions.push(`LDF $${node.id}`); // Cargar la función lambda
           // this.instructions.push(`BLD 0 ${bindingIndex}`); // Asociar al binding index
        } else {
            this.loadValue(node.value); // Manejar el valor normalmente
            this.instructions.push(`BLD 0 ${bindingIndex}`);
        }
        
    }

    /** 
     * Transforma una declaración de función en instrucciones correspondientes.
     * Este método carga el nombre de la función y luego genera la instrucción de carga para el nombre junto con la instrucción
     * de enlace (`BLD`) para asociar la función con un índice de enlace específico. La instrucción generada se añade a la lista de
     * instrucciones para la máquina virtual.
     * 
     * @method transpileFunctionDeclaration
     * 
     * @param {Object} node El nodo que representa la declaración de la función. 
     * @param {number} bindingIndex El índice de enlace que se utiliza para asociar la función cargada.
     */
    transpileFunctionDeclaration(node, bindingIndex) {
        this.loadValue(node.name);
        this.instructions.push(`BLD 0 ${bindingIndex}`);
    }

    /** 
    * Transforma una expresión en instrucciones correspondientes.
    * 
    * Este método procesa una expresión que puede ser binaria (con operador y dos operandos) o una expresión simple (como un valor literal o variable).
    * Si la expresión tiene un operador, genera las instrucciones para cargar ambos operandos y aplicar el operador. 
    * Si la expresión es un valor literal o una variable, solo genera la instrucción para cargar el valor.
    * 
    * @method transpileExpression
    * @param {Object} node El nodo que representa la expresión.
    */
    transpileExpression(node) {
        if (node.left && node.right) {
            this.loadValue(node.left);
            this.instructions.push(`OPR ${node.operator}`);
            this.loadValue(node.right);
        } else {
            // Para valores literales o variables
            this.instructions.push(`LDV ${node.value}`);
        }
    }

    /** 
    * Transforma una llamada a función en instrucciones correspondientes para la máquina virtual.
    * Este método maneja la conversión de una llamada a función, procesando los argumentos de la función 
    * y generando las instrucciones apropiadas para cada tipo de argumento. 
    * Si los argumentos son expresiones binarias, se desglosan y se procesan antes de la llamada. 
    * Finalmente, se genera la instrucción para llamar a la función con los argumentos procesados.
    * 
    * @method transpileFunctionCall
    * @param {Object} node El nodo que representa la llamada a la función.
    */
    transpileFunctionCall(node) {
        console.log('=============================================');
        console.log(node);
        console.log('Argumentos: ', node.args);

        node.args.forEach(arg => {
            if (Array.isArray(arg) && Array.isArray(arg[0])) {
                // Si el argumento es un arreglo de arreglos, extrae el valor.
                const value = arg[0][0];
                console.log('Argumento: ', value);
                if (typeof value === 'number') {
                    this.instructions.push(`LDV ${value}`);
                } else {
                    this.instructions.push(`LDV "${value}"`);
                }
            } else if (arg.type === 'BinaryExpression') {
                // Maneja expresiones binarias como `x + 1`
                const left = arg.left[0][0]; // Primer operando
                const right = arg.right[0][0]; // Segundo operando
                const operator = arg.operator;
                console.log(`Argumento Binario: ${left} ${operator} ${right}`);
                this.instructions.push(`LDV "${left}"`);
                this.instructions.push(`LDV "${right}"`);
                this.instructions.push(`OP "${operator}"`);
            } else {
                console.log('Argumento desconocido:', arg);
            }
        });
        

        this.instructions.push(`LDF $${functionName}`);
        //this.instructions.push(`APP $${node.functionName} ${node.args.length} ; ${node.functionName}(${node.args.join(', ')})`);
        this.instructions.push(`APP  ${node.args.length}  ; ${node.functionName}(${node.args.join(', ')})`);
    }

    /** 
    * Obtiene el código transpilado en formato de texto.
    * Este método devuelve las instrucciones generadas durante el proceso de transpilación 
    * en una cadena de texto, donde cada instrucción se encuentra en una nueva línea. 
    * Las instrucciones están almacenadas en el arreglo `this.instructions`, que contiene 
    * las operaciones correspondientes para la máquina virtual.
    * 
    * @method getTranspiledCode
    * @returns {string} El código transpilado, representado como una cadena de texto con instrucciones separadas por saltos de línea.
    */
    getTranspiledCode() {
        return this.instructions.join('\n');
    }
}

export default Transpiler;