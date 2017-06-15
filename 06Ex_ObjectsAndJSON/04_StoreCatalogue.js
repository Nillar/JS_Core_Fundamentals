function catalogue(strArr) {
    let alphabeticalMap = new Map();

    for (let obj of strArr) {
        let productData = obj.split(' : ');
        let product = productData[0];
        let price = +productData[1];
        let firstLetter = product[0];

        if (!alphabeticalMap.has(firstLetter)) {
            alphabeticalMap.set(firstLetter, []);
        }

        let json = {
            name: product,
            price: price
        };

        let currentObj = alphabeticalMap.get(firstLetter);
        currentObj.push(json);

        alphabeticalMap.set(firstLetter, currentObj);

    }

    [...alphabeticalMap].sort((a, b) => sortAlphabetically(a, b)).forEach(([type, quantity]) => {
        console.log(type);
        quantity.sort(function (a, b) {
            let letter1 = a['name'].toLowerCase();
            let letter2 = b['name'].toLowerCase();
            if (letter1 > letter2) {
                return 1;
            }
            if (letter1 < letter2) {
                return -1;
            }
            return 0;
        }).forEach(e => {
            console.log(`  ${e['name']}: ${e['price']}`)
        })
    });

    function sortAlphabetically(a, b) {
        let letter1 = a[0].toLowerCase();
        let letter2 = b[0].toLowerCase();
        if (letter1 > letter2) {
            return 1;
        }
        if (letter1 < letter2) {
            return -1;
        }
        return 0;
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);