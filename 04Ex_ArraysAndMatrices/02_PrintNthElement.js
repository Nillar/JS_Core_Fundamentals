function print(input) {
    let step = Number(input.pop());
    let result = '';
    for (let i = 0; i < input.length; i+=step) {
        result += input[i] + '\n';
    }

    console.log(result);
}