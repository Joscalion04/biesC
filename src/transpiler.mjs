// transpiler.js

class Transpiler {
    constructor() {
        this.instructions = [];
    }

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
                    // this.transpileFunctionCall(attributes[i]);
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

    loadValue(value) {
        if (typeof value === 'number') {
            this.instructions.push(`LDV ${value}`);
        } else if (typeof value === 'string') {
            this.instructions.push(`LDV "${value}"`);
        } else if (typeof value === 'object') {
            this.instructions.push(`LDV ${value.functionName}`);
        }
    }

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

    // Genera las instrucciones para una declaración let
    transpileValueDeclaration(node, bindingIndex) {
        this.loadValue(node.value);
        this.instructions.push(`BLD 0 ${bindingIndex}`);
    }

    // Genera las instrucciones para una declaración de función
    transpileFunctionDeclaration(node, bindingIndex) {
        this.loadValue(node.name);
        this.instructions.push(`BLD 0 ${bindingIndex}`);
    }

    // Transpila una expresión (por ejemplo, 5 + 3)
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

    // Transpila una llamada a función
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

        this.instructions.push(`LDF $${node.functionName}`);
        this.instructions.push(`APP $${node.functionName} ${node.args.length} ; ${node.functionName}(${node.args.join(', ')})`);
    }


    // Método para obtener el código transpilado final
    getTranspiledCode() {
        return this.instructions.join('\n');
    }
}

export default Transpiler;