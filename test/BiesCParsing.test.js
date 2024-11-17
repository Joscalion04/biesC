import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

// Lista de archivos de prueba
const testFiles = [
    'versionCompleja0.bies',
    'versionCompleja1.bies',
    'versionCompleja2.bies',
    'versionCompleja3.bies',
    'versionCompleja4.bies',
    'versionCompleja5.bies',
    'versionCompleja6.bies',
    'versionCompleja7.bies',
    'versionCompleja8.bies',
    'versionCompleja9.bies'
];

// Ruta base para los archivos de prueba (actualizada a test_funcionales)
const basePath = './test/test_funcionales';

// Ruta para la carpeta de outputs
const outputDir = './outputsParser';

// Crear la carpeta de outputs si no existe
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

testFiles.forEach((file) => {
    test(`Testing ${file}`, (done) => {
        const filePath = `${basePath}/${file}`;
        
        // Verificar que el archivo existe antes de continuar
        expect(fs.existsSync(filePath)).toBe(true);

        // Construir las rutas para los archivos de salida y errores
        const outFile = path.join(outputDir, `${file.replace(/\.bies$/, '')}_output.basm`);
        const errFile = path.join(outputDir, `${file.replace(/\.bies$/, '')}_errors.basm`);

        // Construir el comando para ejecutar `commander.js`
        const command = `node ./commander.js --o ${outFile} --e ${errFile} ${filePath}`;

        // Ejecutar el comando
        exec(command, (error, stdout, stderr) => {
            try {
                // Validar que no haya errores fatales
                expect(error).toBeNull();

                // Verificar si hay salida estándar y guardar en el archivo de salida
                if (stdout) {
                    fs.writeFileSync(outFile, stdout);
                    expect(fs.existsSync(outFile)).toBe(true);
                }

                // Verificar si hay errores estándar y guardar en el archivo de errores
                if (stderr) {
                    fs.writeFileSync(errFile, stderr);
                    expect(fs.existsSync(errFile)).toBe(true);
                } else {
                    // Si no hay errores, asegurar que el archivo de error no exista
                    if (fs.existsSync(errFile)) {
                        fs.unlinkSync(errFile); // Opcional: limpiar archivos innecesarios
                    }
                }

            } catch (err) {
                // Si ocurre un error en las validaciones, pasarlo al test
                done(err);
                return;
            }

            // Finalizar el test
            done();
        });
    });
});