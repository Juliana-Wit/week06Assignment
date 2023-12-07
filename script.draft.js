//War Game


class Card {// Card class is to create the playing cards for each player
    constructor(suit, rank, values) {
        this.cards = [suit, rank, values];// this array holds the cards created in the Deck class
    }
}

const suits = suits['Hearts', 'Clubs', 'Diamonds', 'Spades'];
const ranks = ranks['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
const values = values[1,2,3,4,5,6,7,8,9,10,11,12,13];

class Deck { // includes constructor to create each card and pushes the cards to the this._cards array
constructor() {
    this.cards = [];
}

populate() { //defines suits, ranks, and values
    
// need two loops to lppo through all of the the suits and another to loop go through each of the ranks and values of the cards.
    for(let i = 0; i < suits.length; i++) { //first loop goes through the suits
        for(let j = 0; j < ranks.lenght && j < values.length; j++) { //inner loop starts with ranks and goes  through values
            let card = {Values : values[j], Ranks : ranks[j], Suits : suits[i]};
            Deck.push(cards);

        }
    }
    return Deck;
}
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

class Player {
    constructor(name, cards, score) {
        this.name = Player[];
        this.cards = cards[];
        this.score = score == 0;
    }
}

class GameMaster {
Player = Player[];
Deck = this.cards;

}

getCards() {}//NOTE - ???



shuffle(Deck) { // randomizes all of the elements of the this._cards array
let m = Deck[];
m = cards.sort(() => Math.random() - 0.5);

}
}



start() {
    while () { // loop for user to start the game

    

createGame() {
//step 1: create 2 instances of Player
if (player1 instanceof Player) {
    this.player1.push(Player);
}

if (player2 instanceof Player) {
    this.player2.unshift(Player);
}
//step 2: create 1 instance of Deck and populate
if (Deck instanceof Deck) {
    this.Deck.push(Deck);
}
//step 3: assign 26 cards to each Player
let chunk = 26;
 let player1 = Card.splice(0, chunk);
 let player2 = Card.splice(0, chunk);

//step 4: deal cards from each player until done
for(let i = 0; i < player1.length && i < player2.length; i++) {
    
}

//step 5: display the winer
//NOTE - Be mindfull of the order in which code needs to be run.
}
    }
}
}


