//lets prectice Q2
// create a game where you start with ani rendom game number. Ask the user to keep guessing the game number until the user enters correct value.

let gameNum = 25;

let userNum = prompt("Guess the game number : ");

while(userNum != gameNum) {
   userNum = prompt("you enter wrong number. Guess agin : ");
}

console.log("congratulions, you entr thr right number");