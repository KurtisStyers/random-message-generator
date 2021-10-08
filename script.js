const data = require('./words.json');

const randomMessage = () => {
    let message = [];

    // pick a random sentence structure from the sentences section of the JSON file
    const sentence = data.sentences[Math.ceil(
        Math.random() * Object.keys(data.sentences).length)];

    // loop through the different parts of the sentence and pick a random word for each
    for (let i = 0; i < sentence.length; i++) {
        let wordNum = Math.floor(Math.random() * data[sentence[i]].length);
        message.push(data[sentence[i]][wordNum]);
        
        // pick a or an if the next word starts with a vowel
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
    return message.join(" ");
}

console.log(randomMessage());