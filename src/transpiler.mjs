// transpiler.js

class Transpiler {
    constructor() {
        this.instructions = [];
    }

    // Genera las instrucciones para una declaración let
    transpileLetDeclaration(id, value) {
        // Transpila la declaración let con el valor recibido
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
    transpileFunctionCall(node) {
        node.args.forEach(arg => {
            this.instructions.push(`PUSH ${arg}`);
        });
        this.instructions.push(`CALL ${node.functionName}`);
    }

    // Método para obtener el código transpilado final
    getTranspiledCode() {
        return this.instructions.join('\n');
    }
}

export default Transpiler;