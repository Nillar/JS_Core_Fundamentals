function sumByTown(input) {
    let result = {};

    for (let i = 0; i < input.length; i+=2) {
        let [town, income] = [input[i], Number(input[i + 1])];
        if(!result.hasOwnProperty(town)){
            result[town] = income;
        }
        else {
            result[town] += income;
        }
    }
    return JSON.stringify(result);
}

console.log(sumByTown(['Sofia', '20', 'Varna', '10', 'Sofia', '5']));;
