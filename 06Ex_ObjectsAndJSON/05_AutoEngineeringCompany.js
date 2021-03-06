function carRegister(strArr) {
    let result = new Map();

    for (let obj of strArr) {
        let data = obj.split(' | ');
        let brand = data[0];
        let model = data[1];
        let quantity = +data[2];

        if(!result.has(brand)){
            result.set(brand, new Map());
        }

        if(!result.get(brand).has(model)){
            result.get(brand).set(model, 0);
        }

        let current = result.get(brand).get(model);
        result.get(brand).set(model, current + quantity);
    }

    [...result].forEach(([brand, producedModel]) => {
        console.log(brand);
        [...producedModel].forEach(([model, produced]) => {
            console.log(`###${model} -> ${produced}`)
        });
    });
}

carRegister([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'

]);