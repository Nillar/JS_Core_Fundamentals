// function solve(input) {
//     let townsWithProducts = new Map();
//     for (let sale of input) {
//         let [town, product, quantityPrice] = sale.split(/\s*->\s*/);
//         let [quantity, price] = quantityPrice.split(/\s*:\s*/);
//         if (!townsWithProducts.has(town))
//             townsWithProducts.set(town, new Map());
//         let income = quantity * price;
//         let oldIncome = townsWithProducts.get(town).get(product);
//         if (oldIncome) income += oldIncome;
//         townsWithProducts.get(town).set(product, income);
//     }
//
//
//     for (let city of townsWithProducts) {
//         console.log(`Town - ${city}`);
//         for (let [productSale, profit] of townsWithProducts) {
//             console.log(`$$$${productSale} : ${profit}`);
//         }
//     }
// }

function solve(strArr) {
    let summary = new Map();

    for (let row of strArr) {
        let [town, product, sales] = row.split(' -> ');
        sales = sales.split(' : ').reduce((a, b) => a * b);
        //verify town exists

        if (!summary.has(town)) {
            summary.set(town, new Map());

        }
        //verify product exists
        if (!summary.get(town).has(product)) {
            summary.get(town).set(product, 0);
        }

        let oldSales = summary.get(town).get(product);
        summary.get(town).set(product, oldSales + sales);
    }

    //functional print
    [...summary].forEach(([town, products]) => {
        console.log(`Town - ${town}`);
        [...products].forEach(([product, sales]) =>
            console.log(`$$$${product} : ${sales}`));
    });

    //non-functional print

    // for (let [town, products] of summary) {
    //     console.log(`Town - ${town}`);
    //     for (let [product, sales] of products) {
    //         console.log(`$$$${product} : ${sales}`);
    //     }
    // }
}
solve(['Sofia -> Laptops HP -> 200 : 2000', 'Sofia -> Raspberry -> 200000 : 1500', 'Sofia -> Audi Q7 -> 200 : 100000', 'Montana -> Portokals -> 200000 : 1', 'Montana -> Qgodas -> 20000 : 0.2', 'Montana -> Chereshas -> 1000 : 0.3']);
