import fs from 'fs';
import readline from 'readline';

// Elimina espacios en blanco al inicio de una cadena
function packman_ws(input) {
    let i = 0;
    while (i < input.length && input[i] === ' ') {
        i++;
    }
    return input.slice(i);
}

// Separa los dígitos iniciales en la cadena
function packman_int(input) {
    let i = 0;
    while (i < input.length && /\d/.test(input[i])) {
        i++;
    }
    return [input.slice(0, i), input.slice(i)];
}

// Prueba para eliminar espacios en blanco al inicio de una cadena
function test_1() {
    const input = '   let x = 1';
    const result = packman_ws(input);
    console.log(result); // 'let x = 1'
}

// Prueba para extraer solo los números al inicio de una cadena con espacios alrededor
function test_2() {
    const input = '  123 ';
    const [digits, rest] = packman_int(packman_ws(input));
    console.log(digits); // '123'
}

// Lee el archivo y genera un árbol de sintaxis
function parser(filename) {
    const content = fs.readFileSync(filename, 'utf8');
    return program(content);
}

// Analiza el programa completo
function program(input) {
    input = packman_ws(input);
    const expressions = [];
    while (input.length > 0) {
        const [expr, rest] = expression(input);
        expressions.push(expr);
        input = packman_ws(rest);
    }
    return { type: 'program', expressions };
}

// Analiza una expresión
function expression(input) {
    if (!input || input.trim().length === 0) {
        throw new Error(`Unexpected empty expression.`);
    }
    console.log(`Evaluating expression with input: "${input}"`);

   if (input.startsWith('let ')) {
    input = packman_ws(input.slice(4));
    const [id, rest1] = identifier(input);
    input = packman_ws(rest1);
    
    // Si encontramos una función de flecha (=>), la procesamos correctamente
    if (input.startsWith('=')) {
        input = packman_ws(input.slice(1));
        if (input.startsWith('(')) {
            input = packman_ws(input.slice(1));
            const [params, rest2] = parameters(input);
            input = packman_ws(rest2);
            if (input.startsWith(') =>')) {
                input = packman_ws(input.slice(4));  // Eliminar ' =>'
                const [body, rest3] = expression(input);
                return [{ type: 'let', id, expr: { type: 'arrow', params, body } }, rest3];
            } else {
                throw new Error(`Expected '=>' after parameters, found: ${input}`);
            }
        } else {
            const [expr, rest2] = expression(input);
            return [{ type: 'let', id, expr }, rest2];
        }
    } else {
        console.log(`Expected '=' after identifier in let declaration, found: ${input}`);
        throw new Error(`Expected '=' after identifier in let declaration, found: ${input}`);
    }
} else if (/^\d/.test(input)) {
        const [num, rest] = packman_int(input);
        return [{ type: 'num', value: parseInt(num, 10) }, rest];
    } else if (input.startsWith('(')) {
        input = packman_ws(input.slice(1));
        const [params, rest1] = parameters(input);
        input = packman_ws(rest1);

        const arrowIndex = input.indexOf('=>');
        if (arrowIndex === 0) {
            input = packman_ws(input.slice(2));
            const [body, rest2] = expression(input);
            return [{ type: 'arrow', params, body }, rest2];
        } else {
            throw new Error(`Expected '=>' after parameters, found: ${input}`);
        }
    } else if (input.startsWith('"')) {
        const endIndex = input.indexOf('"', 1);
        if (endIndex !== -1) {
            const str = input.slice(1, endIndex);
            return [{ type: 'str', value: str }, input.slice(endIndex + 1)];
        } else {
            throw new Error(`Unterminated string literal, found: ${input}`);
        }
    } else if (input.startsWith('print(')) {
        input = packman_ws(input.slice(6));
        const [arg, rest1] = expression(input);
        if (rest1.startsWith(')')) {
            return [{ type: 'call', id: 'print', args: [arg] }, rest1.slice(1)];
        } else {
            throw new Error(`Expected ')' after print arguments, found: ${rest1}`);
        }
    } else {
        const [id, rest] = identifier(input);
        return [{ type: 'id', name: id }, rest];
    }
    throw new Error(`Invalid expression, found: ${input}`);
}

// Función que maneja la asignación de funciones y valores
function parseAssignment(input) {
    const assignmentPattern = /^([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.*)/;
    const match = assignmentPattern.exec(input);
    if (match) {
        const identifier = match[1];
        const expression = match[2].trim();
        console.log(`Assignment detected: ${identifier} assigned with expression: ${expression}`);
        return [identifier, expression]; // Devuelve el identificador y la expresión
    }
    return null;
}

// Función identifier mejorada
function identifier(input) {
    if (!input || input.trim() === '') {
        console.log("Skipping empty or whitespace line.");
        return ["", input.slice(1)];
    }

    // Revisar si es una asignación o declaración de función
    let result = parseAssignment(input);
    if (result) {
        return result;
    }

    // Si no es una asignación, buscar un identificador
    const match = /^[a-zA-Z_][a-zA-Z0-9_]*/.exec(input);
    if (match) {
        console.log(`Identifier found: ${match[0]}`);
        return [match[0], input.slice(match[0].length)];
    } else {
        console.log(`Invalid identifier, found: ${input}`);
        throw new Error(`Invalid identifier, found: ${input}`);
    }
}

// Analiza los parámetros de una función
function parameters(input) {
    const params = [];
    while (input.length > 0 && input[0] !== ')') {
        const [param, rest] = identifier(input);
        params.push(param);
        input = packman_ws(rest);
        if (input[0] === ',') {
            input = packman_ws(input.slice(1));
        }
    }
    if (input[0] === ')') {
        return [params, input.slice(1)];
    }
    throw new Error(`Expected ')' after parameters, found: ${input}`);
}

// Generador de código para el AST
function generateCode(ast, stream) {
    ast.statements.forEach(statement => generateStatement(statement, stream));
}

// Generador de declaraciones en el AST
function generateStatement(statement, stream) {
    switch (statement.type) {   //switch para los tipos de declaraciones                           
        case 'let':
            stream.write(`let ${statement.id} = `);
            generateExpression(statement.expr, stream);
            stream.write('\n'); // Sin punto y coma al final de la declaración
            break;
        case 'call':    
            if (statement.id === 'print') {
                stream.write(`print(`);
            } else {
                stream.write(`${statement.id}(`);
            }
            statement.args.forEach((arg, index) => {
                if (index > 0) stream.write(' + ');
                generateExpression(arg, stream);
            });
            stream.write(`)\n`);
            break;
        default:
            stream.write(`/* Error: tipo de declaración desconocido: ${statement.type} */\n`);
    }
}

// Generador de expresiones en el AST
function generateExpression(expr, stream) {
    switch (expr.type) {
        case 'arrow':
            stream.write('(');
            expr.params.forEach((param, index) => {
                if (index > 0) stream.write(', ');
                stream.write(param);
            });
            stream.write(`) => `);
            generateExpression(expr.body, stream);
            break;
        case 'expr':
            generateExpression(expr.left, stream);
            stream.write(` ${expr.op === 'plus' ? '+' : '-'} `);
            generateExpression(expr.right, stream);
            break;
        case 'id':
            stream.write(expr.value);
            break;
        case 'num':
            stream.write(expr.value.toString());
            break;
        case 'str':
            stream.write(`"${expr.value}"`);
            break;
        case 'concat':
            generateExpression(expr.left, stream);
            stream.write(' + ');
            generateExpression(expr.middle, stream);
            stream.write(' + ');
            generateExpression(expr.right, stream);
            break;
        case 'call':
            stream.write(`${expr.id}()`);
            break;
        default:
            stream.write(`/* Error: expresión desconocida: ${expr.type} */`);
    }
}

// Función principal para generar el archivo de salida
function versionCompleja3(outputFileName) {
    const ast = {
        statements: [
            { type: 'let', id: 'splash', expr: { type: 'arrow', params: ['msg'], body: { type: 'id', value: 'print(msg)' } } },
            { type: 'let', id: 'greetings', expr: { type: 'arrow', params: [], body: { type: 'str', value: 'Hello World!' } } },
            { type: 'let', id: 'version', expr: { type: 'expr', left: { type: 'num', value: 4 }, op: 'plus', right: { type: 'expr', left: { type: 'num', value: 1 }, op: 'minus', right: { type: 'num', value: 2 } } } },
            { type: 'call', id: 'splash', args: [{ type: 'concat', left: { type: 'str', value: 'Testing helloworld Version ' }, middle: { type: 'id', value: 'version' }, right: { type: 'str', value: ' ***' } }] },
            { type: 'call', id: 'print', args: [{ type: 'call', id: 'greetings', args: [] }] }
        ]
    };

    const stream = fs.createWriteStream(outputFileName);
    generateCode(ast, stream);
    stream.end();
    console.log(`Código generado en el archivo ${outputFileName}`);
}

function versionCompleja0(outputFileName) {
    const ast = {
        statements: [
            { type: 'call', id: 'print', args: [{ type: 'str', value: 'Testing helloworld Version 0 ***' }] },
            { type: 'call', id: 'print', args: [{ type: 'str', value: 'Hello World!' }] }
        ]
    };

    const stream = fs.createWriteStream(outputFileName);
    generateCode(ast, stream);
    stream.end();
    console.log(`Código generado en el archivo ${outputFileName}`);
}

// Prueba el parser en el archivo 'TestBies.bies' y muestra el árbol de sintaxis generado
function test_parser() {
    const ast = parser('TestBies.bies');
    console.log(JSON.stringify(ast, null, 2));
}

// Ejecutar pruebas
test_1();
test_2();
versionCompleja0('versionCompleja0.js');
versionCompleja3('versionCompleja3.js');

//test_parser();
