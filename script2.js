let SpongeBob = {
    health: 100,
    damage: 10,
    balance: 100,
}
let Patrick = {
    health: 130,
    damage: 8,
    balance: 100,
}
let yourHero ={};
let yourpick 

function BobSelection(){
for(let key in SpongeBob){
    yourHero[key] = SpongeBob[key];
    }
    alert("Вы выбрали Губку!")
    yourpick = 1;
}

function PatrickSelection(){
    for(let key in Patrick){
        yourHero[key] = Patrick[key];
        }
        alert("Вы выбрали Патрика.");
        yourpick = 0;
    }
    let small_Jellyfish = {
        health: "200",
        damage: "8",
        balance: "200",
    
    }
    let medium_Jellyfish = {
        health: "50000",
        damage: "20",
        balance: "300",
    
    }
    let huge_Jellyfish = {
        health: "1000000000",
        damage: "30",
        balance: "400",
    
    }
    
    function information(){
        alert(`Ваш баланс: ${yourHero.balance},
    Ваше здоровье: ${yourHero.health},
    Ваш урон: ${yourHero.damage}`
        );
    }
    function shop(){
        let product = prompt("Выбери товар:1. Крабсбургер(х2 здоровье) 100 долларов  2. Лопатка(+15 к урону) 100 долларов");
    
    switch(product){
        case "1":
            if(yourHero.balance >= 100 && yourpick == 1){
                yourHero.balance -= 100;
                yourHero.health *= 2;
                alert(`Так держать, Квадратные штаны! Твое здоровье:${yourHero.health}`);
            }else if(yourHero.balance >= 100 && yourpick == 0){
                yourHero.balance -= 100;
                yourHero.health *= 2;
                alert(`Так держать, Патрик Стар! Твое здоровье:${yourHero.health}`);
            }else {
                alert("У тебя не хватает денег! На работу, салага!")
            }
            
            break;
        
        case "2":
            if(yourHero.balance >= 100 && yourpick == 1){
                yourHero.balance -= 100;
                yourHero.damage = +yourHero.damage + 15;
                alert(`Так держать, Губка Боб! Твой урон:${yourHero.damage}`);
            }else if(yourHero.balance >= 100 && yourpick == 0){
                yourHero.balance -= 100;
                yourHero.damage = +yourHero.damage + 15;
                alert(`Так держать, Патрик Стар! Твой урон:${yourHero.damage}`);
            }else {
                alert("У тебя не хватает денег! На работу, салага!")
            }
            break;
    }
    }
    function enemyInformation(){
        alert(` 
            Медуза тир S:
        Профит: ${small_Jellyfish.balance},
        Здоровье: ${small_Jellyfish.health},
        Урон: ${small_Jellyfish.damage}
            Медуза тир SS:
        Профит: ${medium_Jellyfish.balance},
        Здоровье: ${medium_Jellyfish.health},
        Урон: ${medium_Jellyfish.damage}
            Медуза тир SSS:
        Профит: ${huge_Jellyfish.balance},
        Здоровье: ${huge_Jellyfish.health},
        Урон: ${huge_Jellyfish.damage}`
            );
    }
    
    let fighter ={};
    let jelly ={};
    let NumberOfFightsWithSmallJelly = 0;
    let NumberOfFightsWithMediumJelly = 0;

    function battleWithSmallJelly(){
        if(NumberOfFightsWithSmallJelly<5){
            fight_small_Jellyfish()
        }else{
            alert("Вы достигли максимального количества сражений:5")
        }
    }
    function battleWithMediumJelly(){
        if(NumberOfFightsWithMediumJelly<5){
            fight_medium_Jellyfish()
        }else{
            alert("Вы достигли максимального количества сражений:5")
        }
    }
    function battleWithHugeJelly(){
        if(NumberOfFightsWithMediumJelly == 5 && NumberOfFightsWithSmallJelly == 5 ){
            fight_huge_Jellyfish()
        }else{
            alert("Вам нужно победить остальный медуз по 5 раз")
        }
    }


    function fight_small_Jellyfish(){
    NumberOfFightsWithSmallJelly += 1;
        
        for(let key in yourHero){
            fighter[key] = yourHero[key];
        }
    
        
        for(let key in small_Jellyfish){
            jelly[key] = small_Jellyfish[key];
        }
    
        for(var a = 0;fighter.health > 0 ; a++){
            fighter.health -= jelly.damage;
            
        }
    
    
    fighter.health = yourHero.health;
    jelly.health = small_Jellyfish.health;
    
    
        for(var b = 0;jelly.health > 0 ; b++){
             jelly.health -= fighter.damage ;
            
        }
    
        if(a > b){
            alert("Молодец! Ты поймал маленькую медузу!")
            yourHero.balance = +small_Jellyfish.balance + yourHero.balance;
            
            
        }else{
            alert("Ты проиграл! Будешь работать сверхурочно!")
            yourHero.health = 0;
            yourHero.damage = 0;
            yourHero.balance = 0;
        }
    }
    
    function fight_medium_Jellyfish(){
        NumberOfFightsWithMediumJelly += 1;
        
        for(let key in yourHero){
            fighter[key] = yourHero[key];
        }
        
    
       
        for(let key in medium_Jellyfish){
            jelly[key] = medium_Jellyfish[key];
        }
    
        for(var c = 0;fighter.health > 0 ; c++){
            fighter.health -= jelly.damage;
            
        }
    
    
    fighter.health = yourHero.health;
   jelly.health = medium_Jellyfish.health;
    
    
        for(var d = 0;jelly.health > 0 ; d++){
            jelly.health -= fighter.damage ;
            
        }
    
        if(c > d){
            alert("Молодец! Ты поймал среднюю медузу!")
            yourHero.balance = +medium_Jellyfish.balance + yourHero.balance;
            
        }else{
            alert("Ты проиграл! Будешь работать сверхурочно!")
            yourHero.health = 0;
            yourHero.damage = 0;
            yourHero.balance = 0;
        }
    }
    
    
    function fight_huge_Jellyfish(){
    
       
        for(let key in yourHero){
            fighter[key] = yourHero[key];
        }
    
       
        for(let key in huge_Jellyfish){
            jelly[key] = huge_Jellyfish[key];
        }
    
        for(var c = 0;fighter.health > 0 ; c++){
            fighter.health -= jelly.damage;
            
        }
    
    
    fighter.health = yourHero.health;
    jelly.health = huge_Jellyfish.health;
    
    
        for(var d = 0;jelly.health > 0 ; d++){
             jelly.health -= fighter.damage ;
            
        }
    
        if(c > d){
            alert("Молодец! Ты поймал большую медузу!")
            yourHero.balance = +huge_Jellyfish.balance + yourHero.balance;
            
        }else{
            alert("Ты проиграл! Будешь работать сверхурочно!")
            yourHero.health = 0;
            yourHero.damage = 0;
            yourHero.balance = 0;
        }
    }
    
    