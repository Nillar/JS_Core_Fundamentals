function draw(n) {
    let dollar ='';

    for (let i = 1; i <= n; i++) {
        dollar += `${'$'.repeat(i)}\n`;
    }
    console.log(dollar);
}
draw(4);