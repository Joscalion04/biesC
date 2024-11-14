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
   const input = fs.readFileSync(inputFile, 'utf-8');

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

   // Construye el AST.
   parser.buildParseTrees = true;

   /**
   * El árbol sintáctico resultante después del análisis.
   * @type {ParseTree}
   */
   const AST = parser.program();

   // Crea una instancia del Loader
   const loader = new Loader();

   // Llama al método visit para recorrer el AST
   loader.visit(AST);

   // Muestra los resultados procesados por el loader (atributos)
   console.log("Atributos procesados por Loader:");
   loader.getResults();  // Muestra el resultado final

   // Devuelve los resultados (por si los necesitas)
  return loader.getResultsCommander();
}

export default parseBIESCode;