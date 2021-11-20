class Card {
    constructor(suit, value) {
        this.value = value;
        this.suit = suit;
    }    
}


class Deck {
    constructor(){
        this.deckArray = [];

        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];

        for (let suit in suits) {
            for (let value in values) {
                this.deckArray.push(`${values[value]} of ${suits[suit]}`);
            }
        }
        for (let i = this.deckArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = this.deckArray[i];
            this.deckArray[i] = this.deckArray[j];
            this.deckArray[j] = temp;          
        }
          
    }
 }
 



class Player {
    score = 0;
    hand = [];
    constructor(name, score) {
        this.name = name; 
        this.score = score; 
        this.hand = [];
        

    }

    incrementScore(){
        this.score += 1;
    }

    getScore(){
        return this.score;
    }
    

  dealCards(halfDeck) {
      for (let i = 0; i < 26; i++){
          this.hand.push(halfDeck[i]);
      }
  }
    
}
       
       


function playGame() {

    let deck = new Deck();
    console.log(deck); //Used to check if the deck is assigning card values properly, and shuffled correctly.
    let playerOne = new Player('Player 1', 0); // Creates a new player
    let playerTwo = new Player('Player 2', 0);


    playerOne.dealCards(deck.deckArray.slice(0, 26));
    playerTwo.dealCards(deck.deckArray.slice(26));
    
        for (let i = 0; i < playerOne.hand.length; i++){
                let firstPlayerCard = playerOne.hand[i].split(" ")[0];
                let secondPlayerCard = playerTwo.hand[i].split(" ")[0];

                if (firstPlayerCard === 'Jack') { //Assigns numeric value to the Jack, Queen, King, and Ace.
                    firstPlayerCard = 10;
                }

                if (secondPlayerCard === 'Jack') {
                    secondPlayerCard = 10;
                }

                if (firstPlayerCard === 'Queen') {
                    firstPlayerCard = 11;
                }

                if (secondPlayerCard === 'Queen') {
                    secondPlayerCard = 11;
                }

                if (firstPlayerCard === 'King') {
                    firstPlayerCard = 12;
                }

                if (secondPlayerCard === 'King') {
                    secondPlayerCard = 12;
                }

                if (firstPlayerCard === 'Ace') {
                    firstPlayerCard = 13;
                }

                if (secondPlayerCard === 'Ace') {
                    secondPlayerCard = 13;
                }

                if (Number(firstPlayerCard) > Number(secondPlayerCard)){
                    console.log(`${playerOne.hand[i]}  wins against ${playerTwo.hand[i]}`);
                    playerOne.incrementScore();
                    console.log(`The score is ${playerOne.getScore()} to ${playerTwo.getScore()} \n`);

                }else if(Number(firstPlayerCard) < Number(secondPlayerCard)){
                    console.log(`${playerTwo.hand[i]} wins against ${playerOne.hand[i]}`);
                    playerTwo.incrementScore();
                    console.log(`The score is ${playerOne.getScore()} to ${playerTwo.getScore()} \n`);

                }else{
                    console.log(`${playerTwo.hand[i]} is equal to ${playerOne.hand[i]}`);
                   console.log('It is a tie!');
                   console.log(`The score is ${playerOne.getScore()} to ${playerTwo.getScore()} \n`);
                }    
            }
            endOfGame(playerOne, playerTwo);

        }
    
    //Shows the results of the winner.
    function endOfGame(playerOne, playerTwo){
        if (playerOne.score > playerTwo.score) {
            console.log(`${playerOne.name} wins, congrats.`);
        }else if (playerTwo.score > playerOne.score) {
            console.log(`${playerTwo.name} wins, congrats.`)
        }else {
            console.log('It is a tie.');
        }
    }


playGame();



