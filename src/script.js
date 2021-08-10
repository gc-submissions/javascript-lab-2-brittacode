"use strict";

// TODO - write your code here.

const randomDamage = () => {
    return Math.floor (Math.random()* 10 + 1);
}

function chooseOption(opt1,opt2)  {
    let randNum = Math.floor(( Math.random() *2 ));
    return (randNum === 0 ? opt1 : opt2);

}

const attackPlayer = function (health) {

    return health - randomDamage();
}
const logHealth = (player, health) => { 
    console.log (`${player} Health: ${health}`);

}
   
const logDeath = (winner, loser) => {
    console.log (`${winner} defeated ${loser}`);

}
const isDead = (health) => {
    return health <=o ? true : false();
}

function fight (player1, player2, player1Health, player2Health) {
     while (true)
        
        let attacker = chooseOption (player1, player2);
        if attacker ==== player1  



}