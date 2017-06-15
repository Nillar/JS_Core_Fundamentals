function build(strArr) {
    let startingWall = strArr.map(Number);
    let dailyConcrete = 0;
    let concreteUsed = [];
    let buildingComplete = false;
    let totalCost = 0;

    while(!buildingComplete){
        dailyConcrete = 0;
        buildingComplete = true;
        for (let i = 0; i < startingWall.length; i++) {
            if(startingWall[i] < 30){
                startingWall[i] += 1;
                dailyConcrete += 195;
                buildingComplete = false;
            }
        }
        if(!buildingComplete){
            concreteUsed.push(dailyConcrete);
        }
    }
    totalCost = concreteUsed.reduce((a, b) => a + b);

    console.log(concreteUsed.join(', '));
    console.log(totalCost * 1900 + ' pesos');
}

build(['21', '25', '28']);