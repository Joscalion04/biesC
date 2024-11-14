import biesGrammarVisitor from '../parser/biesVisitor.js';

class Loader extends biesGrammarVisitor {
    constructor() {
        super();
        this.results = [];
        this.globalContext = 'main';
        this.currentFunction = this.globalContext;
        this.functionAttributes = {};
        this.functionAttributes[this.globalContext] = this.initializeAttributes();
    }

    initializeAttributes() {
        return {
            variables: [],
            expressions: [],
            operators: [],
            statements: []
        };
    }

    addAttribute(type, details) {
        if (this.currentFunction && this.functionAttributes[this.currentFunction]) {
            this.functionAttributes[this.currentFunction][type].push(details);
        }
        const result = `${type}: ${JSON.stringify(details)}`;
        this.results.push(result);
    }

    // Factor principal que maneja valores literales
    visitFactor(ctx) {
        if (ctx.INT()) {
            return parseInt(ctx.INT().getText());
        }
        if (ctx.STRING()) {
            return ctx.STRING().getText().slice(1, -1); // Elimina las comillas
        }
        if (ctx.ID()) {
            return ctx.ID().getText();
        }
        if (ctx.expression()) {
            return this.visit(ctx.expression());
        }
        if (ctx.functionCall()) {
            return this.visit(ctx.functionCall());
        }
        return null;
    }

    visitLetDeclaration(ctx) {
        const id = ctx.ID().getText();
        const value = this.visit(ctx.expression());
        
        const letDetails = {
            type: 'LetDeclaration',
            id,
            value: value
        };
        this.addAttribute('variables', letDetails);
        return letDetails;
    }

    visitConstDeclaration(ctx) {
        const id = ctx.ID().getText();
        const value = this.visit(ctx.expression());
        
        const constDetails = {
            type: 'ConstDeclaration',
            id,
            value: value
        };
        this.addAttribute('variables', constDetails);
        return constDetails;
    }

    visitExpression(ctx) {
        const comparisons = ctx.comparison();
        if (comparisons.length === 0) return null;

        let result = this.visit(comparisons[0]);

        for (let i = 1; i < comparisons.length; i++) {
            const operator = ctx.getChild(2 * i - 1).getText();
            const comparisonValue = this.visit(comparisons[i]);
            this.addAttribute('operators', { operator });
            result = {
                type: 'BinaryExpression',
                left: result,
                operator,
                right: comparisonValue
            };
        }

        this.addAttribute('expressions', result);
        return result;
    }

    visitComparison(ctx) {
        const terms = ctx.term();
        if (terms.length === 0) return null;

        let result = this.visit(terms[0]);

        if (terms.length > 1) {
            const operator = ctx.getChild(1).getText();
            const rightTerm = this.visit(terms[1]);
            this.addAttribute('operators', { operator });
            result = {
                type: 'ComparisonExpression',
                left: result,
                operator,
                right: rightTerm
            };
        }

        return result;
    }

    visitTerm(ctx) {
        const factors = ctx.factor();
        if (factors.length === 0) return null;

        let result = this.visit(factors[0]);

        for (let i = 1; i < factors.length; i++) {
            const operator = ctx.getChild(2 * i - 1).getText();
            const factorValue = this.visit(factors[i]);
            result = {
                type: 'TermExpression',
                left: result,
                operator,
                right: factorValue
            };
        }

        return result;
    }

    visitFunctionCall(ctx) {
        const functionName = ctx.ID().getText();
        let args = [];
        
        if (ctx.argumentList()) {
            args = ctx.argumentList().expression().map(expr => {
                const arg = this.visit(expr);
                return arg;
            });
        }

        const functionCallDetails = {
            type: 'FunctionCall',
            functionName,
            args
        };
        
        this.addAttribute('expressions', functionCallDetails);
        return functionCallDetails;
    }

    visitFunctionDeclaration(ctx) {
        const functionName = ctx.ID().getText();
        const params = ctx.parameterList() 
            ? ctx.parameterList().ID().map(param => param.getText())
            : [];
    
        // Crea el detalle de la declaración de función
        const functionDetails = {
            type: 'FunctionDeclaration',
            name: functionName,
            params,
            body: ctx.block().getText()
        };
    
        // Verifica si estamos en el contexto global o dentro de otra función
        if (this.currentFunction === this.globalContext) {
            // Si estamos en el contexto global, agrega la función al contexto main
            this.functionAttributes[this.globalContext].statements.push(functionDetails);
        } else {
            // Si estamos dentro de otra función, agrega la declaración al contexto actual
            this.functionAttributes[this.currentFunction].statements.push(functionDetails);
        }
    
        // Cambia temporalmente el contexto para el procesamiento de la función
        const previousFunction = this.currentFunction;
        this.currentFunction = functionName;
    
        // Inicializa los atributos de la nueva función si no existen
        if (!this.functionAttributes[this.currentFunction]) {
            this.functionAttributes[this.currentFunction] = this.initializeAttributes();
        }
    
        // Procesa el cuerpo de la función
        this.visit(ctx.block());
    
        // Restaura el contexto anterior
        this.currentFunction = previousFunction;
    
        return functionDetails;
    }
    
    getFunctionAttributes() {
        return this.functionAttributes;
    }

    getResults() {
        for (const functionName in this.functionAttributes) {
            const attributes = this.functionAttributes[functionName];
            console.log(`Función: ${functionName}`);
            console.log("Variables:", JSON.stringify(attributes.variables, null, 2));
            console.log("Expresiones:", JSON.stringify(attributes.expressions, null, 2));
            console.log("Operadores:", JSON.stringify(attributes.operators, null, 2));
            console.log("Declaraciones:", JSON.stringify(attributes.statements, null, 2));
            console.log("====================================");
        }
    }
}

export default Loader;