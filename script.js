const data = require('./words.json');

const sentence = data.sentences[Math.ceil(
    Math.random() * Object.keys(data.sentences).length)];

for (let i = 0; i < sentence.length; i++) {
    let wordNum = Math.floor(Math.random() * data[sentence[i]].length);
    //if (sentence[i] === 'articles') {
    //    let word = sentence[i + 1];
    //    let letter = word[0];
    //    console.log(letter);        
    //}
    // if word == article
    // get first letter of next word
    // if first letter is vowel randomly chooose an or the
    // else randomly choose a or the

    
    console.log(data[sentence[i]][wordNum]);
}