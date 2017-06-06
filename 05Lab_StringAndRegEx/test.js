var str = '/abc/hellothere/andmore/';
var reg = new RegExp('/abc/[^/]*/');
var matches = str.match(reg);

if (matches && matches.length) {
    console.log(matches[0].length);
}