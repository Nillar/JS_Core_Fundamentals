function spice(strArr) {
    let startingYield = strArr.map(Number);
    let spiceExtracted = 0;
    let days = 0;

    while (startingYield >= 100) {
        days++;
        spiceExtracted +=  startingYield - 26; //111 - 26 = 85
        startingYield -= 10;

    }

    if(spiceExtracted < 26){

    }
    else {
        spiceExtracted = spiceExtracted - 26;
    }


    console.log(days);
    console.log(spiceExtracted);
}

spice(['111']);