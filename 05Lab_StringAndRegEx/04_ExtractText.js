function extract(input) {
    let result = [];

    let openingParenthesis = input.indexOf('(');

    while (openingParenthesis > -1) {
        let closingParenthesis = input.indexOf(')', openingParenthesis);
        if (closingParenthesis === -1)
            break;
        let snippet = input.substring(openingParenthesis + 1, closingParenthesis);
        result.push(snippet);
        openingParenthesis = input.indexOf('(', closingParenthesis);
    }

    console.log(result.join(', '));

}
extract('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');