function htmlList(items) {
    return "<ul>\n" +
        items.map(htmlEscape).map(
            item => `  <li>${item}</li>`).join("\n") +
        "</ul>\n";
    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return console.log(text.replace(/[\"&'<>]/g, ch => map[ch]));
    }
}
htmlList(["<br>", "It's OK"]);
