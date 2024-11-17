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
// 5 no, 7 no, 8 no y 9 no pasersean
// 1 , 2 , 3 , 4, 5, 6, 7, 8, 9 no traspilan

// Ejecutar el parser con el archivo de prueba test1.bies
//parseBIESCode("./test/test_funcionales/versionCompleja2.bies");
parseBIESCode("./test/test_funcionales/versionCompleja4.bies");

// Ejecutar el parser con el archivo pasado por parámetro desde el terminal con ayuda del commander
export default function runParser(filePath) {
    return parseBIESCode(filePath);
}