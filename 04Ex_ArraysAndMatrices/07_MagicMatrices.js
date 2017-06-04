function magic(input) {
    let initialSum = 0;
    let secondSum = 0;

    for (let row = 0; row < input.length; row++) {
        initialSum += input[0][row];
    }

    for (let row = 1; row < input.length; row++) {
        secondSum = 0;
        for (let col = 0; col < input[row].length; col++) {
            secondSum += input[row][col];
        }
        if (initialSum !== secondSum) {
            return false;
        }
    }

    for (let col = 0; col < input[0].length; col++) {
        secondSum = 0;
        for (let row = 0; row < input.length; row++) {
            secondSum += input[row][col];
        }
        if (initialSum !== secondSum) {
            return false;
        }
    }

    return true;
}
console.log(magic([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));