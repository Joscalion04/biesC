import fs from 'fs';
import antlr4 from 'antlr4';
import Loader from "./loader.mjs";
import biesGrammarLexer from '../parser/biesLexer.js';
import biesGrammarParser from '../parser/biesParser.js';
import Transpiler from './transpiler.mjs';

/**
* Funciones que se encarga de leer un archivo de código fuente BIES, tokenizarlo,
* tambien se encarga de construir el árbol de sintaxis abstracta (AST) y de
* recorrerlo para obtener los atributos de las funciones y variables.
* 
* @author Manuel Mora Sandi 
* @author Derek Rojas Mendoza
* @author Josué Vindas Pérez
* @author Joseph León Cabezas
*/

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

  /**
  * Crea una instancia del visitor `Loader`.
  * 
  * Esta instancia se utiliza para recorrer el AST y gestionar las instrucciones en la máquina virtual.
  * 
  * @constant {Loader} loader - Instancia del visitor personalizado.
  */
  const loader = new Loader();

  /**
  * Este método llama al visitor `Loader` para procesar cada nodo del AST 
  * y ejecutar las instrucciones correspondientes en la máquina virtual (BiesVM).
  * @method visit
  * @param {Object} AST - El árbol de sintaxis abstracta que representa el programa 
  *                       parseado por el analizador sintáctico.
  * @returns {void} No retorna ningún valor; el resultado del recorrido se almacena y ejecuta en el contexto del visitor.
  */
  loader.visit(AST);

  // Muestra los resultados procesados por el loader (atributos)
  console.log("Atributos procesados por Loader:");
  loader.getResults();  // Muestra el resultado final

  /**
  * Crea una instancia del transpiler `Transpiler`.
  * El transpiler se encarga de convertir las funciones obtenidas del visitor en un formato deseado.
  * @constant {Transpiler} transpiler - Instancia del transpiler.
  * @param {Array<Object>} functionAttributes - Atributos de las funciones a transpilar.
  */
  const transpiler = new Transpiler(loader.getFunctionAttributes());

  /**
  * Transpila las funciones obtenidas desde el visitor `Loader`.
  * Llama al método `transpile` para procesar los atributos de las funciones definidos en el AST.
  * @method transpile
  */
  // transpiler.transpile();
  //  console.log(transpiler.getTranspiledCode());

 /**
 * Obtiene los resultados del comando ejecutado por el cargador (loader).
 * Que pueden incluir datos o resultados de una operación anterior.
 * @returns {any} Los resultados obtenidos del comando ejecutado.
 */
  return loader.getResultsCommander();
}

export default parseBIESCode;