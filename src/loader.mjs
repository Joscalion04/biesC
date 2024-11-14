import biesGrammarVisitor from '../parser/biesVisitor.js';
import biesGrammarParser from '../parser/biesParser.js';

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
        if (ctx.STRING()) {
            return ctx.STRING().getText().slice(1, -1);
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

    visitReturnStatement(ctx) {
        const returnValue = ctx.expression() ? this.visit(ctx.expression()) : null;
        const returnDetails = {
            type: 'ReturnStatement',
            value: returnValue
        };
        this.addAttribute(returnDetails);
        return returnDetails;
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
        const comparisons = ctx.comparison();
        if (comparisons.length === 0) return null;
    
        let result = this.visit(comparisons[0]);
    
        for (let i = 1; i < comparisons.length; i++) {
            const operator = ctx.getChild(2 * i - 1).getText();
            const comparisonValue = this.visit(comparisons[i]);
    
            if (operator === '+') {
                if (typeof result === 'string' || typeof comparisonValue === 'string') {
                    result = `${result}${comparisonValue}`;
                } else {
                    result += comparisonValue;
                }
            } else {
                const expressionDetails = {
                    type: 'BinaryExpression',
                    left: result,
                    operator,
                    right: comparisonValue
                };
                this.addAttribute(expressionDetails);
                result = expressionDetails;
            }
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
        const thenBlock = this.visit(ctx.block(0));
        const elseBlock = ctx.block(1) ? this.visit(ctx.block(1)) : null;
    
        const ifDetails = {
            type: 'IfStatement',
            condition,
            thenBlock,
            elseBlock,
        };
    
        this.addAttribute(ifDetails);

        return ifDetails;
    }
    visitLetInExpression(ctx) {
        // Asegúrate de que el contexto tiene suficientes hijos
        if (ctx.getChildCount() < 2) {
            console.error("El contexto no tiene suficientes hijos.");
            return null;
        }
    
        // Verifica el contenido de los hijos para depuración
        console.log("Contexto de Let-In:", ctx.getText());
    
        const child1 = ctx.getChild(1);
        if (!child1) {
            console.error("El hijo 1 no está presente.");
            return null;
        }
    
        console.log("Hijo 1:", child1.getText());
    
        // Asegurarse de que el hijo tiene la propiedad 'children' antes de intentar acceder a ella
        if (!child1.children) {
            console.error("El hijo 1 no tiene 'children'.");
            return null;
        }
    
        // Filtrar las declaraciones de let, const y funciones
        const letDeclarations = child1.children.filter(child => 
            child instanceof biesGrammarParser.LetDeclarationContext || 
            child instanceof biesGrammarParser.ConstDeclarationContext || 
            child instanceof biesGrammarParser.FunctionDeclarationContext
        );
    
        const letInDetails = {
            type: 'LetInExpression',
            declarations: [],
            body: null
        };
    
        // Procesar las declaraciones
        for (const declaration of letDeclarations) {
            let declarationDetails;
            if (declaration instanceof biesGrammarParser.LetDeclarationContext) {
                declarationDetails = this.visitLetDeclaration(declaration);
            } else if (declaration instanceof biesGrammarParser.ConstDeclarationContext) {
                declarationDetails = this.visitConstDeclaration(declaration);
            } else if (declaration instanceof biesGrammarParser.FunctionDeclarationContext) {
                declarationDetails = this.visitFunctionDeclaration(declaration);
            }
            letInDetails.declarations.push(declarationDetails);
        }
    
        // Verificar y procesar el bloque de cuerpo
        const bodyIndex = ctx.getChildCount() - 1;
        const body = ctx.getChild(bodyIndex);
        if (body && body instanceof biesGrammarParser.BlockContext) {
            letInDetails.body = this.visit(body);
        } else {
            console.error("Cuerpo no encontrado o no válido en Let-In.");
        }
    
        this.addAttribute(letInDetails);
    
        return letInDetails;
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

    getResultsCommander() {
        return this.results;
    }
}

export default Loader;