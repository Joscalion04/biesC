#!/usr/bin/env node

import { program } from 'commander';
import fs from 'fs';
import runParser from './index.js';

//ejemplo de uso
// node commander.js --o salida.txt --e errores.txt --trace 1 ./test/test_funcionales/source.bies      

program
  .option('--o <outfile>', 'Archivo de salida para las impresiones (sysout)')
  .option('--e <errfile>', 'Archivo para las salidas de error (syserr)')
  .option('--trace <level>', 'Nivel de trace (0 o 1)', '0')
  .option('--use-config <configFile>', 'Archivo de configuración JSON', '.config_biesm.json')
  .argument('<file>', 'Ruta al archivo fuente .bies');

program.parse(process.argv);

const options = program.opts();
const sourceFile = program.args[0];

/**
 * Verifica que el archivo fuente exista.
 */
if (!sourceFile) {
    console.error('Error: No se ha proporcionado un archivo fuente.');
    process.exit(1);
}

if (!fs.existsSync(sourceFile)) {
    console.error(`Error: El archivo "${sourceFile}" no existe.`);
    process.exit(1);
}

// Configuración opcional desde el archivo JSON
let config = {};
if (options.useConfig) {
    const configPath = options.useConfig;
    if (fs.existsSync(configPath)) {
        config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    } else {
        console.error(`Error: El archivo de configuración "${configPath}" no existe.`);
        process.exit(1);
    }
}

// Configuración de salida
const outFile = options.o || config.outfile || `${sourceFile.replace(/\.bies$/, '')}.basm`;
const errFile = options.e || config.errfile || `${sourceFile.replace(/\.bies$/, '')}.basm`;
const traceLevel = options.trace || config.trace || '0';

console.log(`Archivo fuente: ${sourceFile}`);
console.log(`Archivo de salida (sysout): ${outFile}`);
console.log(`Archivo de errores (syserr): ${errFile}`);
console.log(`Nivel de trace: ${traceLevel}`);

// Ejecución del parser
try {
    console.log('Ejecutando el parser...');
    const result = runParser(sourceFile);
    //console.log('Resultado del parser:', result);

    if (result === undefined) {
        throw new Error("El parser no devolvió ningún resultado.");
    }

    const resultString = result.map(line => JSON.stringify(line, null, 2)).join('\n');
    fs.writeFileSync(outFile, resultString);
    console.log(`Ejecución completada con éxito. Salida en: ${outFile}`);
} catch (error) {
    console.error('Error: La ejecución del parser ha fallado.');

    let errorOutput = error.message;
    if (traceLevel === '1') {
        errorOutput += `\nTrace de errores: ${error.stack}`;
    }

    fs.writeFileSync(errFile, errorOutput);
    console.log(`Errores guardados en: ${errFile}`);
    process.exit(1);
}