function capitalize(string) {
    let initialArray = string.toLowerCase().split(' ');
    let result = [];

    for (let obj of initialArray) {
        result.push(obj[0].toUpperCase() + obj.substring(1, obj.length));
    }

    console.log(result.join(' '));
}

capitalize('Hey it iS Me');