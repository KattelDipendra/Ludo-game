'use strict';


const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
const score0El=document.querySelector('#score--0');
const score1El=document.querySelector('#score--1');
const current0El=document.querySelector('#current--0');
const current1El=document.querySelector('#current--1');
const diceEL=document.querySelector('.dice');
const btnnew=document.querySelector('.btn--new');
const btnroll=document.querySelector('.btn--roll');
const btnhold=document.querySelector('.btn--hold');

// initially game start hunu vanda agadi, player 1 ara 2 ko score 0 banayera , dice gayab hunu paryo(hide)
score0El.textContent=0;
score1El.textContent=0;
diceEL.classList.add('hidden');

const scores=[0,0];
let currentScore=0;
let activePlayer=0;


//game is ready in starting phase now 



//  1st do rolling a dice by clicking button roll dice
btnroll.addEventListener('click',function(){

// 2nd generate random dice numbers after 1 i.e eventHandler
const dice=Math.trunc(Math.random()*6)+1;


//display dice 
diceEL.classList.remove('hidden')

//display image of random no selected
diceEL.src=`dice-${dice}.png `;

// 3rd check for rolled 1 , if 1 then switch to next player
if(dice!==1){
    //add dice to current score
    currentScore=currentScore+dice;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;

}else{
    //switch to next player
    
    //current score 0 hunu paryo switch vayepaxi
    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore=0;
  
    
    //if active player is 0 then switch to 1 , if active player is 1 then switch to 0 
    activePlayer=activePlayer===0?1:0;
   
    //backgroiund switch vayeko jasto color banaune turn switch vayepaxi 
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');


}
})
