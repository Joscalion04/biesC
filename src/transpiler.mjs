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
    // transpile() {
    //     // console.log('Atributos de las funciones: ', functionAttributes);

    //     // Recorrer cada función y procesar sus atributos
    //     for (const functionName in this.functionAttributes) {

    //         let bindingIndex = 0;
    //         // console.log('==============================================================================================================');
    //         // console.log('Función: ', functionName);
    //         // console.log('==============================================================================================================');
    //         this.instructions.push('=================================');
    //         this.instructions.push(`$FUN $${this.getFunctionClosure(functionName)}                ; ${functionName}`);

    //         const attributes = this.functionAttributes[functionName].secuencia;

    //         // Recorrer los atributos de la función
    //         for (let i = 0; i < attributes.length; i++) {

    //             // console.log('Atributo: ', attributes[i]);

    //             if (attributes[i].type === 'LetDeclaration' || attributes[i].type === 'ConstDeclaration') {
    //                 if (this.attributesSet.has(attributes[i].id)) {
    //                     continue;
    //                 }
    //                 this.attributesSet.add(attributes[i].id);
    //                 for (let j = i+1; j < attributes.length; j++) {
    //                     if (attributes[j].type === 'Block') {
    //                         if (attributes[j].statements[0] !== attributes[i]) {
    //                             this.transpileValueDeclaration(attributes[i], bindingIndex);
    //                             bindingIndex++;
    //                         }
    //                         break;
    //                     }
    //                 }
    //             } else if (attributes[i].type === 'ComparisionExpression') {
    //                 if (this.attributesSet.has(attributes[i].id)) {
    //                     continue;
    //                 }
    //                 this.attributesSet.add(attributes[i].id);
    //                 this.transpileComparisionExpression(attributes[i]);
    //             } else if (attributes[i].type === 'IfStatement') {
    //                 if (this.attributesSet.has(attributes[i].condition.id)) {
    //                     continue;
    //                 }
    //                 this.attributesSet.add(attributes[i].condition.id);
    //                 this.transpileIfStatement(attributes[i], bindingIndex);
    //             } else if (attributes[i].type === 'Block') {
    //                 if (this.attributesSet.has(attributes[i].id)) {
    //                     continue;
    //                 }
    //                 this.attributesSet.add(attributes[i].id);
    //                 this.transpileBlock(attributes[i], bindingIndex);
    //             } else if (attributes[i].type === 'BinaryExpression') {
    //                 if (this.attributesSet.has(attributes[i].id)) {
    //                     continue;
    //                 }
    //                 this.attributesSet.add(attributes[i].id);
    //                 this.transpileExpression(attributes[i]); // Manejo de BinaryExpression
    //             } else if (attributes[i].type === 'PrintStatement') {
    //                 // this.transpilePrintStatement(attributes[i]); // Manejo de PrintStatement
    //             } else if (attributes[i].type === 'ExpressionStatement') {
    //                 // this.transpileExpressionStatement(attributes[i]); // Manejo de ExpressionStatement
    //             } else if (attributes[i].type === 'FunctionCall') {
    //                 // this.transpileFunctionCall(attributes[i]);
    //             } 

    //            // if (attributes[i].type === 'FunctionDeclaration') {
    //            //      this.transpileFunctionDeclaration(attributes[i], bindingIndex);
    //            //  }
    //         }

    //         if (functionName === 'main') {
    //             this.instructions.push('HLT');
    //         }

    //         this.instructions.push('$END');
    //     }
    //     console.log('Instrucciones: ', this.instructions);
    // }

    // transpileBlock(block, bindingIndex) {
    //     block.statements.forEach(statement => {
    //         if (statement.type === 'LetDeclaration' || statement.type === 'ConstDeclaration') {
    //             if (this.attributesSet.has(statement.id)) {
    //                 return;
    //             }
    //             this.attributesSet.add(statement.id);
    //             this.transpileValueDeclaration(statement, bindingIndex);
    //         }else if (statement.type === 'ComparisionExpression') {
    //             if (this.attributesSet.has(statement.id)) {
    //                 return;
    //             }
    //             this.attributesSet.add(statement.id);
    //             this.transpileComparisionExpression(statement);
    //         } else if (statement.type === 'IfStatement') {
    //             if (this.attributesSet.has(statement.condition.id)) {
    //                 return;
    //             }
    //             this.attributesSet.add(statement.condition.id);
    //             this.transpileIfStatement(statement, bindingIndex);
    //         } else if (statement.type === 'ReturnStatement') {
    //             if (this.attributesSet.has(statement.id)) {
    //                 return;
    //             }
    //             this.attributesSet.add(statement.id);
    //             this.transpileReturnStatement(statement);
    //         } else if (statement.type === 'BinaryExpression') {
    //             if (this.attributesSet.has(statement.id)) {
    //                 return;
    //             }
    //             this.attributesSet.add(statement.id);
    //             this.transpileExpression(statement); // Manejo de BinaryExpression
    //         } else if (statement.type === 'PrintStatement') {
    //             // this.transpilePrintStatement(statement); // Manejo de PrintStatement
    //         } else if (statement.type === 'ExpressionStatement') {
    //             // this.transpileExpressionStatement(statement); // Manejo de ExpressionStatement
    //         } else if (statement.type === 'FunctionCall') {
    //             // this.transpileFunctionCall(statement);
    //         } 
    //     });
    // }

    // transpileValue(value) {
    //     if (value.type === 'LetDeclaration' || value.type === 'ConstDeclaration') {
    //         if (this.attributesSet.has(value.id)) {
    //             return;
    //         }
    //         this.attributesSet.add(value.id);
    //         this.transpileValueDeclaration(value);
    //     } else if (value.type === 'ComparisionExpression') {
    //         if (this.attributesSet.has(value.id)) {
    //             return;
    //         }
    //         this.attributesSet.add(value.id);
    //         this.transpileComparisionExpression(value);
    //     } else if (value.type === 'IfStatement') {
    //         if (this.attributesSet.has(value.condition.id)) {
    //             return;
    //         }
    //         this.attributesSet.add(value.condition.id);
    //         this.transpileIfStatement(value);
    //     } else if (value.type === 'Block') {
    //         if (this.attributesSet.has(value.id)) {
    //             return;
    //         }
    //         this.attributesSet.add(value.id);
    //         this.transpileBlock(value);
    //     } else if (value.type === 'BinaryExpression') {
    //         if (this.attributesSet.has(value.id)) {
    //             return;
    //         }
    //         this.attributesSet.add(value.id);
    //         this.transpileExpression(value); // Manejo de BinaryExpression
    //     } else if (value.type === 'FunctionCall') {
    //         if (this.attributesSet.has(value.id)) {
    //             return;
    //         }
    //         this.attributesSet.add(value.id);
    //         this.transpileFunctionCall(value);
    //     } else if (value.type === 'PrintStatement') {
    //         // this.transpilePrintStatement(value); // Manejo de PrintStatement
    //     } else if (value.type === 'ExpressionStatement') {
    //         // this.transpileExpressionStatement(value); // Manejo de ExpressionStatement
    //     }

    // }

    transpile() {
        // Recorrer cada función y procesar sus atributos
        for (const functionName in this.functionAttributes) {
            let bindingIndex = 0;
            this.instructions.push('=================================');
            this.instructions.push(`$FUN $${this.getFunctionClosure(functionName)}                ; ${functionName}`);

            const attributes = this.functionAttributes[functionName].secuencia;

            // Recorrer los atributos de la función
            attributes.forEach((attribute, index) => this.processAttribute(attribute, attributes, index, bindingIndex, 'function'));

            if (functionName === 'main') {
                this.instructions.push('HLT');
            }

            this.instructions.push('$END');
        }
        console.log('Instrucciones: ', this.instructions);
    }

    // Transpilación de bloques
    transpileBlock(block, bindingIndex) {
        block.statements.forEach(statement => this.processAttribute(statement, block.statements, null, bindingIndex, 'block'));
    }

    // Transpilado de valores (declaraciones, expresiones, etc.)
    transpileValue(value, bindingIndex) {
        this.processAttribute(value, [], null, bindingIndex, 'value');
    }

    // Procesar un atributo
    processAttribute(attribute, attributes, index, bindingIndex, type) {
        if (this.attributesSet.has(attribute.id)) {
            return;
        }
        switch (attribute.type) {
            case 'LetDeclaration':
            case 'ConstDeclaration': {
                this.handleDeclaration(attribute, attributes, index, bindingIndex, type);
            } break;
            case 'ComparisionExpression': {
                this.transpileComparisionExpression(attribute);
            } break;
            case 'IfStatement': {
                this.transpileIfStatement(attribute, bindingIndex);
            } break;
            case 'Block': {
                this.transpileBlock(attribute, bindingIndex);
            } break;
            case 'BinaryExpression': {
                this.transpileExpression(attribute);
            } break;
            case 'ReturnStatement': {
                if (type === 'block') {
                    this.transpileReturnStatement(attribute, bindingIndex);
                }
            } break;
            case 'FunctionCall': {
                if (type === 'value') {
                    if (this.attributesSet.has(attribute.id)) {
                        return;
                    }
                    this.attributesSet.add(attribute.id);
                    this.transpileFunctionCall(attribute);
                }
            } break;
            case 'PrintStatement':
                // this.transpilePrintStatement(attribute); // Manejo de PrintStatement
                break;
            case 'ExpressionStatement':
                // this.transpileExpressionStatement(attribute); // Manejo de ExpressionStatement
                break;
            case 'ElseIfStatement':
            case 'ElseStatement':
            case 'FunctionDeclaration':
                break;
            default:
                console.warn('Tipo de atributo desconocido:', attribute.type);
        }
    }

    // Manejar declaraciones Let/Const
    handleDeclaration(attribute, attributes, index, bindingIndex, type) {
        if (this.attributesSet.has(attribute.id)) {
            return;
        }
        if (type === 'function') {
            for (let j = index + 1; j < attributes.length; j++) {
                if (attributes[j].type === 'Block' && attributes[j].statements[0] !== attribute) {
                    this.attributesSet.add(attribute.id);
                    this.transpileValueDeclaration(attribute, bindingIndex);
                    bindingIndex++;
                    break;
                }
            }
        } else {
            this.attributesSet.add(attribute.id);
            this.transpileValueDeclaration(attribute, bindingIndex);
        }
    }

    transpileReturnStatement(node, bindingIndex) {
        this.transpileValue(node.value, bindingIndex);
        this.instructions.push('RET');
        this.incrementActualIfIndex();
    }
    
    transpileIfStatement(node, bindingIndex) {
        // Procesar el bloque del `if`
        this.processIfBranch(node.condition, node.body, "if", bindingIndex);
    
        // Procesar el bloque del `else if`
        if (node.elseIfStatement) {
            this.processElseIfBranch(node.elseIfStatement, bindingIndex);
        }
    
        // Procesar el bloque del `else`
        if (node.elseStatement) {
            this.transpileBlock(node.elseStatement.body, bindingIndex);
        }
    }
    
    processIfBranch(condition, body, label, bindingIndex) {
        this.addBranch(condition, body, label, bindingIndex);
    }
    
    processElseIfBranch(elseIfNode, bindingIndex) {
        if (!this.attributesSet.has(elseIfNode.condition.id)) {
            this.attributesSet.add(elseIfNode.condition.id);
            this.transpileComparisionExpression(elseIfNode.condition);
        }
        this.addBranch(elseIfNode.condition, elseIfNode.body, "else if", bindingIndex);
    
        // Procesar el bloque del `else` dentro del `else if`
        if (elseIfNode.elseStatement) {
            this.transpileBlock(elseIfNode.elseStatement.body, bindingIndex);
        }
    }
    
    addBranch(condition, body, label, bindingIndex) {
        this.ifIndexes.push(1);
        this.instructionIndexes.push(this.instructions.length);
    
        if (body) {
            this.transpileBlock(body, bindingIndex);
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
            this.incrementActualIfIndex();
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
        this.incrementActualIfIndex();
    }
 /**
    * Manejo de ExpressionStatement
    * Este método evalúa la expresión contenida dentro de un ExpressionStatement.
    * 
    * @method transpileExpressionStatement
    * @param {Object} node El nodo que representa un ExpressionStatement.
    */
    transpileExpressionStatement(node) {
    // Procesa la expresión contenida en el nodo
    if (node.left && node.right) {
        this.loadValue(node.left);
        this.instructions.push(`OPR ${node.operator}`);
        this.incrementActualIfIndex();
        this.loadValue(node.right);
    } else {
        // Para valores literales o variables
        this.instructions.push(`LDV ${node.value}`);
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