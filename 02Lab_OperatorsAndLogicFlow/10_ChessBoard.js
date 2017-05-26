function chessBoard(num) {
    let chess = '<div class="chessboard">\n';

    for(let i = 1; i <= num;i++){
        chess += ' <div>\n';
        for(let j = 1; j <= num;j++){
            let color = (j + i) % 2 != 0 ? 'white' : 'black';
            chess += `  <span class="${color}"></span>\n`;
        }
        chess += ' </div>\n';

    }
    chess += '</div>';
    document.write(chess);
    // console.log(chess);
}
// console.log(chessBoard(2));
chessBoard(3);