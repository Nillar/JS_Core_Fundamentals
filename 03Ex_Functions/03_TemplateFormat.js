function templateFormat(input) {
    let question = input[0];
    let answer = input[1];
    let html = '<?xml version="1.0" encoding="UTF-8"?>\n' + `<quiz>\n`;

    for (let i = 0; i < input.length; i++) {
        if(i % 2 === 0){
            html+= `    <question>\n` + `       ${input[i]}\n` + `    </question>\n`;
        }
        else {
            html+= `    <answer>\n` + `       ${input[i]}\n` + `    </answer>\n`;
        }
    }

    html += '</quiz>';

    console.log(html);
}

templateFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
);

