grammar bies;

// Tokens
LET: 'let';
CONST: 'const';
VAR: 'var';  
FUN: 'fun';
TRUE: 'true';
FALSE: 'false';
IF: 'if';
THEN: 'then';
ELSE: 'else';
RETURN: 'return';
IN: 'in';
PRINT: 'print'; // Token para la función print
ID: [a-zA-Z_][a-zA-Z0-9_]*;
INT: [0-9]+;
FLOAT: [0-9]+'.'[0-9]+;
STRING: '"' ( '\\' . | ~["\\] )* '"';
COMMENT: '//' ~[\r\n]* -> skip;
WS: [ \t\r\n]+ -> skip;

// Rules
program: (statement)* EOF;

statement: functionDeclaration  
         | letInDeclaration    
         | letDeclaration 
         | constDeclaration 
         | printStatement       
         | expressionStatement 
         | returnStatement
         | ifStatement
         | ifThenStatement  
         | blockThen  
         | block
         ;

letDeclaration: 'let' ID '=' expression ';'? ;
constDeclaration: 'const' ID '=' expression ';'? ;

// let-in Declaration
letInDeclaration: 'let' '{' (constDeclaration | letDeclaration | letInDeclaration)* '}' 'in' block ';'? ;
functionDeclaration: 'fun' ID '(' parameterList? ')' block;
returnStatement: 'return' expression? ';'? ;
expressionStatement: expression ';'? ;

printStatement: PRINT '(' argumentList? ')' ';'? ;

parameterList: ID (',' ID)*;

expression: functionCall                         // Prioriza functionCall
          | assignment (( '+' | '-' | '*' | '/' | '**' ) assignment)*;

assignment: comparison ('=' comparison)?;  // Ajustada para permitir asignaciones

comparison: factor (('>' | '<' | '>=' | '<=' | '==' | '!=') factor)*;

list: '[' (expression (',' expression)*)? ']';

factor: INT 
      | FLOAT
      | ID 
      | STRING 
      | list               // Permitimos que 'list' sea un factor válido
      | listAccess          
      | '(' expression ')' 
      | lambdaExpression    
      | functionCall
      | printStatement       // Agrega printStatement como factor válido
      ;

functionCall: ID '(' argumentList? ')' ('(' argumentList? ')')*; 
argumentList: expression (',' expression)*;

block: '{' (statement)* '}';

ifStatement: 'if' '(' expression ')' block (elseIfStatement | elseStatement)?;

elseIfStatement: 'else' 'if' '(' expression ')' block (elseIfStatement | elseStatement)?;

elseStatement: ELSE block;

// Modificación en `lambdaExpression` para soportar lambdas con y sin paréntesis en los parámetros
lambdaExpression
    : '(' parameterList? ')' '=>' (block | lambdaExpression | expression | ifThenStatement | letInDeclaration)  // Lambdas con paréntesis
    | parameterList '=>' (block | lambdaExpression | expression | ifThenStatement)           // Lambdas sin paréntesis
    ;

listAccess: ID '[' expression ']';

// Nueva regla inline para if-then-else
ifThenStatement: 'if' '(' expression ')' blockThen statement*;

blockThen: 'then' statement* 'else';
