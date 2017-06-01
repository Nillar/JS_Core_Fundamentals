function extract(input) {
    let biggestNum = Number.NEGATIVE_INFINITY;
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if(input[i] >= biggestNum){
            biggestNum = input[i];
            result.push(biggestNum);
        }
    }
    console.log(result.join('\n'));
}

extract([1, 2, 3, 4,1,7,11,23,3,25])