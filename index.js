import parseBIESCode from './src/runner.mjs';

parseBIESCode("./test/test_funcionales/versionCompleja1.js");

import fs from 'fs'; // Importar el módulo fs para trabajar con archivos


export default function runParser(filePath) {
    return parseBIESCode(filePath);
}