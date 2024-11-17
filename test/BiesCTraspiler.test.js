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
const traspilerOutputDir = './outputTraspiler';
const additionalOutputDir = '../biesVM/test'; // Carpeta adicional en `biesVM/test`

// Crear las carpetas de outputs si no existen
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}
if (!fs.existsSync(traspilerOutputDir)) {
    fs.mkdirSync(traspilerOutputDir, { recursive: true });
}
if (!fs.existsSync(additionalOutputDir)) {
    fs.mkdirSync(additionalOutputDir, { recursive: true });
}

testFiles.forEach((file) => {
    test(`Testing ${file}`, async () => {
        const filePath = path.join(basePath, file);
        expect(fs.existsSync(filePath)).toBe(true);

        // Rutas para los archivos de salida y errores (outputsParser)
        const outFile = path.join(outputDir, `${file.replace(/\.bies$/, '')}_output.basm`);
        const errFile = path.join(outputDir, `${file.replace(/\.bies$/, '')}_errors.basm`);

        // Rutas para los archivos de salida del transpiler (outputTraspiler)
        const traspilerOutFile = path.join(traspilerOutputDir, `${file.replace(/\.bies$/, '')}_traspiled_output.basm`);
        const traspilerErrFile = path.join(traspilerOutputDir, `${file.replace(/\.bies$/, '')}_traspiled_errors.basm`);

        // Rutas adicionales para guardar en la carpeta `biesVM/test`
        const additionalOutFile = path.join(additionalOutputDir, `${file.replace(/\.bies$/, '')}_output.basm`);
        const additionalTraspilerOutFile = path.join(additionalOutputDir, `${file.replace(/\.bies$/, '')}_traspiled_output.basm`);

        try {
            const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

            // Llamar a `traspilerBIESCode` para parsear y transpilar
            const result = await traspilerBIESCode(filePath);
            expect(result).toBeDefined();
            expect(result).not.toBeNull();

            // Guardar los resultados del parser en ambas ubicaciones (outputsParser y additionalOutputDir)
            fs.writeFileSync(outFile, result.join('\n'));
            fs.writeFileSync(additionalOutFile, result.join('\n'));
            expect(fs.existsSync(outFile)).toBe(true);
            expect(fs.existsSync(additionalOutFile)).toBe(true);

            // Guardar los errores del parser si existen (outputsParser y additionalOutputDir)
            if (result.errors) {
                fs.writeFileSync(errFile, result.errors.join('\n'));
                fs.writeFileSync(path.join(additionalOutputDir, `${file.replace(/\.bies$/, '')}_errors.basm`), result.errors.join('\n'));
                expect(fs.existsSync(errFile)).toBe(true);
            } else if (fs.existsSync(errFile)) {
                fs.unlinkSync(errFile);
            }

            // Guardar los resultados del transpiler en ambas ubicaciones (outputTraspiler y additionalOutputDir)
            fs.writeFileSync(traspilerOutFile, result.join('\n'));
            fs.writeFileSync(additionalTraspilerOutFile, result.join('\n'));
            expect(fs.existsSync(traspilerOutFile)).toBe(true);
            expect(fs.existsSync(additionalTraspilerOutFile)).toBe(true);

            // Guardar los errores del transpiler si existen (outputTraspiler y additionalOutputDir)
            if (result.errors) {
                fs.writeFileSync(traspilerErrFile, result.errors.join('\n'));
                fs.writeFileSync(path.join(additionalOutputDir, `${file.replace(/\.bies$/, '')}_traspiled_errors.basm`), result.errors.join('\n'));
                expect(fs.existsSync(traspilerErrFile)).toBe(true);
            } else if (fs.existsSync(traspilerErrFile)) {
                fs.unlinkSync(traspilerErrFile);
            }

            expect(logSpy).toHaveBeenCalled();
            logSpy.mockRestore();

        } catch (err) {
            console.error(`Error procesando el archivo ${file}:`, err);
            throw err;
        }
    });
});