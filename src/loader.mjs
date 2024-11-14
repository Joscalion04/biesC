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

    visitFactor(ctx) {
        if (ctx.INT()) {
            return parseInt(ctx.INT().getText());
        }
        if (ctx.FLOAT()) {
            return parseFloat(ctx.FLOAT().getText());
        }
        if (ctx.STRING()) {
            return ctx.STRING().getText().slice(1, -1); // Remueve las comillas
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

    visitLambdaExpression(ctx) {
        const params = ctx.parameterList() 
            ? ctx.parameterList().ID().map(param => param.getText()) 
            : [];
        const body = ctx.block() ? this.visit(ctx.block()) : this.visit(ctx.expression());

        const lambdaDetails = {
            type: 'LambdaExpression',
            params,
            body
        };
        this.addAttribute(lambdaDetails);

        return lambdaDetails;
    }

    visitLetDeclaration(ctx) {
        const id = ctx.ID().getText();
        const value = this.visit(ctx.expression());

        const letDetails = {
            type: 'LetDeclaration',
            id,
            value
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
            value
        };
        this.addAttribute(constDetails);
        return constDetails;
    }

    visitExpression(ctx) {
        const assignments = ctx.assignment();
        if (assignments.length === 0) return null;

        let result = this.visit(assignments[0]);

        for (let i = 1; i < assignments.length; i++) {
            const operator = ctx.getChild(2 * i - 1).getText();
            const assignmentValue = this.visit(assignments[i]);
            const expressionDetails = {
                type: 'BinaryExpression',
                left: result,
                operator,
                right: assignmentValue
            };
            this.addAttribute(expressionDetails);
            result = expressionDetails;
        }

        return result;
    }

    visitAssignment(ctx) {
        const comparisons = ctx.comparison();
        if (comparisons.length === 0) return null;

        let result = this.visit(comparisons[0]);

        for (let i = 1; i < comparisons.length; i++) {
            const operator = ctx.getChild(2 * i - 1).getText();
            const comparisonValue = this.visit(comparisons[i]);
            const assignmentDetails = {
                type: 'AssignmentExpression',
                left: result,
                operator,
                right: comparisonValue
            };
            this.addAttribute(assignmentDetails);
            result = assignmentDetails;
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

        if (this.functionAttributes[functionName]) {
            return functionCallDetails;
        }

        // Lógica adicional para manejar llamadas a funciones lambda (si es necesario)
        return null;
    }

    visitPrintStatement(ctx) {
        const args = ctx.argumentList() 
            ? ctx.argumentList().expression().map(expr => this.visit(expr))
            : [];

        const printDetails = {
            type: 'PrintStatement',
            args
        };

        this.addAttribute(printDetails);
        return printDetails;
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