import biesGrammarVisitor from '../parser/biesVisitor.js';

class Loader extends biesGrammarVisitor {
    constructor() {
        super();
        this.results = [];
        this.attributes = {
            functions: [],
            variables: [],
            expressions: [],
            operators: []
        };
    }

    // Función auxiliar para agregar información al diccionario y mantener resultados
    addAttribute(type, details) {
        this.attributes[type].push(details);
        const result = `${type}: ${JSON.stringify(details)}`;
        this.results.push(result);  // Para mantener el registro en el orden de visita
    }

    // Función auxiliar para imprimir nodos con indentación (opcional)
    printNode(nodeType, details = {}, depth = 0) {
        const indent = ' '.repeat(depth * 2); // Crear una indentación de 2 espacios por nivel
        console.log(`${indent}${nodeType}:`, details);
    }

    getResults() {
        return this.results;
    }

    getAttributes() {
        return this.attributes;
    }

    // Visita una declaración de función
    visitFunctionDeclaration(ctx) {
        const functionName = ctx.ID().getText();
        const params = ctx.parameterList() ? ctx.parameterList().ID().map(param => param.getText()) : [];
        
        const functionDetails = {
            type: 'FunctionDeclaration',
            name: functionName,
            params,
            body: ctx.block().getText()
        };
        
        this.addAttribute('functions', functionDetails);
        this.visit(ctx.block()); // Visitar el cuerpo de la función
        return functionDetails;
    }

    // Visita una declaración 'let'
    visitLetDeclaration(ctx) {
        const id = ctx.ID().getText();
        const value = this.visit(ctx.expression());
        
        const letDetails = { type: 'LetDeclaration', id, value };
        this.addAttribute('variables', letDetails);
        
        return letDetails;
    }

    // Visita una declaración 'const'
    visitConstDeclaration(ctx) {
        const id = ctx.ID().getText();
        const value = this.visit(ctx.expression());
        
        const constDetails = { type: 'ConstDeclaration', id, value };
        this.addAttribute('variables', constDetails);
        
        return constDetails;
    }

    // Visita una expresión
    visitExpression(ctx) {
        const comparisons = ctx.comparison();
        if (comparisons.length === 0) return null;

        let result = this.visit(comparisons[0]);
        this.addAttribute('expressions', { comparison: result });

        for (let i = 1; i < comparisons.length; i++) {
            const operator = ctx.getChild(2 * i - 1).getText();
            const comparisonValue = this.visit(comparisons[i]);
            
            this.addAttribute('operators', { operator });
            this.addAttribute('expressions', { comparisonValue });
            
            result = { left: result, operator, right: comparisonValue };
        }

        return result;
    }

    // Visita términos
    visitTerm(ctx) {
        const factors = ctx.factor();
        if (!factors || factors.length === 0) return null;

        let result = this.visit(factors[0]);
        this.addAttribute('expressions', { factor: result });

        for (let i = 1; i < factors.length; i++) {
            const operator = ctx.getChild(2 * i - 1).getText();
            const factorValue = this.visit(factors[i]);
            
            this.addAttribute('operators', { operator });
            this.addAttribute('expressions', { factor: factorValue });
            
            result = { left: result, operator, right: factorValue };
        }

        return result;
    }

    // Visita factores
    visitFactor(ctx) {
        if (ctx.INT()) {
            const value = parseInt(ctx.INT().getText(), 10);
            this.addAttribute('expressions', { type: 'INT', value });
            return value;
        } else if (ctx.ID()) {
            const id = ctx.ID().getText();
            this.addAttribute('expressions', { type: 'ID', id });
            return id;
        } else if (ctx.STRING()) {
            const str = ctx.STRING().getText();
            this.addAttribute('expressions', { type: 'STRING', str });
            return str;
        } else if (ctx.expression()) {
            const value = this.visit(ctx.expression());
            this.addAttribute('expressions', { type: 'Expression', value });
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
        this.addAttribute('expressions', { term: result });

        if (ctx.getChildCount() > 1) {
            const operator = ctx.getChild(1).getText();
            const rightTerm = this.visit(terms[1]);

            this.addAttribute('operators', { operator });
            this.addAttribute('expressions', { term: rightTerm });

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

        const functionCallDetails = { type: 'FunctionCall', functionName, args };
        this.addAttribute('functions', functionCallDetails);
        
        return functionCallDetails;
    }

    // Visita una declaración 'if'
    visitIfStatement(ctx) {
        const condition = this.visit(ctx.expression());
        this.addAttribute('expressions', { type: 'IfStatement', condition });

        this.visit(ctx.block(0)); // If block
        if (ctx.ELSE()) {
            this.visit(ctx.block(1)); // Else block
        }

        return null;
    }
}

export default Loader;