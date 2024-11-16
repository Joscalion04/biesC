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
    constructor(functionAttributes) {
        this.instructions = [];
        this.functionAttributes = functionAttributes;
        this.ifIndexes = [];
        this.instructionIndexes = [];
        this.attributesSet = new Set();
        this.bindings = [];
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
    */
    transpile() {
        // Recorrer cada función y procesar sus atributos
        for (const functionName in this.functionAttributes) {

            this.bindings.unshift({fun: functionName, binding: []});
            
            this.instructions.push('=================================');
            this.instructions.push(`$FUN $${this.getFunctionClosure(functionName)}                ; ${functionName}`);

            const attributes = this.functionAttributes[functionName].secuencia;

            // Recorrer los atributos de la función
            attributes.forEach((attribute, index) => this.processAttribute(attribute, attributes, index, 'function'));

            if (functionName === 'main') {
                this.instructions.push('HLT');
            }

            this.instructions.push('$END');

        }
        console.log('Instrucciones: ', this.instructions);
    }

    // Transpilación de bloques
    transpileBlock(block) {
        block.statements.forEach(statement => this.processAttribute(statement, block.statements, null, 'block'));
    }

    // Transpilado de valores (declaraciones, expresiones, etc.)
    transpileValue(value) {
        this.processAttribute(value, [], null, 'value');
    }

    // Procesar un atributo
    processAttribute(attribute, attributes, index, type) {
        if (this.attributesSet.has(attribute.id)) {
            return;
        }
        switch (attribute.type) {
            case 'LetDeclaration':
            case 'ConstDeclaration': {
                this.handleDeclaration(attribute, attributes, index, type);
            } break;
            case 'ComparisionExpression': {
                if (this.attributesSet.has(attribute.id)) {
                    return;
                }
                this.attributesSet.add(attribute.id);
                this.transpileComparisionExpression(attribute);
            } break;
            case 'IfStatement': {
                if (this.attributesSet.has(attribute.id)) {
                    return;
                }
                this.attributesSet.add(attribute.condition.id);
                this.transpileIfStatement(attribute);
            } break;
            case 'Block': {
                for (let j = index; j < attributes.length; j++) {
                    if (
                     attributes[j].type === 'IfStatement' ||
                     attributes[j].type === 'ElseIfStatement' || 
                     attributes[j].type === 'ElseStatement'
                 ) {
                        if (attributes[j].body.id === attribute.id) {
                            break;
                        }
                    }
                    if (!this.attributesSet.has(attribute.id)) {
                        this.attributesSet.add(attribute.id);
                        this.transpileBlock(attribute);
                    }
                }
             } break;
            case 'BinaryExpression': {
                if (this.attributesSet.has(attribute.id)) {
                    return;
                }
                this.handleBinaryExpression(attribute, attributes, index, type);
            } break;
            case 'ReturnStatement': {
                if (type === 'block') {
                    this.transpileReturnStatement(attribute);
                }
            } break;
            case 'FunctionCall': {
                if (type === 'value' || type === 'expression') {
                    this.transpileFunctionCall(attribute);
                }
            } break;
            case 'PrintStatement':{
                // this.transpilePrintStatement(attribute); // Manejo de PrintStatement
            } break;
            case 'ExpressionStatement': {
                this.processAttribute(attribute.expression, attributes, index, 'expression');
            } break;
            case 'ElseIfStatement':
            case 'ElseStatement':
            case 'FunctionDeclaration':
                break;
            default:
                console.warn('Tipo de atributo desconocido:', attribute.type);
        }
    }

    // Función auxiliar para buscar índices genéricos
    findIndex(callback) {
        for (let index = 0; index < this.bindings.length; index++) {
            if (callback(this.bindings[index], index)) {
                return index; // Devuelve el índice si la condición se cumple
            }
        }
        return -1; // Devuelve -1 si no encuentra el valor
    }

    // Busca el índice de un binding dentro de los bindings de una función
    getBindingIndex(id) {
        for (const bindings of this.bindings) {
            const index = bindings.binding.indexOf(id);
            if (index !== -1) {
                return index;
            }
        }
        return -1;
    }

    // Busca el índice de un binding por nombre de función
    getBindingIndexByName(fun) {
        return this.findIndex((binding) => binding.fun === fun);
    }

    // Manejar expresiones binarias
    handleBinaryExpression(attribute, attributes, index, type) {
        if (this.attributesSet.has(attribute.id)) {
            return;
        }

        // Verificar si la expresión binaria es parte de un bloque futuro
        const found = this.isAttributeInFutureBlocks(attribute, attributes, index);

        // Transpilar solo si no fue encontrado
        if (!found) {
            this.attributesSet.add(attribute.id);
            this.transpileExpression(attribute);
        }
    }

    // Manejar declaraciones Let/Const
    handleDeclaration(attribute, attributes, index, type) {
        if (this.attributesSet.has(attribute.id)) {
            return; // Si el atributo ya fue procesado, salir
        }

        if (type === 'function') {
            // Verificar si el atributo ya está presente en bloques posteriores
            const found = this.isAttributeInFutureBlocks(attribute, attributes, index);

            // Transpilar solo si no fue encontrado
            if (!found) {
                this.attributesSet.add(attribute.id);
                this.transpileValueDeclaration(attribute);
            }
        } else {
            // Para otros casos, transpilación directa
            this.attributesSet.add(attribute.id);
            this.transpileValueDeclaration(attribute);
        }
    }

    // Método auxiliar: verifica si un atributo está en futuros bloques
    isAttributeInFutureBlocks(attribute, attributes, startIndex) {
        for (let j = startIndex + 1; j < attributes.length; j++) {
            const currentAttribute = attributes[j];

            // Validar si es un bloque
            if (currentAttribute.type === 'Block') {
                // Verificar si el atributo está dentro de las declaraciones del bloque
                for (const statement of currentAttribute.statements) {
                    if (statement.id === attribute.id) {
                        return true; // Atributo encontrado
                    }
                }
            } else if (currentAttribute.type === 'FunctionCall') {
                // Verificar si el atributo está dentro de los argumentos de la llamada a función
                for (const arg of currentAttribute.args) {
                    if (arg.id === attribute.id) {
                        return true; // Atributo encontrado
                    }
                }
            }
        }
        return false; // Atributo no encontrado
    }


    transpileReturnStatement(node) {
        this.transpileValue(node.value);
        this.instructions.push('RET');
        this.incrementActualIfIndex();
    }
    
    transpileIfStatement(node) {
        // Procesar el bloque del `if`
        this.processIfBranch(node.condition, node.body, "if");
    
        // Procesar el bloque del `else if`
        if (node.elseIfStatement) {
            this.processElseIfBranch(node.elseIfStatement);
        }
    
        // Procesar el bloque del `else`
        if (node.elseStatement) {
            this.transpileBlock(node.elseStatement.body);
        }
    }
    
    processIfBranch(condition, body, label) {
        this.addBranch(condition, body, label);
    }
    
    processElseIfBranch(elseIfNode) {
        if (!this.attributesSet.has(elseIfNode.condition.id)) {
            this.attributesSet.add(elseIfNode.condition.id);
            this.transpileComparisionExpression(elseIfNode.condition);
        }
        this.addBranch(elseIfNode.condition, elseIfNode.body, "else if");
    
        // Procesar el bloque del `else` dentro del `else if`
        if (elseIfNode.elseStatement) {
            this.transpileBlock(elseIfNode.elseStatement.body);
        }
    }
    
    addBranch(condition, body, label) {
        this.ifIndexes.push(1);
        this.instructionIndexes.push(this.instructions.length);
    
        if (body) {
            this.transpileBlock(body);
        }
    
        const indexToInsert = this.instructionIndexes.pop() - 1;
        const conditionText = condition ? `${condition.left} ${condition.operator} ${condition.right}` : "";
        this.instructions.splice(
            indexToInsert + 1,
            0,
            `BF ${this.ifIndexes.pop()}              ; ${label}(${conditionText})`
        );
    }
    
    getFunctionClosure(functionName) {
        return this.functionAttributes[functionName].id;
    }

    incrementActualIfIndex() {
        this.ifIndexes.push(this.ifIndexes.pop() + 1);
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
        // console.log('Valor: ', value);
        if (typeof value === 'number') {
            this.instructions.push(`LDV ${value}`);
            this.incrementActualIfIndex();
        } else if (typeof value === 'string') {
            this.instructions.push(`LDV "${value}"`);
            this.incrementActualIfIndex();
        } else if (typeof value === 'object') {
            if (value.type === 'FunctionCall') {
                this.transpileFunctionCall(value);
            } else {
                this.instructions.push(`LDF $${this.getFunctionClosure(value.functionName)}`);
                this.incrementActualIfIndex();
            }
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
        this.incrementActualIfIndex();
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
        this.incrementActualIfIndex();
    }
    
    transpilePrintStatement(node) {
        // Iterar sobre los argumentos del PrintStatement
        node.args.forEach(arg => {
            this.loadValue(arg); // Cargar el valor del argumento en la pila
        });
    
        // Emitir la instrucción de impresión
        this.instructions.push('PRN'); // Comando para imprimir
        this.incrementActualIfIndex();
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
    */
    transpileValueDeclaration(node) {
        if (node.value.type === 'LambdaExpression') {
            // Manejo especial para LambdaExpression
            //this.instructions.push(`LDF $${node.id}`); // Cargar la función lambda
           // this.instructions.push(`BLD 0 ${bindingIndex}`); // Asociar al binding index
        } else {
            this.loadValue(node.value); // Manejar el valor normalmente
            this.bindings[0].binding.push(node.id);
            this.instructions.push(`BST 0 ${this.getBindingIndex(node.id)}`); // Asociar al binding index
            this.incrementActualIfIndex();
        }
        
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
        if (node.type === 'BinaryExpression') {
            // Procesa recursivamente la parte derecha de la expresión
            this.transpileExpression(node.right);

            // Procesa recursivamente la parte izquierda de la expresión
            this.transpileExpression(node.left);
    
            // Aplica el operador binario al resultado de los operandos
            this.loadBinaryOperator(node.operator);
        } else if (node.type === 'Identifier') {
            // Si es una variable, carga su valor
            this.instructions.push(`LDV ${node.name}`);
            this.incrementActualIfIndex();
        } else if (typeof node === 'number' || typeof node === 'string') {
            // Si es un valor literal, simplemente carga el valor
            this.loadValue(node);
        } else {
            throw new Error(`Tipo de nodo desconocido o no soportado: ${JSON.stringify(node)}`);
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
        node.args.forEach(arg => {
            if (arg.type === 'BinaryExpression') {
                this.loadValue(arg.right);
                this.loadValue(arg.left);
                this.loadBinaryOperator(arg.operator);
            } else {
                this.loadValue(arg);
            }
        });
        
        this.instructions.push(`LDF $${this.getFunctionClosure(node.functionName)}`);
        this.incrementActualIfIndex();
        this.instructions.push(`APP  ${node.args.length}                ; ${node.functionName}(${node.args.join(', ')})`);
        this.incrementActualIfIndex();
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