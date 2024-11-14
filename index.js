import parseBIESCode from './src/runner.mjs';

parseBIESCode("./test/test_unitarios/test2.bies");

import fs from 'fs'; // Importar el módulo fs para trabajar con archivos


export default function runParser(filePath) {
    return parseBIESCode(filePath);
}