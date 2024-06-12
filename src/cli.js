import fs from 'fs';
import handleErrors from './errors/functionsErro.js';
import {countWords} from './index.js';


const filePath = process.argv; //process.argv é um array que contém os argumentos da linha de comando passados para o script Node.js
const link = filePath[2];

fs.readFile(link, 'utf-8', (err, data) => {
    try{
        if(err) throw err;
        countWords(data);
    }catch(err){
        console.log(handleErrors(err));
    }
})