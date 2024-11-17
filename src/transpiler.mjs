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
        this.functionDeclarations = [];
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

            // console.log('='.repeat(100));
            // console.log('Nombre de la función: ', functionName);
            // console.log('='.repeat(100));

            if (functionName === 'main') {
                this.bindings.unshift({fun: functionName, binding: []});
            }

            const bindingIndex = this.getBindingIndexByName(functionName);
            // ponemos el binding en la primera posición
            this.bindings.unshift(this.bindings.splice(bindingIndex, 1)[0]);
            
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
        const statements = Array.isArray(block.statements) ? block.statements : [block.statements];
        statements.forEach(statement => this.processAttribute(statement, statements, null, 'block'));
    }    

    // Transpilado de valores (declaraciones, expresiones, etc.)
    transpileValue(value) {
        this.processAttribute(value, [], null, 'value');
    }

    // Procesar un atributo
    processAttribute(attribute, attributes, index, type) {
        // console.log('Atributo: ', attribute);
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
                        if (attribute.id !== attributes[j].id || attributes[j+1] === undefined) {
                            this.attributesSet.add(attribute.id);
                            this.transpileBlock(attribute);
                        }
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
                this.transpilePrintStatement(attribute);
            } break;
            case 'ExpressionStatement': {
                this.processAttribute(attribute.expression, attributes, index, 'expression');
            } break;
            case 'FunctionDeclaration': {
                if (this.attributesSet.has(attribute.id)) {
                    return;
                }
                this.attributesSet.add(attribute.id);
                this.functionDeclarations.push(attribute);
            } break;
            case 'LambdaExpression': {
                if (type === 'value') {
                    this.handleLambdaExpression(attribute, attributes, index);
                }
            } break;
            case 'LetInDeclaration': {
                this.handleDeclaration(attribute, attributes, index, type);
            } break;
            case 'ElseIfStatement':
            case 'ElseStatement':
                break;
            default:
                console.warn('Tipo de atributo desconocido:', attribute.type);
        }
    }

    // Manejar expresiones lambda
    handleLambdaExpression(node, attributes, index) {
        if (this.attributesSet.has(node.id)) {
            return;
        }
        this.attributesSet.add(node.id);
        if (typeof node.body === 'object') {
            this.processAttribute(node.body, attributes, index, 'function');
        } else {
            this.loadValue(node.body, node.name ? node.name : '');
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
    getBindingIndex(name) {
        // Recorre todas las colecciones de bindings en el contexto actual
        for (let collectionIndex = 0; collectionIndex < this.bindings.length; collectionIndex++) {
            // Obtiene la lista de bindings de la colección actual
            const bindingsList = this.bindings[collectionIndex].binding;
            
            // Busca el índice del binding con el nombre proporcionado
            const bindingIndex = bindingsList.findIndex(binding => binding.name === name);
            
            if (bindingIndex !== -1) {
                return [collectionIndex, bindingIndex]; // Devuelve el índice de la colección y el índice del binding
            }
        }
        return [-1, -1]; // Devuelve [-1, -1] si no se encuentra el binding
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
            this.transpileExpression(attribute, attribute.name ? attribute.name : '');
        }
    }

    // Manejar declaraciones Let/Const
    handleDeclaration(attribute, attributes, index, type) {
        if (this.attributesSet.has(attribute.id) || attribute.value ? attribute.value.type === 'LambdaExpression' : false) {
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
    isAttributeInFutureBlocks(currentAttribute, allAttributes, startIndex) {
        for (let j = startIndex + 1; j < allAttributes.length; j++) {
            const futureAttribute = allAttributes[j];

            // Validar si es un bloque
            if (futureAttribute.type === 'Block') {
                // Verificar si el atributo está dentro de las declaraciones del bloque
                for (const statement of futureAttribute.statements) {
                    if (statement.id === currentAttribute.id) {
                        return true; // Atributo encontrado
                    }
                }
            } else if (futureAttribute.type === 'FunctionCall') {
                // Verificar si el atributo está dentro de los argumentos de la llamada a función
                for (const arg of futureAttribute.args) {
                    if (arg.id === currentAttribute.id) {
                        return true; // Atributo encontrado
                    }
                }
            } else if (futureAttribute.type === 'BinaryExpression') {
                // Verificar si el atributo está dentro de la expresión binaria
                if (futureAttribute.left.id === currentAttribute.id || futureAttribute.right.id === currentAttribute.id) {
                    return true; // Atributo encontrado
                }
            } else if (futureAttribute.type === 'LetInDeclaration') {
                // Verificar si el atributo está dentro de las declaraciones LetIn
                for (const declaration of futureAttribute.declarations) {
                    if (declaration.id === currentAttribute.id) {
                        return true; // Atributo encontrado
                    }
                }
                // Verificar si el atributo está dentro del cuerpo de la declaración LetIn
                for (const statement of futureAttribute.body.statements) {
                    if (statement.id === currentAttribute.id) {
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
    loadValue(value, name, type) {
        let bindingIndex = this.getBindingIndex(name || value);
    
        // Si el binding no existe, cargamos el valor y lo asociamos si es necesario
        if (bindingIndex[0] === -1) {
            // Manejar valores literales (números y cadenas)
            if (typeof value === 'number' || typeof value === 'string') {
                this.loadLiteral(value);
    
                if (type === 'declaration') {
                    this.addBinding(name, value);
                    bindingIndex = this.getBindingIndex(name);
                    this.bindToIndex(bindingIndex, name || value);
                }
            }
            // Para valores complejos (funciones, expresiones binarias, etc.)
            else if (typeof value === 'object') {
                this.handleComplexValue(value, name);
            }
        } else {
            // Si el binding ya existe, cargamos desde el índice
            this.instructions.push(`BLD ${bindingIndex[0]} ${bindingIndex[1]}                              ;${name || value}`);  // Asociación de binding
            this.incrementActualIfIndex();
        }
    }
    
    // Función auxiliar para cargar valores literales
    loadLiteral(value) {
        const formattedValue = typeof value === 'string' ? `"${value}"` : value;
        this.instructions.push(`LDV ${formattedValue}`);
        this.incrementActualIfIndex();
    }
    
    // Función auxiliar para agregar un binding
    addBinding(name, value) {
        this.bindings[0].binding.push({ name, value });
    }
    
    // Función auxiliar para asociar al índice de binding
    bindToIndex(bindingIndex, label) {
        this.instructions.push(`BST ${bindingIndex[0]} ${bindingIndex[1]}                              ;${label}`);
        this.incrementActualIfIndex();
    }
    
    // Función auxiliar para manejar valores complejos
    handleComplexValue(value, name) {
        if (value.type === 'FunctionCall') {
            this.transpileFunctionCall(value);
        } else if (value.type === 'BinaryExpression') {
            this.transpileExpression(value, name);
        } else {
            this.instructions.push(`LDF $${this.getFunctionClosure(value.functionName)}`);
            this.incrementActualIfIndex();
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
            this.loadValue(arg, node.name ? node.name : ''); // Cargar el valor del argumento en la pila
        });
    
        // Emitir la instrucción de impresión
        this.instructions.push('PRN'); // Comando para imprimir
        this.incrementActualIfIndex();
    }
    
    transpileComparisionExpression(node) {
        this.loadValue(node.right, node.name ? node.name : '');
        this.loadValue(node.left, node.name ? node.name : '');
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
        if (node.value ? node.value.type === 'LambdaExpression' : false) {
            // Manejo especial para LambdaExpression
            //this.instructions.push(`LDF $${node.id}`); // Cargar la función lambda
           // this.instructions.push(`BLD 0 ${bindingIndex}`); // Asociar al binding index
        } else if (node.type === 'LetInDeclaration') {
            // Recorremos las declaraciones LetIn
            node.declarations.forEach(declaration => {
                this.transpileValue(declaration);
            });
            // Procesamos el cuerpo de la declaración LetIn
            this.transpileBlock(node.body);
        } else {
            this.loadValue(node.value, node.name ? node.name : '', 'declaration'); // Manejar el valor normalmente
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
    transpileExpression(node, name) {
        if (node.type === 'BinaryExpression') {
            const processOperand = (operand, nodeName) => {
                this.transpileExpression(operand, nodeName);  // No hace falta convertir a cadena
            };
            
            // Procesa ambos operandos
            processOperand(node.left, node.name ? node.name : '');
            processOperand(node.right, node.name ? node.name : '');
            
            // Aplica el operador binario al resultado de los operandos
            const isStringOperand = typeof node.left === 'string' || typeof node.right === 'string';
            if (isStringOperand && node.operator === '+') {
                this.instructions.push('CAT');
                this.incrementActualIfIndex();
            } else {
                this.loadBinaryOperator(node.operator);
            }                   
        } else if (node.type === 'Identifier') {
            // Si es una variable, carga su valor
            this.instructions.push(`LDV ${node.name}`);
            this.incrementActualIfIndex();
        } else if (typeof node === 'number' || typeof node === 'string') {
            // Si es un valor literal, simplemente carga el valor
            this.loadValue(node, name);
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
                // Procesa los operandos de la expresión binaria
                this.loadValue(arg.right, arg.name ? arg.name : '');
                this.loadValue(arg.left, arg.name ? arg.name : '');
    
                if ((typeof arg.right === 'string' || typeof arg.left === 'string') && arg.operator === '+') {
                    this.instructions.push('CAT');
                    this.incrementActualIfIndex();
                } else {
                    this.loadBinaryOperator(arg.operator);
                }
            } else {
                // Carga el valor directamente si no es una expresión binaria
                this.loadValue(arg, arg.name ? arg.name : '');
            }
        });
    
        this.instructions.push(`LDF $${this.getFunctionClosure(node.functionName)}`);
        this.incrementActualIfIndex();
        this.instructions.push(`APP  ${node.args.length}                ; ${node.functionName}(${node.args.join(', ')})`);
        this.incrementActualIfIndex();
    
        // Obtiene la declaración de la función y sus parámetros
        const functionDeclaration = this.functionDeclarations.find(declaration => declaration.name === node.functionName);
        const functionDeclarationArgs = functionDeclaration.params;
    
        // Los bindings de la nueva función se llevan los bindings de la función actual según la cantidad de args,
        // pero con los nombres de los args.
        this.bindings.push({
            fun: node.functionName,
            binding: this.bindings[0].binding.slice(0, node.args.length).map((binding, index) => {
                // Asocia el nombre de los parámetros de la función con los valores de los argumentos
                return {
                    name: functionDeclarationArgs[index],  // Nombre del argumento de la función
                    value: binding.value   // Conserva el valor del binding actual
                };
            })
        });
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