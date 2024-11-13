import biesGrammarVisitor from '../parser/biesVisitor.js';

class Loader extends biesGrammarVisitor {

    constructor() {
        super();
        this.results = [];
    }

    // Función auxiliar para imprimir nodos con indentación
    printNode(nodeType, details = {}, depth = 0) {
        const indent = ' '.repeat(depth * 2); // Crear una indentación de 2 espacios por nivel
        console.log(`${indent}${nodeType}:`, details);
        const result = `${indent}${nodeType}: , ${JSON.stringify(details)}`; 
       // console.log(result);
        this.results.push(result);
    }

    getResults() {
        return this.results;
    }

    // Visita una declaración de función
    visitFunctionDeclaration(ctx) {
        const functionName = ctx.ID().getText();
        const params = ctx.parameterList() ? ctx.parameterList().ID().map(param => param.getText()) : [];
        this.printNode('FunctionDeclaration', { functionName, params });

        // Visitar el cuerpo de la función
        this.visit(ctx.block());

        return {
            type: 'FunctionDeclaration',
            name: functionName,
            params,
            body: ctx.block().getText()
        };
    }

    // Visita una declaración 'let'
    visitLetDeclaration(ctx) {
        const id = ctx.ID().getText();
        const value = this.visit(ctx.expression());
        this.printNode('LetDeclaration', { id, value });
        return { type: 'LetDeclaration', id, value };
    }

    // Visita una declaración 'const'
    visitConstDeclaration(ctx) {
        const id = ctx.ID().getText();
        const value = this.visit(ctx.expression());
        this.printNode('ConstDeclaration', { id, value });
        return { type: 'ConstDeclaration', id, value };
    }

    // Visita una expresión
    visitExpression(ctx) {
        const comparisons = ctx.comparison();
        if (comparisons.length === 0) return null;

        let result = this.visit(comparisons[0]);
        this.printNode('Expression', { comparison: result });

        for (let i = 1; i < comparisons.length; i++) {
            const operator = ctx.getChild(2 * i - 1).getText();
            const comparisonValue = this.visit(comparisons[i]);
            this.printNode('Operator', { operator });
            this.printNode('Comparison', { comparisonValue });
            result = { left: result, operator, right: comparisonValue };
        }

        return result;
    }

    // Visita términos
    visitTerm(ctx) {
        const factors = ctx.factor();
        if (!factors || factors.length === 0) return null;

        let result = this.visit(factors[0]);
        this.printNode('Term', { factor: result });

        for (let i = 1; i < factors.length; i++) {
            const operator = ctx.getChild(2 * i - 1).getText();
            const factorValue = this.visit(factors[i]);
            this.printNode('Operator', { operator });
            this.printNode('Factor', { factorValue });
            result = { left: result, operator, right: factorValue };
        }

        return result;
    }

    // Visita factores
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
            const value = this.visit(ctx.expression());
            this.printNode('Factor (Expression)', { value });
            return value;
        } else if (ctx.functionCall()) {
            return this.visit(ctx.functionCall());
        }
        return null;
    }

    // Visita una comparación
    visitComparison(ctx) {
        const terms = ctx.term();
        if (terms.length === 0) return null;

        let result = this.visit(terms[0]);
        this.printNode('Comparison', { term: result });

        if (ctx.getChildCount() > 1) {
            const operator = ctx.getChild(1).getText();
            const rightTerm = this.visit(terms[1]);
            this.printNode('Operator', { operator });
            this.printNode('RightTerm', { term: rightTerm });

            result = {
                left: result,
                operator,
                right: rightTerm
            };
        }

        return result;
    }

    // Visita una llamada a función
    visitFunctionCall(ctx) {
        const functionName = ctx.ID().getText();
        const args = ctx.argumentList() ? ctx.argumentList().expression().map(expr => this.visit(expr)) : [];
        this.printNode('FunctionCall', { functionName, args });
        return { type: 'FunctionCall', functionName, args };
    }

    // Visita una declaración 'if'
    visitIfStatement(ctx) {
        const condition = this.visit(ctx.expression());
        this.printNode('IfStatement', { condition });

        this.printNode('IfBlock');
        this.visit(ctx.block(0));

        if (ctx.ELSE()) {
            this.printNode('ElseBlock');
            this.visit(ctx.block(1));
        }

        return null;
    }
}

export default Loader;