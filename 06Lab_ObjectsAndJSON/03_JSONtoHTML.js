function fromJSONToHTMLTable(input) {
    let html = "<table>\n";
    let arr = JSON.parse(input);
    let keys = Object.keys(arr[0]);
    html +=' <tr>';
    for(let obj of Object.keys(arr[0])) {
        html += `<th>${htmlEscape(obj)}</th>`;
    }
    html += "</tr>\n";

    for (let obj of arr) {
        html+= `  <tr>`;
        for (let obj1 of keys) {
            html += `<td>`;
            let check = (obj[obj1]);
            if(/\d+/.test(check)){
                html += check;
            }
            else {
                html += htmlEscape(check);
            }
            html += '</td>';
        }
        html += '</tr>\n';
    }
    return html + "</table>";

    function htmlEscape(html) {
        html = html.replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

        return html;
    }
}

console.log(fromJSONToHTMLTable(['[{"X":5,"Y":7},{"X":2,"Y":4}]']));
