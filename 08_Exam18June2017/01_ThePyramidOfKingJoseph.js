function solve(base, increment) {
    let gold = 0;
    let stone = 0;
    let lapis = 0;
    let marble = 0;
    let steps = 0;
    let lapisStepsDecoration = 0;

    if(base <= 0 || increment <= 0){

    }
    else{
        for (let i = base; i >= 0; i -= 2) {
            steps++;
            lapisStepsDecoration++;
            let stoneNeeded = i - 2;

            if(i === 1 || i === 2){
                gold = i * i * increment;
                break;
            }
            else {
                if(lapisStepsDecoration % 5 === 0) {
                    stone += stoneNeeded * stoneNeeded * increment;
                    lapis += ((i * 2) + (i * 2) - 4) * increment;
                }
                else {
                    stone += stoneNeeded * stoneNeeded * increment;
                    marble += ((i * 2) + (i * 2) - 4) * increment;
                }
            }
        }

        lapis = Math.ceil(lapis); // * increment?;
        gold = Math.ceil(gold);
        marble = Math.ceil(marble);
        stone = Math.ceil(stone); // * increment?
        steps = Math.floor(steps * increment);

        console.log(`Stone required: ${stone}`);
        console.log(`Marble required: ${marble}`);
        console.log(`Lapis Lazuli required: ${lapis}`);
        console.log(`Gold required: ${gold}`);
        console.log(`Final pyramid height: ${steps}`);
    }
}
solve(11, 0.05);