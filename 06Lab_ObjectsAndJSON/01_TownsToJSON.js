function townsToJSON(input) {
    let result = [];
    input.shift(input[0]);

    for (let obj of input) {
        let [empty, townName, latitude, longitude] = obj.split(/\s*\|\s*/);
        let townObj = { Town: townName, Latitude: Number(latitude), Longitude: Number(longitude)};
        result.push(townObj);
    }

    return JSON.stringify(result);

}

console.log(townsToJSON(['|Town|Lat|Lng|', '|Sofia |42|23|']));;