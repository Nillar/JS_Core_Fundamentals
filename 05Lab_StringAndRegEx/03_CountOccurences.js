function count(target, text) {
    let counter = 0;
    let index = text.indexOf(target);

    while (index > -1) {
        counter++;
        index = text.indexOf(target, index + 1);
    }

    return counter;
}

console.log(count('the', 'The quick brown fox jumps over the lay dog.'));;