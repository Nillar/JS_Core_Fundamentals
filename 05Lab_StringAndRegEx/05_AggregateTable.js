function aggregateTable(input) {
    let towns = [];
    let sum = 0;

    for (let word of input) {

    }
    // for (let i = 0; i < input.length; i++) {
    //     if(i % 2 === 0) {
    //         towns.push(input[i]);
    //     }
    //     else {
    //         sum.push(Number(input[i]));
    //     }
    // }

    towns.join(', ');
    sum.reduce((a, b) => a + b);

    console.log(towns);
    console.log(sum);
}

aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);