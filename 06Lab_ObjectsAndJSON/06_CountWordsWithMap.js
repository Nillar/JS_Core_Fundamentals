function countWithMap(input) {
    let words = input.join('\n').toLowerCase()
        .split(/[^A-Za-z0-9_]+/).filter(w => w != '');
    let wordsCount = new Map();

    for (let word of words) {
        if(wordsCount.has(word)){
            wordsCount.set(word, wordsCount.get(word) + 1);
        }
        else {
            wordsCount.set(word, 1);
        }
    }
    let allWords = Array.from(wordsCount.keys()).sort();
    allWords.forEach(w => console.log(`'${w}' -> ${wordsCount.get(w)} times`));
}
countWithMap(['JS and Node.js', 'JS again and again', 'Oh, JS?']);
