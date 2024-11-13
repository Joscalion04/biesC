#!/usr/bin/env node

import { program } from 'commander';
import fs from 'fs';
import runParser from './index.js';

program
  .option('--o <outfile>', 'Archivo de salida para las impresiones (sysout)')
  .option('--e <errfile>', 'Archivo para las salidas de error (syserr)')
  .option('--trace <level>', 'Nivel de trace (0 o 1)', '0')
  .option('--use-config <configFile>', 'Archivo de configuración JSON', '.config_biesm.json')
  .argument('<file>', 'Archivo fuente .bies');

program.parse(process.argv);

const options = program.opts();
const sourceFile = program.args[0];

if (!sourceFile) {
    console.error('Error: No se ha proporcionado el archivo fuente.');
    process.exit(1);
}

// Cargar configuración desde el archivo JSON si se especifica
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

// Definir valores predeterminados para las opciones de salida y trace
const outFile = options.o || config.outfile || `${sourceFile.replace(/\.bies$/, '')}.out`;
const errFile = options.e || config.errfile || `${sourceFile.replace(/\.bies$/, '')}.err`;
const traceLevel = options.trace || config.trace || '0';

// Verificar si el archivo fuente existe
const filePath = `./test/${sourceFile}`;
if (!fs.existsSync(filePath)) {
    console.error(`Error: El archivo "${filePath}" no existe.`);
    process.exit(1);
}

console.log(`Archivo fuente: ${filePath}`);
console.log(`Archivo de salida (sysout): ${outFile}`);
console.log(`Archivo de errores (syserr): ${errFile}`);
console.log(`Nivel de trace: ${traceLevel}`);

// Ejecutar el parser con trace y redirigir las salidas
try {
    const result = runParser(filePath);
    if (result === undefined) {
        throw new Error("El parser no devolvió ningún resultado.");
    }

    // Mostrar el resultado en la consola
    result.forEach(line => console.log(line));

    // Escritura en el archivo de salida
    const resultString = result.join('\n');
    if (resultString !== undefined) {
        try {
            fs.writeFileSync(outFile, resultString);
            console.log(`Ejecución completada con éxito. Salida en: ${outFile}`);
        } catch (writeError) {
            console.error(`Error al escribir en el archivo de salida "${outFile}":`, writeError.message);
        }
    } else {
        console.error(`Error: No hay datos para escribir en "${outFile}".`);
    }
} catch (error) {
    console.error('Error: La ejecución del archivo ha fallado.');
    
    let errorOutput = error.message;
    if (traceLevel === '1') {
        errorOutput += `\nTrace de errores: ${error.stack}\n`;
    }

    // Escritura en el archivo de errores
    try {
        fs.writeFileSync(errFile, errorOutput);
        console.log(`Errores guardados en: ${errFile}`);
    } catch (writeError) {
        console.error(`Error al escribir en el archivo de errores "${errFile}":`, writeError.message);
    }
    process.exit(1);
}
// prueba: node commander.js --o salida.txt --e errores.txt --trace 1 test1.bies  
