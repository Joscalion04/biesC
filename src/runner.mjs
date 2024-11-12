import fs from 'fs';
import antlr4 from 'antlr4';
import Loader from "./loader.mjs";
import biesGrammarLexer from '../parser/biesLexer.js';
import biesGrammarParser from '../parser/biesParser.js';

function parseBIESCode(input) {
  const chars = new antlr4.InputStream(input);
  const lexer = new BIESLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new BIESParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.program(); // punto de entrada en la gramática

  // Recorrer el árbol y construir el AST si es necesario
  // Esto puede incluir visitantes personalizados para cada nodo del árbol
  return tree;
}
