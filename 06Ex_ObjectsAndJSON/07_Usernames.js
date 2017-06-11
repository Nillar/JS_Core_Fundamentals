function usernames(strArr) {
    let result = new Set();

    for (let obj of strArr) {
        result.add(obj);
    }

    [...result].sort((a, b) => {
        let length1 = a.length;
        let length2 = b.length;

        if(length1 > length2) {
            return 1;
        }
        if(length1 < length2){
            return -1;
        }
        if(a > b){
            return 1;
        }
        if(a < b){
            return -1;
        }
        return 0;
    }).forEach(e => console.log(e));
}

usernames(
    ['Ashton',
        'Kutcher',
        'Ariel',
        'Lilly',
        'Keyden',
        'Aizen',
        'Billy',
        'Braston']);