function checkStart(string, check) {
    return check === string.substring(0, check.length);
}

console.log(checkStart('Marketing Fundamentals, starting 19/10/2016', 'Marketing f'));