
// this is the second part of me understanding exporting and importing the Deck class into my app.js 
// importing the Deck class and adding the pathing of where the deck class came from which is from ./deck.js 
import Deck from "./deck.js";

const deck = new Deck()

deck.shuffle()
console.log(deck.cards)