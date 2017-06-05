function split(text, delimiter) {
    let result = [];

    text = text.split(`${delimiter}`);
    for (let i = 0; i < text.length; i++) {
        result.push(text[i]);
    }
    console.log(result.join('\n'));

}
split('One-Two-Three-Four-Five', '-');