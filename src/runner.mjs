import fs from 'fs';
import antlr4 from 'antlr4';
import Loader from "./loader.mjs";
import biesGrammarLexer from '../parser/biesLexer.js';
import biesGrammarParser from '../parser/biesParser.js';

function parseBIESCode(inputFile) {
   /**
    * Contenido del archivo leído como una cadena.
    * @type {string}
    */
   const input = fs.readFileSync(inputFile,'utf-8');

   // De archivo a stream de caracteres.
   const chars = new antlr4.InputStream(input);

   /**
   * Instancia del lexer para procesar los caracteres del archivo.
   * @type {biesGrammarLexer}
   */
   const lexer = new biesGrammarLexer(chars);

   // Tokeniza el flujo de caracteres.
   const tokens = new antlr4.CommonTokenStream(lexer);

   /**
   * Instancia del parser que genera el árbol de sintaxis abstracta (AST).
   * @type {biesGrammarParser}
   */
   const parser = new biesGrammarParser(tokens);

   //Construye el AST.
   parser.buildParseTrees = true;

   /**
   * El árbol sintáctico resultante después del análisis.
   * @type {ParseTree}
   */
   const AST = parser.program();

   // Se necesita un loader que pase del AST a la máquina virtual.

   //Visita el AST.
   const loader = new Loader();
   loader.visit(AST);
}

export default parseBIESCode;