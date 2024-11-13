// transpiler.js

class Transpiler {
    constructor() {
        this.instructions = [];
    }

    // Genera las instrucciones para una declaración let
    transpileLetDeclaration(id, value) {
        // Para la declaración let, simplemente generamos la instrucción LDV
        this.instructions.push(`LDV ${value}`);
    }

    // Transpila una expresión (por ejemplo, 5 + 3)
    transpileExpression(node) {
        if (node.left && node.right) {
            this.instructions.push(`LDV ${node.left}`);
            this.instructions.push(`OPR ${node.operator}`);
            this.instructions.push(`LDV ${node.right}`);
        } else {
            // Para valores literales o variables
            this.instructions.push(`LDV ${node.value}`);
        }
    }

    // Transpila una llamada a función
    transpileFunctionCall(functionName, args) {
        // Emitir la llamada a función con los argumentos
        args.forEach(arg => {
            this.instructions.push(`PUSH ${arg}`);
        });
        this.instructions.push(`CALL ${functionName}`);
    }

    // Método para obtener el código transpilado final
    getTranspiledCode() {
        return this.instructions.join('\n');
    }
}

export default Transpiler;