#!/usr/bin/env node

import { program } from 'commander';
import fs from 'fs';
import runParser from './index.js';
/**
* Archivo commander que permite ejecutar el parser de BIESM desde la línea de comandos.
* 
* @author Manuel Mora Sandi 
* @author Derek Rojas Mendoza
* @author Josué Vindas Pérez
* @author Joseph León Cabezas
*/

/**
* Configura las opciones y argumentos para el programa, utilizando la biblioteca Commander.
* Las opciones y argumentos configurados permiten personalizar el comportamiento del programa
* a través de la línea de comandos.
* 
* @method
* @name configureProgram
* @example
* node commander.js --o salida.txt --e errores.txt --trace 1 source.bies
*/
program
  .option('--o <outfile>', 'Archivo de salida para las impresiones (sysout)')
  .option('--e <errfile>', 'Archivo para las salidas de error (syserr)')
  .option('--trace <level>', 'Nivel de trace (0 o 1)', '0')
  .option('--use-config <configFile>', 'Archivo de configuración JSON', '.config_biesm.json')
  .argument('<file>', 'Archivo fuente .bies');

program.parse(process.argv);

const options = program.opts();
const sourceFile = program.args[0];

/**
* Verifica si se ha proporcionado un archivo fuente como argumento en la línea de comandos.
* Si no se ha proporcionado, muestra un mensaje de error y termina la ejecución del programa.
* 
* @throws {Error} Si no se proporciona el archivo fuente, se muestra un error en la consola y se termina el proceso.
*/
if (!sourceFile) {
    console.error('Error: No se ha proporcionado el archivo fuente.');
    process.exit(1);
}

/**
* Carga un archivo de configuración JSON si se proporciona la opción '--use-config'.
* Si el archivo de configuración no existe, se muestra un mensaje de error y termina la ejecución del programa.
* Este bloque de código verifica si se ha especificado un archivo de configuración mediante la opción '--use-config'.
* Si se proporciona, intenta leer y parsear el archivo JSON.
* 
* @throws {Error} Si el archivo de configuración no existe, se muestra un mensaje de error y se termina el proceso.
*/
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


/**
* Verifica si el archivo fuente proporcionado existe en el directorio de pruebas.
* Si el archivo no existe, muestra un mensaje de error y termina el proceso.
* Este bloque de código construye la ruta completa al archivo de prueba a partir del nombre del archivo fuente,
* y luego verifica si el archivo existe en esa ubicación. 
*
* @throws {Error} Si el archivo fuente no existe, se muestra un mensaje de error y se termina el proceso.
*/
const filePath = `./test/test_funcionales/${sourceFile}`;
if (!fs.existsSync(filePath)) {
    console.error(`Error: El archivo "${filePath}" no existe.`);
    process.exit(1);
}

console.log(`Archivo fuente: ${filePath}`);
console.log(`Archivo de salida (sysout): ${outFile}`);
console.log(`Archivo de errores (syserr): ${errFile}`);
console.log(`Nivel de trace: ${traceLevel}`);

/**
* Ejecuta el parser en el archivo fuente, maneja el resultado y escribe la salida y los errores en archivos.
* 
* Este bloque de código ejecuta el parser para el archivo fuente especificado, verifica que el resultado sea
* válido y luego lo muestra en la consola. Si el resultado es válido, lo escribe en un archivo de salida.
* En caso de error durante la ejecución, el error se captura, se muestra en la consola y se guarda en un archivo de errores.
* 
* @param {string} filePath - Ruta al archivo fuente que será procesado por el parser.
* @param {string} outFile - Ruta al archivo de salida donde se almacenarán los resultados del parser.
* @param {string} errFile - Ruta al archivo donde se registrarán los errores en caso de fallos durante la ejecución.
* @param {string} traceLevel - Nivel de traza (0 o 1) para incluir o no la pila de errores en el archivo de errores.
* 
* @throws {Error} Si ocurre un error en la ejecución del parser o durante la escritura de los archivos de salida/errores.
*/
try {
    console.log('Ejecutando el parser...');
    const result = runParser(filePath);
    console.log('Resultado del parser:', result);

    if (result === undefined) {
        throw new Error("El parser no devolvió ningún resultado.");
    }

    // Mostrar el resultado en la consola
    result.forEach(line => console.log(JSON.stringify(line, null, 2)));

    // Escritura en el archivo de salida
    const resultString = result.map(line => JSON.stringify(line, null, 2)).join('\n');
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
