function match(input) {
    if (Array.isArray(input)){
        input = input[0];
    }
    let words = input.match(/\w+/g);
    return console.log(words.join('|'));
}
match('A Regular Expression needs to have the global flag in order to match all occurrences in the text');