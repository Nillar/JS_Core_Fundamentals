function extractLinks(string) {
    let regex = /[w]{3}\.[a-zA-Z0-9-]+\.[a-z]+(\.[a-z]+)*/g;

    for (let obj of string) {
        let match = obj.match(regex);
        if (match !== null) {
            console.log(match.join('\n'));
        }
    }
}

extractLinks(['Join WebStars now for free, at www.web-stars.com', 'You can also support our partners:', 'Sentinel - www.sentinel.-ko', 'Internet - www.internet.com'])