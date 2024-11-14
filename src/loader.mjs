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
            return ctx.STRING().getText().slice(1, -1);
        }
        if (ctx.ID()) {
            return ctx.ID().getText();
        }
        if (ctx.lambdaExpression()) {
            return this.visit(ctx.lambdaExpression());
        }
        if (ctx.expression()) {
            return this.visit(ctx.expression());
        }
        if (ctx.functionCall()) {
            return this.visit(ctx.functionCall());
        }
        if (ctx.printStatement()) {
            return this.visit(ctx.printStatement());
        }
        return null;
    }

    visitLetDeclaration(ctx) {
        const id = ctx.ID().getText();
        
        // Guardamos el valor original de processingLambda
        const wasProcessingLambda = this.processingLambda;
        this.processingLambda = true;
        const value = this.visit(ctx.expression());
        this.processingLambda = wasProcessingLambda;

        // Si el valor es una lambda
        if (value && value.type === 'LambdaExpression') {
            // Registrar la lambda como una función
            this.functionAttributes[id] = this.initializeAttributes();
            
            // Crear los detalles de la función
            const functionDetails = {
                type: 'FunctionDeclaration',
                name: id,
                params: value.params
            };

            // Añadir la declaración de función al contexto global
            const prevFunction = this.currentFunction;
            this.currentFunction = id;
            this.addAttribute(functionDetails);

            // Añadir el cuerpo de la lambda
            if (value.body && value.body.type === 'PrintStatement') {
                this.functionAttributes[id].secuencia.push(value.body);
            }

            // Restaurar el contexto
            this.currentFunction = prevFunction;
        }

        const letDetails = {
            type: 'LetDeclaration',
            id,
            value
        };

        this.addAttribute(letDetails);
        return letDetails;
    }
    

    visitLambdaExpression(ctx) {
        const params = ctx.parameterList() 
            ? ctx.parameterList().ID().map(param => param.getText()) 
            : [];

        let body;
        
        if (ctx.block()) {
            body = ctx.block().statement().map(stmt => this.visit(stmt));
        } else if (ctx.expression()) {
            body = this.visit(ctx.expression());
        }

        return {
            type: 'LambdaExpression',
            params,
            body
        };
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
            args = ctx.argumentList().expression().map(expr => this.visit(expr));
        }

        const functionCallDetails = {
            type: 'FunctionCall',
            functionName,
            args
        };

        this.addAttribute(functionCallDetails);
        return functionCallDetails;
    }

    visitPrintStatement(ctx) {
        const args = ctx.argumentList() 
            ? ctx.argumentList().expression().map(expr => this.visit(expr))
            : [];

        const printDetails = {
            type: 'PrintStatement',
            args: args.flat()
        };

        // Solo añadimos el print al contexto actual si no estamos dentro de una lambda
        if (!this.processingLambda) {
            this.addAttribute(printDetails);
        }

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

        // Crear nuevo contexto de función si no existe
        if (!this.functionAttributes[functionName]) {
            this.functionAttributes[functionName] = this.initializeAttributes();
        }

        const previousFunction = this.currentFunction;
        this.currentFunction = functionName;

        // Visitar el bloque
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