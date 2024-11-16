import biesGrammarVisitor from '../parser/biesVisitor.js';

/**
* Clase Loader que extiende de biesGrammarVisitor y se encarga de cargar los detalles de las instrucciones
* del código fuente de BIES. Esta clase se encarga de recorrer el árbol de análisis sintáctico generado por
* ANTLR y extraer los detalles de las instrucciones del código fuente.
* 
* @author Manuel Mora Sandi 
* @author Derek Rojas Mendoza
* @author Josué Vindas Pérez
* @author Joseph León Cabezas
*/
class Loader extends biesGrammarVisitor {
    /**
    * Constructor de la clase Loader. 
    * @constructor
    * @param {string} functionId - Identificador de la función
    * @param {object} results - el resultado de la ejecución
    * @param {object} globalContext - Contexto global de la función
    * @param {object} currentFunction - Función actual en ejecución
    * @param {object} functionAttributes - Atributos de la función
    */
    constructor() {
        super();
        this.functionId = 0;
        this.results = [];
        this.globalContext = 'main';
        this.currentFunction = this.globalContext;
        this.functionAttributes = {};
        this.functionAttributes[this.globalContext] = this.initializeAttributes();
        this.scopeStack = [{}];  // Se añade la pila de alcance
    }
    /** 
     * Inicializa los atributos para una nueva función o contexto, asignando un ID único 
     * y una secuencia vacía.
     * @method initializeAttributes
     * 
     * @returns {Object} Un objeto con un ID único y una secuencia vacía.
     * @returns {number} return.id El identificador único de la función o contexto.
     * @returns {Array} return.secuencia Una secuencia vacía, lista para almacenar valores.
     */
    initializeAttributes() {
        return {
            id: this.functionId++,
            secuencia: []
        };
    }

    // Helper method to push a new scope
    pushScope() {
        this.scopeStack.push({});
    }

    // Helper method to pop the current scope
    popScope() {
        return this.scopeStack.pop();
    }

    // Helper method to get a variable from the current scope chain
    getVariable(name) {
        for (let i = this.scopeStack.length - 1; i >= 0; i--) {
            if (name in this.scopeStack[i]) {
                return this.scopeStack[i][name];
            }
        }
        return undefined;
    }

    // Helper method to set a variable in the current scope
    setVariable(name, value) {
        this.scopeStack[this.scopeStack.length - 1][name] = value;
    }

    visitLetInDeclaration(ctx) {
        const letInDetails = {
            type: 'LetInDeclaration',
            declarations: [],
            body: null
        };
    
        // Guardamos el estado de la pila de alcance antes de entrar al bloque let-in
        this.pushScope();
    
        // Procesamos las declaraciones const
        const constDeclarations = ctx.constDeclaration();
        for (const constDecl of constDeclarations) {
            const constDetails = this.visit(constDecl);
            letInDetails.declarations.push(constDetails);
            
            // Guardamos la constante en el contexto actual
            this.setVariable(constDetails.id, constDetails.value);
        }
    
        // Procesamos las declaraciones let (similares a const pero variables)
        const letDeclarations = ctx.letDeclaration();
        for (const letDecl of letDeclarations) {
            const letDetails = this.visit(letDecl);
            letInDetails.declarations.push(letDetails);
            
            // Guardamos la variable let en el contexto actual
            this.setVariable(letDetails.id, letDetails.value);
        }
    
        // Procesamos el bloque 'in'
        const inBlock = this.visit(ctx.block());
        letInDetails.body = inBlock;
    
        // Terminamos el bloque let-in, restaurando la pila de alcance
        this.popScope();
    
        // Agregamos la declaración let-in a los resultados
        this.addAttribute(letInDetails);
    
        return letInDetails;
    }

    /** 
    * Agrega un nuevo atributo a la secuencia de la función actual y a los resultados globales.
    * Este método verifica si hay una función actual y, si es así, agrega los detalles a su secuencia.
    * 
    * @method addAttribute
    * 
    * @param {Object} details Los detalles del atributo que se agregan a la secuencia y a los resultados.
    * @returns {void} Este método no devuelve ningún valor.
    */
    addAttribute(details) {
        if (this.currentFunction && this.functionAttributes[this.currentFunction]) {
            this.functionAttributes[this.currentFunction].secuencia.push(details);
        }
        this.results.push(details);
    }

    /** 
     * Procesa una declaración de retorno en una expresión, marcando la expresión como anidada,
     * y agrega los detalles de la declaración de retorno a los atributos de la función actual 
     * y a los resultados globales.
     * 
     * @method visitReturnStatement
     * 
     * @param {Object} ctx El contexto de la declaración de retorno, que contiene la expresión a retornar.
     * @returns {Object} Un objeto que representa la declaración de retorno, con el tipo y el valor de la expresión.
    */
    visitReturnStatement(ctx) {
        const value = this.visit(ctx.expression()); // Marcar como anidada
        const returnDetails = {
            type: 'ReturnStatement',
            value
        };
        this.addAttribute(returnDetails);
        return returnDetails;
    }


    /** 
        * Procesa una declaración let, evaluando su expresión y manejando el caso donde la 
        * expresión es una lambda. Si es una lambda, la registra como una declaración de función 
        * y agrega su cuerpo al contexto. Además, guarda los detalles de la declaración let 
        * en los atributos de la función actual y los resultados globales.
        * 
        * @method visitLetDeclaration
        * 
        * @param {Object} ctx El contexto de la declaración let, que contiene el identificador y la expresión a evaluar.
        * @returns {Object} Un objeto que representa la declaración let, con el tipo, el identificador y el valor evaluado.
        */
    visitLetDeclaration(ctx) {
        const id = ctx.ID().getText();

        // Guardamos el estado original de processingLambda
        const wasProcessingLambda = this.processingLambda;
        this.processingLambda = true;

        // Visitamos la expresión asociada al let para obtener su valor
        const value = this.visit(ctx.expression());

        // Restauramos el estado de processingLambda
        this.processingLambda = wasProcessingLambda;

        // Si el valor es una LambdaExpression
        if (value && value.type === 'LambdaExpression') {
            // Inicializar atributos de la función lambda
            this.functionAttributes[id] = this.initializeAttributes();

            // Detalles de la función
            const functionDetails = {
                type: 'FunctionDeclaration',
                name: id,
                params: value.params
            };

            // Registrar la función en el contexto global
            const prevFunction = this.currentFunction;
            this.currentFunction = id;
            this.addAttribute(functionDetails);

            // Agregar el cuerpo de la lambda al contexto de la función
            if (value.body) {
                if (Array.isArray(value.body)) {
                    // Si el cuerpo es un bloque de sentencias
                    this.functionAttributes[id].secuencia.push(...value.body);
                } else {
                    // Si el cuerpo es una única declaración, como PrintStatement o BinaryExpression
                    this.functionAttributes[id].secuencia.push(value.body);
                }
            }

            // Restaurar el contexto anterior
            this.currentFunction = prevFunction;
        }

        // Detalles del LetDeclaration
        const letDetails = {
            type: 'LetDeclaration',
            id,
            value
        };

        // Agregar la declaración let al contexto actual
        this.addAttribute(letDetails);

        return letDetails;
    }

    /** 
    * Procesa una expresión de tipo `Lambda`, extrayendo sus parámetros y cuerpo. 
    * Si la expresión tiene un bloque de instrucciones, las procesa, de lo contrario, 
    * evalúa la expresión. Retorna un objeto que representa la lambda con su tipo, 
    * parámetros y cuerpo.
    * 
    * @method visitLambdaExpression
    * 
    * @param {Object} ctx El contexto de la expresión lambda, que contiene los parámetros y el cuerpo de la lambda.
    * @returns {Object} Un objeto que representa la expresión lambda, con el tipo, los parámetros y el cuerpo.
    * @returns {string[]} return.params Los parámetros de la lambda.
    * @returns {Array|Object} return.body El cuerpo de la lambda, que puede ser un array de instrucciones o una expresión.
    */
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


    /** 
    * Procesa una declaración de constante `const`, evaluando su expresión y registrando los detalles
    * de la constante en los atributos de la función actual y en los resultados globales.
    * Este método obtiene el identificador y el valor de la constante, y los guarda como parte
    * de la declaración de constante.
    * 
    * @method visitConstDeclaration
    * 
    * @param {Object} ctx El contexto de la declaración `const`, que contiene el identificador y la expresión de la constante.
    * @returns {Object} Un objeto que representa la declaración `const`, con el tipo, el identificador y el valor evaluado.
    */
    visitConstDeclaration(ctx) {
        const id = ctx.ID().getText();
        
        // Guardamos el estado original de processingLambda
        const wasProcessingLambda = this.processingLambda;
        this.processingLambda = true;
        
        // Visitamos la expresión asociada al `const` para obtener su valor, marcándola como anidada
        const value = this.visit(ctx.expression());
        
        // Restauramos el estado de processingLambda
        this.processingLambda = wasProcessingLambda;
        
        // Si el valor es una LambdaExpression
        if (value && value.type === 'LambdaExpression') {
            // Inicializar atributos de la función lambda
            this.functionAttributes[id] = this.initializeAttributes();
        
            // Detalles de la función
            const functionDetails = {
                type: 'FunctionDeclaration',
                name: id,
                params: value.params
            };
        
            // Registrar la función en el contexto global
            const prevFunction = this.currentFunction;
            this.currentFunction = id;
            this.addAttribute(functionDetails);
        
            // Agregar el cuerpo de la lambda al contexto de la función
            if (value.body) {
                if (Array.isArray(value.body)) {
                    // Si el cuerpo es un bloque de sentencias
                    this.functionAttributes[id].secuencia.push(...value.body);
                } else {
                    // Si el cuerpo es una única declaración, como PrintStatement o BinaryExpression
                    this.functionAttributes[id].secuencia.push(value.body);
                }
            }
        
            // Restaurar el contexto anterior
            this.currentFunction = prevFunction;
        }
        
        // Detalles del ConstDeclaration
        const constDetails = {
            type: 'ConstDeclaration',
            id,
            value
        };
        
        // Agregar la declaración `const` al contexto actual
        this.addAttribute(constDetails);
        
        return constDetails;
    }

    /** 
    * Procesa una expresión que puede contener múltiples asignaciones, evaluando cada una de ellas
    * y construyendo una expresión binaria que las combine. Si hay más de una asignación, se genera
    * una expresión binaria para cada par de asignaciones sucesivas, usando el operador entre ellas.
    * 
    * @method visitExpression
    * 
    * @param {Object} ctx El contexto de la expresión, que contiene una lista de asignaciones.
    * @returns {Object|null} Una expresión binaria que representa el resultado de evaluar las asignaciones,
    * o `null` si no hay asignaciones.
    * @returns {Object} return.type El tipo de la expresión, que será siempre `BinaryExpression` en el caso de múltiples asignaciones.
    * @returns {Object} return.left El resultado de la primera asignación o expresión.
    * @returns {string} return.operator El operador entre las asignaciones.
    * @returns {Object} return.right El valor de la asignación siguiente en la expresión binaria.
    */
    visitExpression(ctx) {
        const assignments = ctx.assignment();
        if (assignments.length === 0) return null;

        let result = this.visit(assignments[0]);

        for (let i = 1; i < assignments.length; i++) {
            const operator = ctx.getChild(2 * i - 1).getText();
            const assignmentValue = this.visit(assignments[i]);
            
            // Handle numeric operations if both operands are numbers
            if (typeof result === 'number' && typeof assignmentValue === 'number') {
                switch (operator) {
                    case '+': result += assignmentValue; break;
                    case '-': result -= assignmentValue; break;
                    case '*': result *= assignmentValue; break;
                    case '/': result /= assignmentValue; break;
                    case '**': result = Math.pow(result, assignmentValue); break;
                }
            } else {
                const expressionDetails = {
                    type: 'BinaryExpression',
                    left: result,
                    operator,
                    right: assignmentValue
                };
                
                if (!this.processingLambda) {
                    this.addAttribute(expressionDetails);
                }
                
                result = expressionDetails;
            }
        }
        return result;
    }

    /** 
    * Procesa una asignación que puede contener múltiples comparaciones, evaluando cada una de ellas
    * y construyendo una expresión de asignación que las combine. Si hay más de una comparación, 
    * se genera una expresión de asignación para cada par de comparaciones sucesivas, usando el operador entre ellas.
    * 
    * @method visitAssignment
    * 
    * @param {Object} ctx El contexto de la asignación, que contiene una lista de comparaciones.
    * @returns {Object|null} Una expresión de asignación que representa el resultado de evaluar las comparaciones,
    * o `null` si no hay comparaciones.
    * @returns {Object} return.type El tipo de la expresión, que será siempre `AssignmentExpression` en el caso de múltiples comparaciones.
    * @returns {Object} return.left El resultado de la primera comparación o expresión.
    * @returns {string} return.operator El operador entre las comparaciones.
    * @returns {Object} return.right El valor de la comparación siguiente en la expresión de asignación.
    */
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


    /** 
    * Procesa una comparación que puede contener múltiples factores, evaluando cada uno de ellos
    * y construyendo una expresión de comparación que los combine. Si hay más de un factor, se genera
    * una expresión de comparación para cada par de factores sucesivos, usando el operador entre ellos.
    * 
    * @method visitComparison
    * 
    * @param {Object} ctx El contexto de la comparación, que contiene una lista de factores.
    * @returns {Object|null} Una expresión de comparación que representa el resultado de evaluar los factores, o `null` si no hay factores.
    * @returns {Object} return.type El tipo de la expresión, que será siempre `ComparisionExpression` (nota: se podría corregir la ortografía a `ComparisonExpression`).
    * @returns {Object} return.left El resultado del primer factor o expresión.
    * @returns {string} return.operator El operador entre los factores.
    * @returns {Object} return.right El valor del siguiente factor en la expresión de comparación.
    */
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

    
    visitStatement(ctx) {
        if (ctx.expressionStatement()) {
            return this.visit(ctx.expressionStatement());
        }
        if (ctx.printStatement()) {
            return this.visit(ctx.printStatement());
        }
        if (ctx.functionDeclaration()) {
            return this.visit(ctx.functionDeclaration());
        }
        if (ctx.ifStatement()) {
            return this.visit(ctx.ifStatement());
        }
        if (ctx.letDeclaration()) {
            return this.visit(ctx.letDeclaration());
        }
        if (ctx.constDeclaration()) {
            return this.visit(ctx.constDeclaration());
        }
        if (ctx.returnStatement()) {
            return this.visit(ctx.returnStatement());
        }
        return null;
    }


    /** 
    * Procesa una llamada a función, extrayendo el nombre de la función y los argumentos que le son pasados.
    * Si la llamada contiene argumentos, estos son evaluados y almacenados en un array.
    * Los detalles de la llamada a la función se registran en los atributos de la función actual y en los resultados globales.
    * 
    * @method visitFunctionCall
    * 
    * @param {Object} ctx El contexto de la llamada a función, que contiene el identificador de la función y la lista de argumentos.
    * @returns {Object} Un objeto que representa la llamada a la función, con el tipo, el nombre de la función y los argumentos evaluados.
    * @returns {string} return.functionName El nombre de la función llamada.
    * @returns {Array} return.args Una lista de los argumentos evaluados para la llamada a la función.
    */
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


     /** 
    * Procesa una declaración `print`, extrayendo y evaluando los argumentos que se pasan a la función `print`.
    * Los argumentos se almacenan en un array y se registra la declaración de impresión en los atributos de la función
    * actual solo si no estamos dentro de una lambda. 
    * 
    * @method visitPrintStatement
    * 
    * @param {Object} ctx El contexto de la declaración `print`, que contiene una lista de los argumentos a imprimir.
    * @returns {Object} Un objeto que representa la declaración de impresión, con el tipo y los argumentos evaluados.
    * @returns {Array} return.args Una lista de los argumentos que se pasarán a la función `print`, que pueden ser expresiones evaluadas.
    */
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


    /** 
    * Procesa una declaración de función, extrayendo el nombre de la función y sus parámetros.
    * Si la declaración incluye un bloque de instrucciones, se visita dicho bloque. Además, se registra
    * la declaración de la función en el contexto actual y, si es necesario, se crea un nuevo contexto para la función.
    * 
    * @method visitFunctionDeclaration
    * 
    * @param {Object} ctx El contexto de la declaración de la función, que contiene el identificador de la función
    * y la lista de parámetros.
    * @returns {Object} Un objeto que representa la declaración de la función, con el tipo, el nombre y los parámetros.
    * @returns {string} return.name El nombre de la función declarada.
    * @returns {Array} return.params Los parámetros de la función, extraídos del contexto de la declaración.
    */
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


    /** 
    * Procesa una declaración de expresión, evaluando la expresión contenida en la declaración y registrando
    * los detalles de la expresión en los atributos de la función actual.
    * 
    * @method visitExpressionStatement
    * 
    * @param {Object} ctx El contexto de la declaración de expresión, que contiene la expresión que se va a evaluar.
    * @returns {Object} Un objeto que representa la declaración de expresión, con el tipo y la expresión evaluada.
    * @returns {Object} return.expression El valor de la expresión evaluada.
    */
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

    /** 
    * Procesa una declaración `if`, evaluando la condición y registrando los detalles de la declaración `if`.
    * Si la declaración `if` tiene un bloque de instrucciones, se visita ese bloque. Además, si existen declaraciones
    * `else if` o `else`, también se procesan.
    * 
    * @method visitIfStatement
    * 
    * @param {Object} ctx El contexto de la declaración `if`, que contiene la condición y los posibles bloques `if`, `else if`, y `else`.
    * @returns {Object} Un objeto que representa la declaración `if`, con el tipo y la condición evaluada.
    * @returns {Object} return.condition El valor de la condición evaluada en la declaración `if`.
    */
    visitIfStatement(ctx) {
        const condition = this.visit(ctx.expression());
        const body = ctx.block() ? this.visit(ctx.block()) : null;
    
        const ifDetails = {
            type: 'IfStatement',
            condition,
            body
        };
    
        this.addAttribute(ifDetails);
    
        if (ctx.elseIfStatement()) {
            const elseIfStatements = ctx.elseIfStatement().map(elseIfCtx => this.visit(elseIfCtx));
            ifDetails.elseIfStatements = elseIfStatements;
        }
    
        if (ctx.elseStatement()) {
            ifDetails.elseStatement = this.visit(ctx.elseStatement());
        }
    
        return ifDetails;
    }    
    
    /** 
    * Procesa una declaración `else if`, evaluando la condición y registrando los detalles de la declaración `else if`.
    * Si la declaración `else if` tiene un bloque de instrucciones, se visita ese bloque.
    * 
    * @method visitElseIfStatement
    * 
    * @param {Object} ctx El contexto de la declaración `else if`, que contiene la condición y el bloque de instrucciones asociado.
    * @returns {Object} Un objeto que representa la declaración `else if`, con el tipo y la condición evaluada.
    * @returns {Object} return.condition El valor de la condición evaluada en la declaración `else if`.
    */
    visitElseIfStatement(ctx) {
        const condition = this.visit(ctx.expression());
        const body = ctx.block() ? this.visit(ctx.block()) : null;
    
        const elseIfDetails = {
            type: 'ElseIfStatement',
            condition,
            body
        };
    
        this.addAttribute(elseIfDetails);
    
        return elseIfDetails;
    }    


    /** 
    * Procesa una declaración `else` y registra los detalles de la declaración `else`.
    * Si la declaración `else` tiene un bloque de instrucciones, se visita ese bloque.
    * 
    * @method visitElseStatement
    * 
    * @param {Object} ctx El contexto de la declaración `else`, que puede contener un bloque de instrucciones asociado.
    * @returns {Object} Un objeto que representa la declaración `else`, con el tipo `ElseStatement`.
    */
    visitElseStatement(ctx) {
        const body = ctx.block() ? this.visit(ctx.block()) : null;
    
        const elseDetails = {
            type: 'ElseStatement',
            body
        };
    
        this.addAttribute(elseDetails);
    
        return elseDetails;
    }    

    /**
     * Procesa un bloque de instrucciones, visitando cada una de las instrucciones contenidas en el bloque.
     * 
     * @method visitBlock
     * 
     * @param {Object} ctx El contexto del bloque de instrucciones, que contiene una lista de instrucciones.
     * @returns {Object} Un objeto que representa el bloque de instrucciones, con el tipo `Block`.
    */ 
    visitBlock(ctx) {
        const statements = ctx.statement().map(stmt => this.visit(stmt));
    
        const blockDetails = {
            type: 'Block',
            statements
        };
    
        this.addAttribute(blockDetails);
    
        return blockDetails;
    }    

    
     /** 
    * Devuelve los atributos de las funciones registradas en el contexto.
    * 
    * @method getFunctionAttributes
    * 
    * @returns {Object} Un objeto que contiene los atributos de las funciones, con sus respectivos detalles y secuencia.
    */
    getFunctionAttributes() {
        return this.functionAttributes;
    }

    /** 
    * Reemplaza las declaraciones `LetDeclaration` que contienen expresiones de lambda en el cuerpo de la función
    * con la secuencia de instrucciones adecuada para la lambda. Si el cuerpo de la lambda es una expresión binaria o 
    * un bloque de sentencias, se procesa y reemplaza la declaración `LetDeclaration` con el cuerpo de la lambda.
    * Además, guarda la secuencia de la función y el cuerpo de la lambda en los atributos de la función.
    * 
    * @method transformLetDeclarationsWithLambdas
    * 
    * @throws {Error} Si el cuerpo de la lambda no es reconocido o tiene un formato inesperado.
    */
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

    getResultsCommander() {
        return this.results;
    }
}

export default Loader;