import { exec } from 'child_process';
import fs from 'fs';


const testFiles = [
    'test1.bies',
    'testAritmetica.bies',
    'testFunciones.bies',
    'testIF.bies',
    'testLogic.bies'

];


    testFiles.forEach((file) => {
        test(`Testing ${file}`, (done) => {
           
            const filePath = `./test/${file}`; // Adjust the path if needed
            

            expect(fs.existsSync(filePath)).toBe(true);
           
            exec(`node  ./commander.js  ${file}`, (error, stdout, stderr) => {
                
                expect(error).toBeNull(); // Expect no errors
                expect(stderr).toBe(''); // Expect no standard error output
                console.log(`Output for ${file}:\n${stdout}`); // Optional: Display output for each test
                done();
            });
        });
    });

