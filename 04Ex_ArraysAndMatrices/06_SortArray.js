function sort(input) {
    let result = 0;
    for (let i = 0; i < input.length; i++) {
        result = input.sort((a,b) => (a < b) ? -1 : (a > b) ? 1 : 0)
            .sort((word1, word2) => word1.length > word2.length);
    }

    console.log(result.join('\n'));
}
sort(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);