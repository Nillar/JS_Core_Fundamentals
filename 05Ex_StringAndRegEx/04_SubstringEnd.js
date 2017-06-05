function checkEnd(string, check) {
    return check === string.substr(-check.length);
}

console.log(checkEnd('This sentence ends with fun?', 'fun?'));