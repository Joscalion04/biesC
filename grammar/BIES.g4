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
ID: [a-zA-Z_][a-zA-Z0-9_]*;
INT: [0-9]+;
STRING: '"' .*? '"';
COMMENT: '//' ~[\r\n]* -> skip;
WS: [ \t\r\n]+ -> skip;

// Rules
program: (statement)* EOF;

statement: letDeclaration 
         | constDeclaration 
         | expression 
         | functionDeclaration
         ;

letDeclaration: 'let' ID '=' expression ';'?;
constDeclaration: 'const' ID '=' expression ';'?;
functionDeclaration: 'fun' ID '(' parameterList? ')' block;

parameterList: ID (',' ID)*;

expression: term (( '+' | '-' ) term)*;

term: factor (( '*' | '/' ) factor)*;

factor: INT 
      | ID 
      | STRING 
      | '(' expression ')' 
      | functionCall
      ;

functionCall: ID '(' argumentList? ')';

argumentList: expression (',' expression)*;

block: '{' (statement)* '}';