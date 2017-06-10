function extractWords(strArr) {
    let result = new Set();
    let regex = /\b[a-zA-Z0-9_]+\b/g;

    for (let word of strArr) {
        let matches = word.match(regex);
        matches.forEach(x => result.add(x.toLowerCase()));
    }

    console.log([...result.values()].join(', '));
}

extractWords(['JS and Node.js', 'JS again and again', 'Oh, JS?'])
