function moviePrice(arr) {
    let movieName = arr[0].toLowerCase();
    let day = arr[1].toLowerCase();
    let price = 0;

    switch(movieName){
        case 'the godfather':
            switch (day){
                case 'monday': price = 12;
                    break;
                case 'tuesday': price = 10;
                    break;
                case 'wednesday': price = 15;
                    break;
                case 'thursday': price = 12.50;
                    break;
                case 'friday': price = 15;
                    break;
                case 'saturday': price = 25;
                    break;
                case 'sunday': price = 30;
                    break;
            }
            break;
        case 'schindler\'s list':
            switch (day){
                case 'monday': price = 8.50;
                    break;
                case 'tuesday': price = 8.50;
                    break;
                case 'wednesday': price = 8.50;
                    break;
                case 'thursday': price = 8.50;
                    break;
                case 'friday': price = 8.50;
                    break;
                case 'saturday': price = 15;
                    break;
                case 'sunday': price = 15;
                    break;
            }
            break;
        case 'casablanca':
            switch (day){
                case 'monday': price = 8;
                    break;
                case 'tuesday': price = 8;
                    break;
                case 'wednesday': price = 8;
                    break;
                case 'thursday': price = 8;
                    break;
                case 'friday': price = 8;
                    break;
                case 'saturday': price = 10;
                    break;
                case 'sunday': price = 10;
                    break;
            }
            break;
        case 'the wizard of oz':
            switch (day){
                case 'monday': price = 10;
                    break;
                case 'tuesday': price = 10;
                    break;
                case 'wednesday': price = 10;
                    break;
                case 'thursday': price = 10;
                    break;
                case 'friday': price = 10;
                    break;
                case 'saturday': price = 15;
                    break;
                case 'sunday': price = 15;
                    break;
            }

            break;
    }

    if(price === 0){
        console.log('error');
    }
    else {
        console.log(price);
    }

}

moviePrice(['The Godfather', 'monday']);