function captureTheNumbers(string) {
    let pattern = /\d+/g;
    let result = [], match;

    for (let obj of string) {
        while(match = pattern.exec(obj)){
            result.push(match);
        }
    }
    console.log(result.join(' '));
}

captureTheNumbers(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);