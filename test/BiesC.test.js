import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

const testFiles = [
    'test1.bies',
    'testAritmetica.bies',
    'testFunciones.bies',
    'testIF.bies',
    'testLogic.bies'
];

describe('BiesVM Test Suite', () => {
    testFiles.forEach((file) => {
        test(`Testing ${file}`, (done) => {
            const filePath = path.join(__dirname, 'test', file); // Adjust path if needed
            
            // Check if file exists
            expect(fs.existsSync(filePath)).toBe(true);

            // Execute each test file in biesVM
            exec(`node ./biesC.js -o ${filePath}`, (error, stdout, stderr) => {
                expect(error).toBeNull(); // Expect no errors
                expect(stderr).toBe(''); // Expect no standard error output
                console.log(`Output for ${file}:\n${stdout}`); // Optional: Display output for each test
                done();
            });
        });
    });
});
