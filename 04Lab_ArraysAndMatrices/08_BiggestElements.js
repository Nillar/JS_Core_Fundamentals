function biggestElement(arr) {
    let biggestNumber = Number.NEGATIVE_INFINITY;

    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            if (arr[row][col] > biggestNumber) {
                biggestNumber = arr[row][col];
            }
        }
    }
    console.log(biggestNumber);
}
biggestElement([[20, 50, 10],
    [8, 33, 145]]
);