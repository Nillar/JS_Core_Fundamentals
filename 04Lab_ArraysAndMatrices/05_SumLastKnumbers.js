function solve(n, k) {
    let sequence = [1];


    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k); // 1 2 3 4 5 6  i= 1 k = 2 Math.max - 0 > -1
        let end = i;
        let sum = sequence.slice(start, end).reduce((a, b) => a + b, 0);

        sequence[i] = sum;
    }

    console.log(sequence.join(' '));
}

solve(8, 2);