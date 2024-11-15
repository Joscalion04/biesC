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
        const value = this.visit(ctx.expression());
    
        // Si el valor es una expresión lambda, la tratamos como una función
        if (value && value.type === 'LambdaExpression') {
            // Registrar la lambda como una función con sus parámetros y cuerpo
            const lambdaFunction = {
                type: 'FunctionDeclaration',
                name: id,
                params: value.params,
                body: value.body
            };
    
            // Registrar la función en el contexto actual
            this.addAttribute(lambdaFunction);
    
            // Opcional: Registrar también la declaración `let` si es necesario
            const letDetails = {
                type: 'LetDeclaration',
                id,
                value: `Function ${id}` // Indicar que esta `let` apunta a una función
            };
            this.addAttribute(letDetails);
    
            // Retornar o manejar la función según sea necesario
            return lambdaFunction;
        }
    
        // Si no es una lambda, procesarlo como una declaración `let` normal
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

    transformLetDeclarationsWithLambdas() {
        console.log("Transformando LetDeclarations con Lambdas...");
      
        // Recorremos las funciones en el diccionario de funciones
        for (const functionName in this.functionAttributes) {
            const attributes = this.functionAttributes[functionName];
            const secuencia = attributes.secuencia;
    
            // Recorremos la secuencia de la función principal
            for (let i = 0; i < secuencia.length; i++) {
                const attr = secuencia[i];
    
                // Buscamos las LetDeclarations con LambdaExpressions
                if (attr.type === 'LetDeclaration' && attr.value && Array.isArray(attr.value) && attr.value[0][0]?.type === 'LambdaExpression') {
                    const lambdaExpression = attr.value[0][0]; // La LambdaExpression
                    
                    // La secuencia de la función será el cuerpo de la lambda
                    const functionBody = lambdaExpression.body; // El cuerpo de la lambda (puede ser un bloque o expresión)
    
                    // Establecemos el cuerpo de la función en la secuencia
                    secuencia.splice(i, 1, ...functionBody); // Reemplazamos la LetDeclaration con el cuerpo de la lambda
    
                    // Si no existe un contexto para la función, lo creamos
                    if (!this.functionAttributes[attr.id]) {
                        this.functionAttributes[attr.id] = this.initializeAttributes();
                        this.functionAttributes[attr.id].secuencia = functionBody; // Guardamos el cuerpo como una propiedad de la función
                    }
                }
            }
        }
    }

    getResults() {
        this.transformLetDeclarationsWithLambdas();
        for (const functionName in this.functionAttributes) {
            const attributes = this.functionAttributes[functionName];
            console.log(`Función: ${functionName}`);
            console.log("Secuencia:", JSON.stringify(attributes.secuencia, null, 2));
            console.log("====================================");
        }
    }
}

export default Loader;