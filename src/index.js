export function countWords(text){
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
