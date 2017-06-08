function count(input) {
    let text = input.join('\n');
    let words = text.split(/[^A-Za-z0-9_]+/).filter(w => w !== '');
    let wordsCount = {};

    for (let obj of words) {
        wordsCount[obj] ? wordsCount[obj]++ : wordsCount[obj] = 1;
    }
    return JSON.stringify(wordsCount);
}

console.log(count(['JS and Node.js', 'JS again and again', 'Oh, JS?']));
