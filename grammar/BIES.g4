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
ID: [a-zA-Z_][a-zA-Z0-9_]*;
INT: [0-9]+;
STRING: '"' ( '\\' . | ~["\\] )* '"';
COMMENT: '//' ~[\r\n]* -> skip;
WS: [ \t\r\n]+ -> skip;

// Rules
program: (statement)* EOF;

statement: functionDeclaration   
         | letInExpression
         | letDeclaration 
         | constDeclaration 
         | expressionStatement 
         | returnStatement
         | ifStatement
         ;

letDeclaration: LET ID '=' expression ';'? ;
constDeclaration: CONST ID '=' expression ';'? ;
functionDeclaration: FUN ID '(' parameterList? ')' block;
returnStatement: RETURN expression? ';'? ;
expressionStatement: expression ';'? ;

parameterList: ID (',' ID)*;

// Operadores y expresiones
expression: comparison (( '+' | '-' ) comparison)* ;

comparison: term (( '>' | '<' | '>=' | '<=' | '==' | '!=' ) term)* ;

term: factor (( '*' | '/' | '**' ) factor)* ;

factor: INT 
      | ID 
      | STRING 
      | '(' expression ')' 
      | functionCall
      ;

functionCall: ID '(' argumentList? ')';
argumentList: expression (',' expression)*;

// Bloque de código
block: '{' (statement)* '}' ;

// Expresión condicional
ifStatement: IF '(' expression ')' THEN block (ELSE block)? ;

// Expresión let-in para anidar variables y funciones
letInExpression: LET '{' (letDeclaration | constDeclaration | functionDeclaration)* '}' IN block ;