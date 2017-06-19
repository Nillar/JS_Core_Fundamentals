function solve(input) {
    input = input.split(/[ ><]/g);
    let html = `<article>\n`;
    let toPattern = 'to=\"([a-zA-Z\s*]+)\"';
    let regexTo = new RegExp(toPattern, 'g');
    let fromPattern = 'from=\"([a-zA-Z\s*]+)\"';
    let regexFrom = new RegExp(fromPattern, 'g');
    let messagePattern = '>([a-zA-Z0-9\s*,\'\.\!\?]+){1,}';
    let regexMessage = new RegExp(messagePattern, 'g');

    for (let obj of input) {
        let matchTo = regexTo.exec(obj);
        if(!matchTo){
            console.log("Invalid message format");
            break;
        }
    }


    // for (let i = 0; i < input.length; i++) {
    //     let matchTo = regexTo.exec(input[i]);
    //     let matchFrom = regexFrom.exec(input[i]);
    //     let matchMessage = regexMessage.exec(input[i]);
    //     if(i = 0){
    //         html += `<div>From: <span class="sender">${matchFrom}</span></div>\n`;
    //     }
    //     else if (i = 1){
    //         html += `div>To: <span class="recipient">${matchTo}</span></div>\n`;
    //     } else {
    //         html += `<div>\n`;
    //         html += `<p>`;
    //         if(input[i] !== '\n'){
    //             html += `${matchMessage} `;
    //         }
    //         else {
    //             html += `\n <p>${matchMessage}`
    //         }
    //         html += `</p>\n`;
    //         html += `</div>\n`;
    //     }
    //
    //
    // }

}
solve('<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what\'s up?</message>');