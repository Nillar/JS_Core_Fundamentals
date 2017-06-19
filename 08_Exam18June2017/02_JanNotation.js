function solve(arr) {
    let input = [];
    let result = [];
    let sum = 0;
    let a = 0;
    let b = 0;
    let print = true;

    for (let obj of arr) {
        input.push(obj);
    }

    for (let i = 0; i < input.length; i++) {

        if (input[i] === '+') {
            if(result.length < 2){
                console.log('Error: not enough operands!');
                print = false;
                break;
            }
            sum = Number(result.pop()) + Number(result.pop());
            result.push(sum);
            sum = 0;
        }
        else if (input[i] === '-') {
            if(result.length < 2){
                console.log('Error: not enough operands!');
                print = false;
                break;
            }
            a = result.pop();
            b = result.pop();

            sum = Number(b) - Number(a);
            result.push(sum);
            sum = 0;
        }
        else if (input[i] === '*') {
            if(result.length < 2){
                console.log('Error: not enough operands!');
                print = false;
                break;
            }
            sum = Number(result.pop()) * Number(result.pop());
            result.push(sum);
            sum = 0;
        }
        else if (input[i] === '/') {
            if(result.length < 2){
                console.log('Error: not enough operands!');
                print = false;
                break;
            }
            a = result.pop();
            b = result.pop();
            sum = Number(b) / Number(a);
            result.push(sum);
            sum = 0;
        }
        else {
            result.push(Number(input[i]));
        }


    }
    if(result.length > 1){
        console.log('Error: too many operands!');
        print = false;
    }

    if(print === true){
        console.log(result[0]);
    }


}
solve([7,
    33,
    8,
    '-']

);