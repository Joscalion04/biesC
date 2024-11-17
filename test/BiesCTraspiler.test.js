import fs from 'fs';
import path from 'path';
import { parseBIESCode, traspilerBIESCode } from '../src/runner.mjs';

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

const basePath = './test/test_funcionales';
const outputDir = './outputsParser';
const traspilerOutputDir = './outputTraspiler'; // Nueva carpeta para los resultados del transpiler

// Crear las carpetas de outputs si no existen
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}
if (!fs.existsSync(traspilerOutputDir)) {
    fs.mkdirSync(traspilerOutputDir, { recursive: true });
}

testFiles.forEach((file) => {
    test(`Testing ${file}`, async () => {
        const filePath = path.join(basePath, file);
        // Verificar si el archivo existe
        expect(fs.existsSync(filePath)).toBe(true);

        // Rutas para los archivos de salida y errores (outputsParser)
        const outFile = path.join(outputDir, `${file.replace(/\.bies$/, '')}_output.basm`);
        const errFile = path.join(outputDir, `${file.replace(/\.bies$/, '')}_errors.basm`);

        // Rutas para los archivos de salida del transpiler (outputTraspiler)
        const traspilerOutFile = path.join(traspilerOutputDir, `${file.replace(/\.bies$/, '')}_traspiled_output.basm`);
        const traspilerErrFile = path.join(traspilerOutputDir, `${file.replace(/\.bies$/, '')}_traspiled_errors.basm`);

        try {
            // Llamar a traspilerBIESCode para parsear y transpilar
            const result = await traspilerBIESCode(filePath);
            // Verificar que el resultado no sea nulo ni indefinido
            expect(result).toBeDefined();
            expect(result).not.toBeNull();

            // Guardar los resultados del parser en archivo de salida (outputsParser)
            fs.writeFileSync(outFile, JSON.stringify(result));

            // Verificar si hay errores en el parser y guardarlos (outputsParser)
            if (result.errors) {
                fs.writeFileSync(errFile, result.errors);
                expect(fs.existsSync(errFile)).toBe(true);
            } else {
                // Si no hay errores, eliminar archivo de errores si existe
                if (fs.existsSync(errFile)) fs.unlinkSync(errFile);
            }

            // Verificar si el archivo de salida existe (outputsParser)
            expect(fs.existsSync(outFile)).toBe(true);

            // Guardar los resultados del transpiler en archivo de salida (outputTraspiler)
            fs.writeFileSync(traspilerOutFile, JSON.stringify(result));

            // Verificar si hay errores del transpiler y guardarlos (outputTraspiler)
            if (result.errors) {
                fs.writeFileSync(traspilerErrFile, result.errors);
                expect(fs.existsSync(traspilerErrFile)).toBe(true);
            } else {
                // Si no hay errores, eliminar archivo de errores si existe
                if (fs.existsSync(traspilerErrFile)) fs.unlinkSync(traspilerErrFile);
            }

            // Verificar si el archivo de salida del transpiler existe (outputTraspiler)
            expect(fs.existsSync(traspilerOutFile)).toBe(true);

        } catch (err) {
            // Si ocurre un error en la ejecución de la prueba, lanzarlo
            console.error(`Error procesando el archivo ${file}:`, err);
            throw err; // Esto hará que Jest registre el fallo en el test
        }
    });
});