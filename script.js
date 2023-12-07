
class Deck {
constructor() {
    this.cards[];
}
buildDeck() {
    let Deck[];
    
    populate() { //defines suits, ranks, and values
        const suits = suits['Hearts', 'Clubs', 'Diamonds', 'Spades'];
        const ranks = ranks['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
        const values = values[1,2,3,4,5,6,7,8,9,10,11,12,13];
    // need two loops to lppo through all of the the suits and another to loop go through each of the ranks and values of the cards.
        for(let i = 0; i < suits.length; i++) { //first loop goes through the suits
            for(let j = 0; j < ranks.lenght && j < values.length; j++) { //inner loop starts with ranks and goes  through values
                let cards = {Values : values[j], Ranks : ranks[j], Suits : suits[i]};
                Deck.push(cards);
    
            }
        }
        return Deck;
}
}
shuffle(Deck) { // randomizes all of the elements of the this._cards array
    let m = Deck[];
    m = cards.sort(() => Math.random() - 0.5);
}
}

class Card {
    constructor(suit, rank, values) {
        this.cards = suit + rank + values;// this array holds the cards created in the Deck class
    }
}

class Player {
    constructor(name, cards, score) {
        this.name = name[player1[], player2[]];
        this.cards = cards[];
        this.score = score;
    }
}

class Dealer {
    constructor() {
        this.Player;
        this.Deck;
    }
start() {
    while () {

    }
createGame() {
    
    if (player1 instanceof Player) {
        this.player1.push(Player);
    }
    if (player2 instanceof Player) {
        this.player2.push(Player);
    }
    
    if (Deck instanceof Deck) {
        this.Deck.push(Deck);
    }
    let chunk = 26;
    let player1 = Deck.splice(0, chunk);
    let player2 = Deck.splice(0, chunk);
   
   //step 4: deal cards from each player until done
   let numOfTurns;
   let maxTurns = 26;
   while (player1.length > 0 && player2.length > 0 && numOfTurns < maxTurns) {
       if(player1.length)
   }
}
}
}
