function juice(strArr) {
    let inputMap = new Map();
    let bottles = 0;
    let result = new Map();
    // let input = strArr.split(' => ');

    for (let juiceQuantity of strArr) {
        let input = juiceQuantity.split(' => ');
        let fruit = input[0];
        let quantity = +input[1];

        if(!inputMap.has(fruit)){
            inputMap.set(fruit, 0);
        }
        inputMap.set(fruit, inputMap.get(fruit) + quantity);


        if(inputMap.get(fruit) >= 1000){
            if(!result.has(fruit)){
                result.set(fruit, 0);
            }
            bottles = Math.floor(inputMap.get(fruit) / 1000);
            inputMap.set(fruit, inputMap.get(fruit) - (bottles * 1000));

            result.set(fruit, result.get(fruit) + bottles);
        }
    }

    [...result].forEach(([type, quantity]) => {
        console.log(`${type} => ${quantity}`);
    });
}

juice([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);