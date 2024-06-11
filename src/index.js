const fs = require('fs');

const filePath = process.argv; //process.argv é um array que contém os argumentos da linha de comando passados para o script Node.js
const link = filePath[2];

fs.readFile(link, 'utf-8', (err, data) => {
    separateParagraphs(data);
})


function separateParagraphs(text){
    const paragraphs = text.toLowerCase().split('\n');
    const count = paragraphs.map(paragraph => checkDuplicateWords(paragraph));
    console.log(count);
}

function checkDuplicateWords(text){
    const wordList = text.split(' ');
    const result = {};
    for (const word of wordList) {
        if(result[word]){
            result[word] = result[word] + 1;
        }else{
            result[word] = 1;
        }
    }
    return result;
}
