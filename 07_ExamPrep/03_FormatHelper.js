function format(strArr) {
    let text = strArr[0];
    text = text.replace(/([.,!?:;])\s*/g, (match) => match.trim() + ' ');
    text = text.replace(/\s*[.,!?:;]/g, (match) => match.trim());
    text = text.replace(/\.\s*.\s*.!/g, '...!');
    text = text.replace(/(\.\s*)([0-9]+)/g, (match, group1, group2) => group1.trim() + group2);
    text = text.replace(/"([^"]+)"/g, (match, group1) => `"${group1.trim()}"`);
    console.log(text);
}
format(['Terribly formatted text .     With chaotic spacings." Terrible quoting "! Also this date is pretty confusing : 20 . 12. 16 .'])