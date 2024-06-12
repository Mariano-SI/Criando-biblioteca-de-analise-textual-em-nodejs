function filterOccurences(paragraph){
    return Object.keys(paragraph).filter(key => paragraph[key] > 1);
}

function makeFileText(content){
    let finalText = '';
    content.forEach((paragraph, index )=> {
        const duplicates = filterOccurences(paragraph).join(', ');
        if(duplicates.length > 0){
            finalText += `Palavras duplicadas no paragrafo ${index + 1}: ${duplicates}\n`;
        };
    });

    return finalText;
}

export {makeFileText}