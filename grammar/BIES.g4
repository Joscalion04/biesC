grammar bies;

// Tokens
LET: 'let';
CONST: 'const';
VAR: 'var';
FUN: 'fun';
TRUE: 'true';
FALSE: 'false';
IF: 'if';
ELSE: 'else';
RETURN: 'return';
IN: 'in';
THEN: 'then';
PRINT: 'print'; // Token para la función print
ID: [a-zA-Z_][a-zA-Z0-9_]*;
INT: [0-9]+;
FLOAT: [0-9]+'.'[0-9]+;
STRING: '"' ( '\\' . | ~["\\] )* '"';
COMMENT: '//' ~[\r\n]* -> skip;
WS: [ \t\r\n]+ -> skip;

// Rules
program: (statement)* EOF;

statement: functionDeclaration  // Prioridad a la declaración de funciones
         | letInDeclaration     // Nuevo
         | letDeclaration 
         | constDeclaration 
         | printStatement       // Nuevo: print() como statement
         | expressionStatement 
         | returnStatement
         | ifStatement
         ;

letDeclaration: 'let' ID '=' expression ';'? ;
constDeclaration: 'const' ID '=' expression ';'? ;

letInDeclaration: 'let' '{' (constDeclaration | letDeclaration)* '}' 'in' block ; // Manejo de let-in blocks

functionDeclaration: 'fun' ID '(' parameterList? ')' block;
returnStatement: 'return' expression? ';'? ;
expressionStatement: expression ';'? ;

printStatement: PRINT '(' argumentList? ')' ';'? ; // Regla para manejar print()

parameterList: ID (',' ID)*;

expression: assignment (( '+' | '-' ) assignment)*;

assignment: comparison ('=' comparison)* ; // Removido el bloque opcional con `*`

comparison: term (( '>' | '<' | '>=' | '<=' | '==' | '!=' ) term)?;

term: factor (( '*' | '/' | '**' ) factor)*;

factor: INT 
      | FLOAT
      | ID 
      | STRING 
      | listAccess          // Nuevo
      | '(' expression ')' 
      | lambdaExpression    // Nuevo
      | functionCall
      ;

functionCall: ID '(' argumentList? ')';
argumentList: expression (',' expression)*;

block: '{' (statement)* '}';

ifStatement: 'if' '(' expression ')' block (ELSE block)?;

lambdaExpression: '(' parameterList? ')' '=>' (expression | block) ; // Manejo de funciones lambda

listAccess: ID '[' expression ']' ; // Manejo de acceso a listas
