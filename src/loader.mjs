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
            secuencia: []
        };
    }

    addAttribute(details) {
        if (this.currentFunction && this.functionAttributes[this.currentFunction]) {
            this.functionAttributes[this.currentFunction].secuencia.push(details);
        }
        this.results.push(details);
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
        this.addAttribute(letDetails);
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
        this.addAttribute(constDetails);
        return constDetails;
    }

    visitExpression(ctx) {
        const comparisons = ctx.comparison();
        if (comparisons.length === 0) return null;

        let result = this.visit(comparisons[0]);

        for (let i = 1; i < comparisons.length; i++) {
            const operator = ctx.getChild(2 * i - 1).getText();
            const comparisonValue = this.visit(comparisons[i]);
            const expressionDetails = {
                type: 'BinaryExpression',
                left: result,
                operator,
                right: comparisonValue
            };
            this.addAttribute(expressionDetails);
            result = expressionDetails;
        }

        return result;
    }

    visitComparison(ctx) {
        const terms = ctx.term();
        if (terms.length === 0) return null;

        let result = this.visit(terms[0]);

        if (terms.length > 1) {
            const operator = ctx.getChild(1).getText();
            const rightTerm = this.visit(terms[1]);
            const comparisonDetails = {
                type: 'ComparisonExpression',
                left: result,
                operator,
                right: rightTerm
            };
            this.addAttribute(comparisonDetails);
            result = comparisonDetails;
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
            const termDetails = {
                type: 'TermExpression',
                left: result,
                operator,
                right: factorValue
            };
            this.addAttribute(termDetails);
            result = termDetails;
        }

        return result;
    }

    visitFunctionCall(ctx) {
        const functionName = ctx.ID().getText();
        let args = [];

        if (ctx.argumentList()) {
            args = ctx.argumentList().expression().map(expr => {
                return this.visit(expr);
            });
        }

        const functionCallDetails = {
            type: 'FunctionCall',
            functionName,
            args
        };

        this.addAttribute(functionCallDetails);
        return functionCallDetails;
    }

    visitFunctionDeclaration(ctx) {
        const functionName = ctx.ID().getText();
        const params = ctx.parameterList() 
            ? ctx.parameterList().ID().map(param => param.getText())
            : [];

        const functionDetails = {
            type: 'FunctionDeclaration',
            name: functionName,
            params
        };

        this.addAttribute(functionDetails);

        const previousFunction = this.currentFunction;
        this.currentFunction = functionName;

        if (!this.functionAttributes[this.currentFunction]) {
            this.functionAttributes[this.currentFunction] = this.initializeAttributes();
        }

        this.visit(ctx.block());

        this.currentFunction = previousFunction;

        return functionDetails;
    }

    visitIfStatement(ctx) {
        const condition = this.visit(ctx.expression());
        const ifDetails = {
            type: 'IfStatement',
            condition
        };

        this.addAttribute(ifDetails);

        if (ctx.block()) {
            this.visit(ctx.block());
        }

        if (ctx.elseBlock) {
            this.visit(ctx.elseBlock());
        }

        return ifDetails;
    }

    getFunctionAttributes() {
        return this.functionAttributes;
    }

    getResults() {
        for (const functionName in this.functionAttributes) {
            const attributes = this.functionAttributes[functionName];
            console.log(`Función: ${functionName}`);
            console.log("Secuencia:", JSON.stringify(attributes.secuencia, null, 2));
            console.log("====================================");
        }
    }
}

export default Loader;