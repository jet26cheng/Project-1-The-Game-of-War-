

// the const SUITS is capitalized so I know that its a global constant variable
//luckily i was able to find the suit symbols through this link and copy and paste them in! https://www.w3schools.com/charsets/ref_html_symbols.asp
const SUITS = [ "♠", "♣", "♥", "♦"]
// the const VALUE is capitalized also for the same reason as SUITS. So i know that its a global constant variable 
const VALUES = ["2","3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

// so i never used export before. My brother (current software engineer) had the idea of me using this syntax and after doing some research 
// exporting can move live objects, functions, or primitive values so they can be used by another program with the import declaration. In this current case i'm moving my deck Class into my app.js  
// research link on export = https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
export default class Deck {
    constructor(cards = freshDeck()) {
       
        this.cards = cards
        
    }

    get numberOfCards() {
        return this.cards.length
    }
    // this pop function is to help me flip/reveal the first card from the deck. i am using .shift because i want to be able to take the top card which is the first element in the array which shrift does.   
    pop() {
        return this.cards.shift()
    }
    // this push function is so i can add the cards back into the deck 
    push(card) {
        this.cards.push(card)
    }
    // this is the shuffle function that I made 
    shuffle() {
            // writing this for loop out I wrote it so we are getting the last card of the deck to the front of the deck  
        for (let i = this.cards.length - 1; i > 0; i--) {
           // line 24 I wrote so I can gett a new index for the card I want to flip that would be a random index before the current index because we are starting from the last card to the front  
           // so i am making a new index position for the card with math.random() * (i + 1)
            const newIndex = Math.floor(Math.random() * (i + 1)) // Math.random does not need anythinng in ()
            const oldValue = this.cards[newIndex]                // (i + 1) = 51 + 1 from i loop
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }

    } 
}

class Card {
    constructor(suit, value) {
        this.suit = suit 
        this.value = value 
    }
    // right here i am writing a function to be able to change the color of the card based on the suit as Hearts and diamonds are red 
    // and spades and clubs are black. 
    get color () {
        return this.suit === "♣" || this.suit === "♠" ? 'black' : 'red'
    }

   
    
   
    // what i am making is, i need to make a function so i can get the value and attributes of the card to appear accordingly
    
    getHTML () {
        const cardDiv = document.createElement('div')
        cardDiv.innerText = this.suit
        cardDiv.classList.add("card", this.color)
        cardDiv.dataset.value = `${this.value} ${this.suit}`
        return cardDiv
         }
} 



// the function freshDeck is so I can make a 52 card deck going from 2-A in each respected suit 
// i want to loop through the suits and loop through all the values and conbine them together to make the cards in one array  
function freshDeck() {
    let newCards = []
    
    // this for loop function with the help of Deja is looping through the SUITS array length and looping through the VALUES array length 
    // from there we are pushing this Card class with the SUITS[i] and VALUES [j] into the newCards array in our let statement 
    for (let i = 0; i < SUITS.length; i++) {
        for (let j = 0; j < VALUES.length; j++) {
           // console.log(SUITS[i], VALUES[j])
            newCards.push(new Card(SUITS[i], VALUES[j]))
        }

    }
    console.log(newCards)
    // this return statement is 
    return newCards
}
   
