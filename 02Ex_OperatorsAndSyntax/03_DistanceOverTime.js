function solve([objOneSpeed, objTwoSpeed, time]) {
    let objOneDistance = (objOneSpeed * time) / 3600 * 1000;
    let objTwoDistance = (objTwoSpeed * time) / 3600 * 1000;

    let result = Math.abs(objOneDistance - objTwoDistance);

    console.log(result);
}

solve([0, 60, 3600]);