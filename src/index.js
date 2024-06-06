const fs = require('fs');

const filePath = process.argv; //process.argv é um array que contém os argumentos da linha de comando passados para o script Node.js
const link = filePath[2];

fs.readFile(link, 'utf-8', (err, data) => {
    console.log(data)
})

console.log(link);
