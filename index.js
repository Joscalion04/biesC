import parseBIESCode from './src/runner.mjs';

parseBIESCode("./test/test1.bies");

import fs from 'fs'; // Importar el módulo fs para trabajar con archivos


export default function runParser(filePath) {
    return parseBIESCode(filePath);
}