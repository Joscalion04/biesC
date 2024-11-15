import biesGrammarVisitor from '../parser/biesVisitor.js';

class Loader extends biesGrammarVisitor {
    constructor() {
        super();
        this.functionId = 0;
        this.results = [];
        this.globalContext = 'main';
        this.currentFunction = this.globalContext;
        this.functionAttributes = {};
        this.functionAttributes[this.globalContext] = this.initializeAttributes();
    }

    initializeAttributes() {
        return {
            id: this.functionId++,
            secuencia: []
        };
    }

    addAttribute(details) {
        if (this.currentFunction && this.functionAttributes[this.currentFunction]) {
            this.functionAttributes[this.currentFunction].secuencia.push(details);
        }
        this.results.push(details);
    }

    visitReturnStatement(ctx) {
        const value = this.visit(ctx.expression());
        const returnDetails = {
            type: 'ReturnStatement',
            value
        };
        this.addAttribute(returnDetails);
        return returnDetails;
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

    visitComparison(ctx) {
        const factors = ctx.factor();
        if (factors.length === 0) return null;

        let result = this.visit(factors[0]);
        
        for (let i = 1; i < factors.length; i++) {
            const operator = ctx.getChild(2 * i - 1).getText();
            const factorValue = this.visit(factors[i]);
            const comparisonDetails = {
                type: 'ComparisionExpression',
                left: result,
                operator,
                right: factorValue
            };
            this.addAttribute(comparisonDetails);
            result = comparisonDetails;
        }

        return result;
    }

    // visitTerm(ctx) {
    //     const factors = ctx.factor();
    //     if (factors.length === 0) return null;

    //     let result = this.visit(factors[0]);

    //     for (let i = 1; i < factors.length; i++) {
    //         const operator = ctx.getChild(2 * i - 1).getText();
    //         const factorValue = this.visit(factors[i]);
    //         const termDetails = {
    //             type: 'TermExpression',
    //             left: result,
    //             operator,
    //             right: factorValue
    //         };
    //         this.addAttribute(termDetails);
    //         result = termDetails;
    //     }

    //     return result;
    // }

    visitFactor(ctx) {
        if (ctx.INT()) {
            return parseInt(ctx.INT().getText());
        }
        if (ctx.FLOAT()) {
            return parseFloat(ctx.FLOAT().getText());
        }
        if (ctx.ID()) {
            return ctx.ID().getText();
        }
        if (ctx.STRING()) {
            return ctx.STRING().getText().slice(1, -1);
        }
        if (ctx.expression()) {
            return this.visit(ctx.expression());
        }
        if (ctx.lambdaExpression()) {
            return this.visit(ctx.lambdaExpression());
        }
        if (ctx.functionCall()) {
            return this.visit(ctx.functionCall());
        }
        if (ctx.printStatement()) {
            return this.visit(ctx.printStatement());
        }
        return null;
    }

    // Procesa operaciones de suma y resta (expression)
    // visitExpression(ctx) {
    //     let result = this.visit(ctx.term(0));

    //     for (let i = 1; i < ctx.term().length; i++) {
    //         const operator = ctx.getChild(2 * i - 1).getText();
    //         const rightValue = this.visit(ctx.term(i));
    //         const expressionDetails = {
    //             type: 'BinaryExpression1',
    //             left: result,
    //             operator,
    //             right: rightValue
    //         };
    //         this.addAttribute(expressionDetails);
    //         result = expressionDetails;
    //     }

    //     return result;
    // }

    // Procesa operaciones de multiplicación y división (term)
    // visitTerm(ctx) {
    //     let result = this.visit(ctx.factor(0));

    //     for (let i = 1; i < ctx.factor().length; i++) {
    //         const operator = ctx.getChild(2 * i - 1).getText();
    //         const rightValue = this.visit(ctx.factor(i));
    //         const termDetails = {
    //             type: 'BinaryExpression2',
    //             left: result,
    //             operator,
    //             right: rightValue
    //         };
    //         // this.addAttribute(termDetails);
    //         result = termDetails;
    //     }

    //     return result;
    // }

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

    visitExpressionStatement(ctx) {
        const expression = this.visit(ctx.expression());
        const expressionDetails = {
            type: 'ExpressionStatement',
            expression
        };

        this.addAttribute(expressionDetails);
        return expressionDetails;
    }

    /*
    ifStatement: 'if' '(' expression ')' block (elseIfStatement | elseStatement)?;

    elseIfStatement: 'else' 'if' '(' expression ')' block;

    elseStatement: ELSE block;
*/

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

        if (ctx.elseIfStatement()) {
            this.visit(ctx.elseIfStatement());
        }

        if (ctx.elseStatement()) {
            this.visit(ctx.elseStatement());
        }

        return ifDetails;
    }
    
    visitElseIfStatement(ctx) {
        const condition = this.visit(ctx.expression());
        const elseIfDetails = {
            type: 'ElseIfStatement',
            condition
        };

        this.addAttribute(elseIfDetails);

        if (ctx.block()) {
            this.visit(ctx.block());
        }

        return elseIfDetails;
    }

    visitElseStatement(ctx) {
        const elseDetails = {
            type: 'ElseStatement'
        };

        this.addAttribute(elseDetails);

        if (ctx.block()) {
            this.visit(ctx.block());
        }

        return elseDetails;
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
                    
                    console.log("Cuerpo de la lambda:", lambdaExpression.body); // Verificar la estructura del cuerpo
                
                    let functionBody;
                
                    if (lambdaExpression.body && lambdaExpression.body.type === 'BinaryExpression') {
                        // Si el cuerpo es una BinaryExpression, procesarlo correctamente
                        functionBody = [{
                            type: 'BinaryExpression',
                            left: lambdaExpression.body.left,
                            operator: lambdaExpression.body.operator,
                            right: lambdaExpression.body.right
                        }];
                    } else if (lambdaExpression.body && Array.isArray(lambdaExpression.body)) {
                        // Si el cuerpo es un bloque de sentencias
                        functionBody = lambdaExpression.body;
                    } else {
                        // Si no se reconoce el tipo del cuerpo
                        throw new Error("Cuerpo de la lambda no reconocido");
                    }
                
                    // Reemplazamos la LetDeclaration con el cuerpo de la lambda
                    secuencia.splice(i, 1, ...functionBody);
                
                    // Guardamos la secuencia de la función como un diccionario separado
                    if (!this.functionAttributes[attr.id]) {
                        this.functionAttributes[attr.id] = this.initializeAttributes();
                    }
                
                    // Guardamos el cuerpo de la lambda en la propiedad body
                    this.functionAttributes[attr.id].secuencia = functionBody;
                }
            }
        }
    }

    getResults() {
        this.transformLetDeclarationsWithLambdas();
        for (const functionName in this.functionAttributes) {
            const attributes = this.functionAttributes[functionName];
            console.log(`Función: ${functionName}`);
            console.log(`ID: ${attributes.id}`);
            console.log("Secuencia:", JSON.stringify(attributes.secuencia, null, 2));
            console.log("====================================");
        }
    }
}

export default Loader;