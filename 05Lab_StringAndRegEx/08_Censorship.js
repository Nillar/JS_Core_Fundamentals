function censor(string, input) {

    for (let word of input) {
        let censor = '-'.repeat(word.length);

        while(string.indexOf(word) > -1) {
            string = string.replace(word, censor);
        }
    }

    console.log(string);
}
censor('roses are red, violets are blue', [', violets are', 'red']);