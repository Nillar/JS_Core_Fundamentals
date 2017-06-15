function inventory(strArr) {
    let heroData = [];

    for (let i = 0; i < strArr.length; i++) {
        let heroArguments = strArr[i].split(' / ');

        let heroName = heroArguments[0];
        let heroLevel = Number(heroArguments[1]);
        let heroItems = [];

        if(heroArguments.length > 2){
            heroItems = heroArguments[2].split(', ');
        }
        let hero = {};
        hero['name'] = heroName;
        hero['level'] = heroLevel;
        hero['items'] = heroItems;


        heroData.push(hero);
    }

    console.log(JSON.stringify(heroData));
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);