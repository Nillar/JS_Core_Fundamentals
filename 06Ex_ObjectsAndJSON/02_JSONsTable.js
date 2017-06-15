function table(strArr) {
    let html = `<table>\n`;


    for (let obj of strArr) {
        let input = JSON.parse(obj);
        html +=`    <tr>\n`;
        html += '        <td>';
        html += input['name'];

        html += '</td>\n';
        html += '        <td>';
        html += input['position'];
        html += '</td>\n';

        html += '	    <td>';
        html += input['salary'];
        html += '</td>\n';

        html += '   <tr>\n';

    }
    html +=`</table>`;

    console.log(html);
}

table([
   '{"name":"Pesho","position":"Promenliva","salary":100000}',
   '{"name":"Teo","position":"Lecturer","salary":1000}',
   '{"name":"Georgi","position":"Lecturer","salary":1000}'

])