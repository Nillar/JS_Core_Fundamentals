function rotateArray(input) {
    let rotationsCount = Number(input.pop());

    for (let i = 0; i < rotationsCount % input.length; i++) {
        input.unshift(input.pop());
    }
    console.log(input.join(' '));
}

rotateArray(['Banana', 'Orange',
    'Coconut',
    'Apple',
    '15'
])