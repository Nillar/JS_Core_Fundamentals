function print(input) {
    let delimiter = input.splice(-1)[0];
    let result = '';

    for (let i = 0; i < input.length; i++) {
        if(i === input.length - 1){
            result += input[i];
        }
        else {
            result += input[i] + delimiter;
        }
    }
    console.log(result);
}

print(['One', 'two', 'three', '-'])