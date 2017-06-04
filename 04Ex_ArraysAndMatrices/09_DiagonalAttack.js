function diagonalAttack(input) {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    let matrix = [];

    for (let arr of input) {
        matrix.push(arr.split(' ').map(Number));
    }

    for (let row = 0; row < matrix.length; row++) {
        leftDiagonalSum += matrix[row][row];
        rightDiagonalSum += matrix[row][matrix.length - row - 1];
    }

    if (leftDiagonalSum !== rightDiagonalSum) {
        for (let number of matrix) {
            console.log(number.join(' '));
        }
    }
    else {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row == col || row + col == matrix.length - 1) {

                }
                else {
                    matrix[row][col] = leftDiagonalSum;
                }
            }
        }
        for (let number of matrix) {
            console.log(number.join(' '));
        }
    }
}
diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);