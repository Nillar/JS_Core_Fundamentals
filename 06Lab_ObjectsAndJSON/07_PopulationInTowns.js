function populationCount(input) {
    let populationMap = new Map();
    for (let obj of input) {
        let [town, population] = obj.split(/\s*<->\s*/);
        population = Number(population);
        if(populationMap.has(town)){
            populationMap.set(town, populationMap.get(town) + population);
        }
        else {
            populationMap.set(town, population);
        }
    }

    for (let [town, population] of populationMap) {
        console.log(town + ' : ' + population);
    }
}

populationCount(['B<->20', 'A<->30', 'B<->5']);