function solve(input) {
    let result = [];
    for (let i = 1; i <= input.length; i+=2) {
        result.push(input[i] * 2);
    }

    console.log(result.reverse().join(' '));
}
solve([3, 0, 10, 4, 7, 3]);