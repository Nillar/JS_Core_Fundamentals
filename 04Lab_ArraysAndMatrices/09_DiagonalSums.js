function diagonalSum(input) {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;

    for (let row = 0; row < input.length; row++) {
        leftDiagonalSum += input[row][row];
        rightDiagonalSum += input[row][input.length - row - 1];
    }

    console.log(leftDiagonalSum + ' ' + rightDiagonalSum);
}

diagonalSum([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);