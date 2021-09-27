const data = require('./words.json');
let message = [];

const sentence = data.sentences[Math.ceil(
    Math.random() * Object.keys(data.sentences).length)];

for (let i = 0; i < sentence.length; i++) {
    let wordNum = Math.floor(Math.random() * data[sentence[i]].length);
    
    if (i != 0 && sentence[i-1] === "articles") {
        let letter = message[i][0].toLowerCase();

        if (message[i-1] === 'a' || message[i-1] === 'an') {
            if (letter == 'a' || letter == 'e' || letter == 'i'
            || letter == 'o' || letter == 'u') {
                message[i-1] = 'an';
            } else {
                message[i-1] = 'a';
            }
        }        
    }     
}

console.log(message.join(" "));