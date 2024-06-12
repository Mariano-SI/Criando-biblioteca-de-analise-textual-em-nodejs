import fs from 'fs';
import path from 'path';
import handleErrors from './errors/functionsErro.js';
import {countWords} from './index.js';
import {makeFileText} from './helpers.js';
import {Command} from 'commander';
import chalk from 'chalk';

const program = new Command();

program
    .version('0.0.1')
    .option('-t, --text <string>', 'Caminho do texto a ser processado')
    .option('-d, --destiny <string>', 'Caminho de onde iremos armazenar o arquivo de resultado')
    .action((options) =>{
        const {text, destiny} = options;
        if(!text || !destiny){
            console.error(chalk.red('erro: Você precisa passar o caminho do texto e o caminho de destino!'));
            program.help();
            return;
        } 

        const textPath = path.resolve(text);
        const destinyPath = path.resolve(destiny);

        try {
            processArchive(textPath, destinyPath);
            console.log(chalk.green('Texto processado com sucesso!'))
        } catch (error) {
            console.log(chalk.red('Ocorreu um erro ao processar o arquivo!'), error)
        }
    })

program.parse();

function processArchive(fileToReadPath, fileToSavePath){
    fs.readFile(fileToReadPath, 'utf-8', (err, data) => {
        try{
            if(err) throw err;
            const result = countWords(data);
            createAndSaveFile(result, fileToSavePath);
        }catch(err){
            console.log(handleErrors(err));
        }
    })
}


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