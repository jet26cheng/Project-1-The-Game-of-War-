
// this is the second part of me understanding exporting and importing the Deck class into my app.js 
// importing the Deck class and adding the pathing of where the deck class came from which is from ./deck.js 
import Deck from "./deck.js";


const name1Button = document.getElementById("name1Input");
const name1Text = document.getElementById("nameSpace");
//  const nameSpace = document.querySelector (#nameSpace);
function name1() {
    nameSpace1.innerHTML = nameSpace1
}
name1Button.addEventListener("click", function(e) {
    const nameP1 = prompt("Player 1 Name ?")

    document.getElementById("nameSpace1").innerHTML = nameP1;
    
});

const name2Button = document.getElementById("name2Input");
const name2Text = document.getElementById("nameSpace");
//  const nameSpace = document.querySelector (#nameSpace);
function name2() {
    nameSpace2.innerHTML = nameSpace2
}
name2Button.addEventListener("click", function(e) {
    const nameP2 = prompt("Player 2 Name ?")

    document.getElementById("nameSpace2").innerHTML = nameP2;
    startGame();
    
}
);






















// So I made this Cad_Value_Map so I can give a proper Value on my J,Q,K,A since they do not have a value assign to them yet
const Card_Value_Map = {
    "2" : 2,
    "3" : 3,
    "4" : 4,
    "5" : 5,
    "6" : 6,
    "7" : 7,
    "8" : 8,
    "9" : 9,
    "10" : 10,
     J : 11,
     Q : 12,
     K : 13,
     A : 14,
}






const player2CardSlot = document.querySelector(".player-2-card-slot")
const player2DeckEle = document.querySelector(".player-2-deck")
const player1CardSlot = document.querySelector(".player-1-card-slot")
const player1DeckEle = document.querySelector(".player-1-deck")

const result = document.querySelector(".result-box")

let player1Deck, player2Deck

let inRound = false
// i am currently adding the event listener for when my game plays. basically it is saying when ever a round is being played 
//it will clean the field. but at the same time that it does that I will have a flip card function so i can flip the card to start
// the round of play. 
// document.addEventListener('click', () => {
//     if (inRound) {
//         cleanBeforeRound()
//     } else {
//         flipCards()
//     }
// })


// This is making the start point of the game that i created.  
// startGame()
function startGame() {
    const deck = new Deck()
    deck.shuffle()

    // So I need 2 decks in this game
    //cut the deck in half
    // I added Math.ceil just in case if it there is a problem with the deck that maybe it loads out not 52 
    // I am just dividing the current deck into  2 seperate decks 
    const deckMidPoint = Math.ceil(deck.numberOfCards / 2)

    console.log(deckMidPoint)
    player1Deck = new Deck(deck.cards.slice(0, deckMidPoint))
    player2Deck = new Deck(deck.cards.slice(deckMidPoint, deck.numberOfCards))
    inRound = false
    // console.log(player1Deck)
    // console.log(player2Deck)
    cleanBeforeRound()
    
    // i am currently adding the event listener for when my game plays. basically it is saying when ever a round is being played 
//it will clean the field. but at the same time that it does that I will have a flip card function so i can flip the card to start
// the round of play. 
document.addEventListener('click', () => {
    if (inRound) {
        cleanBeforeRound()
    } else {
        flipCards()
    }
})
    // this was testing to see if the card was rendering on the field correctly 
    // player2CardSlot.appendChild(deck.cards[0].getHTML())
}

   function cleanBeforeRound() {
        inRound = false
        player2CardSlot.innerHTML = ''
        player1CardSlot.innerHTML = ''
        result.innerText = ''

        updateDeckCount()
    }

    function flipCards() {
        inRound = true
        
        const player1Card = player1Deck.pop()
        const player2Card = player2Deck.pop()

        player1CardSlot.appendChild(player1Card.getHTML())
        player2CardSlot.appendChild(player2Card.getHTML())

        updateDeckCount()

        if (isTheWinner1(player1Card, player2Card)) {
            result.innerHTML = "Wins!"
            player1Deck.push(player1Card)
            player1Deck.push(player2Card)
        } else if (isTheWinner2(player1Card, player2Card)) {
            result.innerText = "Win"
            player2Deck.push(player1Card)
            player2Deck.push(player2Card)
        } else {
            result.innerText = "Tie"
            player1Deck.push(player1Card)
            player2Deck.push(player2Card)
        }

        if (isGameOver1(player1Deck)) {

        }
    }
   function updateDeckCount() {
        player2DeckEle.innerText = player2Deck.numberOfCards
        player1DeckEle.innerText = player1Deck.numberOfCards

        console.log(player2Deck)
    }

    function isTheWinner1(cardOne, cardTwo) {
        return Card_Value_Map[cardOne.value] > Card_Value_Map[cardTwo.value]
    }

    function isTheWinner2(cardOne, cardTwo) {
        return Card_Value_Map[cardOne.value] < Card_Value_Map[cardTwo.value]
    }

    function isGameOver1(player1Deck) {
        return player1Deck.numberOfCards === 0 
    }

    function isGameOver2(player2Deck) {
        return player2Deck.numberOfCards === 0 
    }
// console.log(deck.cards)


// so here i didn't really understand why my card was not showing up onto the game board so i had to ask my brother (software engineer)
// how to get my card to appear and he reccomend me to use .appendChild. 
// so i am not familiar with .appendChild but after researching i found out the .appendChild is moving a child from its current position to
//a new position in this case I am getting a card from my path deck.cards[0].getHTML() and placing it into my player2CardSlot which I just created 
// what this does is give me a random card from the deck i made since i have the shuffle function! 
// link -https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
//   player2CardSlot.appendChild(deck.cards[0].getHTML())