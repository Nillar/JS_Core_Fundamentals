function validate(input) {
    let regex = /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+)+$/g;
    let result = regex.test(input);
    if(result == true){
        console.log('Valid');
    }
    else {
        console.log('Invalid');
    }
}

validate('valid@email.bg');