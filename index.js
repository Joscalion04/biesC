import { parseBIESCode, traspilerBIESCode } from './src/runner.mjs';
import fs from 'fs'; // Importar el módulo fs para trabajar con archivos

/**
* Función que se encarga de ejecutar el parser de BIES
* 
* @author Manuel Mora Sandi 
* @author Derek Rojas Mendoza
* @author Josué Vindas Pérez
* @author Joseph León Cabezas
*/

// Ejecutar el parser con el archivo de prueba test1.bies
//parseBIESCode("./test/test_funcionales/versionCompleja5_3.bies");
parseBIESCode("./test/test_unitarios/test2.bies");
//traspilerBIESCode("./test/test_funcionales/versionCompleja5.bies");

// Ejecutar el parser con el archivo pasado por parámetro desde el terminal con ayuda del commander
export default function runParser(filePath) {
    return parseBIESCode(filePath);
}