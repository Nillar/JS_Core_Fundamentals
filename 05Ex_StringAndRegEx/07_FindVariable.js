function findVariable(string) {
    let pattern = /\b(_)([A-Za-z0-9]+)\b/g;  // /\b([_]{1})([a-zA-Z0-9]+)\b/g;
    let result = [];
    let array = string.match(pattern);

    for (let i = 0; i < array.length; i++) {
        result.push(array[i].substring(1, array[i].length));
    }
    console.log(result.join(','));
}

findVariable('__invalidVariable _evenMoreInvalidVariable_ _validVariable');