function getInfraction(input) {
    let speed = input[0];
    let area = input[1];
    let overSpeed = speed - getSpeedLimit(area);

    if (overSpeed <= 0) {

    }
    else {
        if (overSpeed <= 20) {
            console.log('speeding');
        }
        else if( overSpeed <= 40) {
            console.log('excessive speeding');
        }
        else {
            console.log('reckless driving');
        }
    }
    function getSpeedLimit(area) {
        switch (area) {
            case 'city':
                return 50;
            case 'motorway':
                return 130;
            case 'interstate':
                return 90;
            case 'residential':
                return 20;
        }
    }
}
getInfraction([40, 'city']);