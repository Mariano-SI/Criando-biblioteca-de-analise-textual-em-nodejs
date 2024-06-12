import fs from 'fs';
import handleErrors from './errors/functionsErro.js';
import {countWords} from './index.js';
import {makeFileText} from './helpers.js';

const cliArgs = process.argv; //process.argv é um array que contém os argumentos da linha de comando passados para o script Node.js
const fileToReadPath = cliArgs[2];
const fileToSavePath = cliArgs[3];

fs.readFile(fileToReadPath, 'utf-8', (err, data) => {
    try{
        if(err) throw err;
        const result = countWords(data);
        createAndSaveFile(result, fileToSavePath);
    }catch(err){
        console.log(handleErrors(err));
    }
})

async function createAndSaveFile(content, pathToSave){
    const newArchive = `${pathToSave}/result.txt`; 
    const text = makeFileText(content);
    try {
        await fs.promises.writeFile(newArchive, text);
        console.log('Arquivo salvo com sucesso!');
    } catch (error) {
        throw error;
    } 
}