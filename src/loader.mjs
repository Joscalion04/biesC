import biesGrammarVisitor from '../parser/biesVisitor.js';

class Loader extends biesGrammarVisitor {
    // Función auxiliar para imprimir nodos con indentación
    printNode(nodeType, details = {}, depth = 0) {
        const indent = ' '.repeat(depth * 2); // Crear una indentación de 2 espacios por nivel
        console.log(`${indent}${nodeType}:`, details);
    }

    visitIfStatement(ctx) {
      const condition = this.visit(ctx.expression()); // Evaluamos la condición del 'if'
      this.printNode('IfStatement', { condition });

      // Visitamos las declaraciones dentro del bloque 'if'
      this.printNode('IfBlock');
      this.visit(ctx.block(0)); // Primer bloque (if)

      // Si hay un bloque 'else', lo procesamos
      if (ctx.ELSE()) {
          this.printNode('ElseBlock');
          this.visit(ctx.block(1)); // Segundo bloque (else)
      }

      return null;
    }

    // Sobreescribimos el visitLetDeclaration para imprimir el nodo
    visitLetDeclaration(ctx) {
        const id = ctx.ID().getText();
        const value = this.visit(ctx.expression());
        this.printNode('LetDeclaration', { id, value }, 0); // profundidad 0 o según sea necesario
        return { type: 'LetDeclaration', id, value };
    }

    // Sobreescribimos el visitConstDeclaration para imprimir el nodo
    visitConstDeclaration(ctx) {
        const id = ctx.ID().getText();
        const value = this.visit(ctx.expression());
        this.printNode('ConstDeclaration', { id, value }, 0);
        return { type: 'ConstDeclaration', id, value };
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

    // Visitar términos
    visitTerm(ctx) {
        const factors = ctx.factor();
        let result = this.visit(factors[0]);
        this.printNode('Term', { factor: result });

        for (let i = 1; i < factors.length; i++) {
            const operator = ctx.getChild(2 * i - 1).getText(); // Obtiene el operador
            const factorValue = this.visit(factors[i]);
            this.printNode('Operator', { operator });
            this.printNode('Factor', { factorValue });
        }

        return result;
    }

    // Visitar factores
    visitFactor(ctx) {
        if (ctx.INT()) {
            const value = parseInt(ctx.INT().getText(), 10);
            this.printNode('Factor (INT)', { value });
            return value;
        } else if (ctx.ID()) {
            const id = ctx.ID().getText();
            this.printNode('Factor (ID)', { id });
            return id;
        } else if (ctx.STRING()) {
            const str = ctx.STRING().getText();
            this.printNode('Factor (STRING)', { str });
            return str;
        } else if (ctx.expression()) {
            // Si es una subexpresión entre paréntesis
            const value = this.visit(ctx.expression());
            this.printNode('Factor (Expression)', { value });
            return value;
        }
    }

    // Puedes agregar otros métodos visit para manejar las demás reglas...
}

export default Loader;