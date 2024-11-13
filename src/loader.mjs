import biesGrammarVisitor from '../parser/biesVisitor.js';

class Loader extends biesGrammarVisitor {
    // Función auxiliar para imprimir nodos con indentación
    printNode(nodeType, details = {}, depth = 0) {
        const indent = ' '.repeat(depth * 2); // Crear una indentación de 2 espacios por nivel
        console.log(`${indent}${nodeType}:`, details);
    }

    // Sobreescribimos el visitLetDeclaration para imprimir el nodo
    visitLetDeclaration(ctx) {
        const id = ctx.ID().getText();
        const value = this.visit(ctx.expression());
        this.printNode('LetDeclaration', { id, value });

        return { type: 'LetDeclaration', id, value };
    }

    // Sobreescribimos el visitExpression para manejar las expresiones e imprimir
    visitExpression(ctx) {
        const terms = ctx.term();
        let result = this.visit(terms[0]);
        this.printNode('Expression', { term: result });

        // Si hay más términos, recorremos y los imprimimos
        for (let i = 1; i < terms.length; i++) {
            const operator = ctx.getChild(2 * i - 1).getText(); // Obtiene el operador
            const termValue = this.visit(terms[i]);
            this.printNode('Operator', { operator });
            this.printNode('Term', { termValue });
        }

        return result;
    }

    // Puedes agregar otros métodos visit para imprimir los demás nodos...
}

export default Loader;
