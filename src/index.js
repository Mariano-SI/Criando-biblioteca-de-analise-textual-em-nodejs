const fs = require('fs');
const handleErrors = require('./errors/functionsErro');

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

function countWords(text){
    const paragraphs = extractParagraphs(text);

    const count = paragraphs.flatMap(paragraph =>{
        if(!paragraph) return [];
        return checkDuplicateWords(paragraph);
    })
    console.log(count);
}

function extractParagraphs(text){
    return text.toLowerCase().split('\n');
}

function clearWord(word){
    return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function checkDuplicateWords(text){
    const wordList = text.split(' ');
    const result = {};
    for (const word of wordList) {
        if(word.length >= 3){
            const cleanWord = clearWord(word);
        
            if(result[cleanWord]){
                result[cleanWord] = result[cleanWord] + 1;
            }else{
                result[cleanWord] = 1;
            }
        }
    }
    return result;
}
