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
        const comparisons = ctx.comparison(); // Ajuste para usar comparación en lugar de término
        let result = this.visit(comparisons[0]);
        this.printNode('Expression', { comparison: result });

        // Si hay más términos (manejo de operaciones aritméticas)
        for (let i = 1; i < comparisons.length; i++) {
            const operator = ctx.getChild(2 * i - 1).getText(); // Obtener operador aritmético
            const comparisonValue = this.visit(comparisons[i]);
            this.printNode('Operator', { operator });
            this.printNode('Comparison', { comparisonValue });
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

    // Añadir al visitor para manejar comparaciones
    visitComparison(ctx) {
        const terms = ctx.term(); // Obtener los términos que están siendo comparados
        let result = this.visit(terms[0]); // Visitar el primer término
        this.printNode('Comparison', { term: result });

        // Si hay un operador relacional, procesarlo
        if (ctx.getChildCount() > 1) {
            const operator = ctx.getChild(1).getText(); // Obtener el operador de comparación (>, <, etc.)
            const rightTerm = this.visit(terms[1]); // Visitar el segundo término
            this.printNode('Operator', { operator });
            this.printNode('RightTerm', { term: rightTerm });

            // Aquí puedes decidir cómo manejar el resultado, por ejemplo,
            // retornando una estructura que represente la comparación
            result = {
                left: result,
                operator,
                right: rightTerm
            };
        }

        return result;
    }

    // Puedes agregar otros métodos visit para manejar las demás reglas...
}

export default Loader;