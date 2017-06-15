function remove(strArr) {
    let matrix = [];
    let result = [];

    for (let obj of strArr) {
        let input = obj.split('');
        matrix.push(input);
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let currentSymbol = matrix[row][col].toLowerCase();

            if (isInMatrix(matrix, row + 1, col + 1) &&
                isInMatrix(matrix, row - 1, col - 1) &&
                isInMatrix(matrix, row + 1, col - 1) &&
                isInMatrix(matrix, row - 1, col + 1) &&
                currentSymbol === matrix[row + 1][col + 1].toLowerCase() &&
                currentSymbol === matrix[row - 1][col - 1].toLowerCase() &&
                currentSymbol === matrix[row + 1][col - 1].toLowerCase() &&
                currentSymbol === matrix[row - 1][col + 1].toLowerCase()) {
                result.push([row, col]);
                result.push([row + 1, col + 1]);
                result.push([row - 1, col - 1]);
                result.push([row + 1, col - 1]);
                result.push([row - 1, col + 1]);
            }
        }

    }
    function isInMatrix(matrix, row, col) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length;
    }

    for (let obj of result) {
        let row = obj[0];
        let col = obj[1];

        matrix[row][col] = '';
    }

    for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(''));
    }
}



remove([
    'abnbjs',
    'xoBab',
    'Abmbh',
    'aabab',
    'ababvvvv'

]);