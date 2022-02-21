import React from 'react'
import ReactDOM from 'react-dom'
import traditionalCardDeck from './components/Deck'
import { useState } from 'react'
console.log(traditionalCardDeck)


const randomize = (deckOfCards, n) =>
{
    const shuffle = []
    const pastJs = []
	for (let i = n - 1; i > 0; i--)
	{   
        
		let j = Math.floor(Math.random() * (i + 1));
        for (let idx = 0; idx < pastJs.length; idx++) {
            
            while (j === pastJs[idx]){
                j = Math.floor(Math.random() * (i + 1));
            }
            pastJs.push(j);
        }

        
        [deckOfCards[i], deckOfCards[j]] = [deckOfCards[j], deckOfCards[i]];
        if (deckOfCards[i] === undefined){
            i++
            continue
        }
        else{shuffle.push(deckOfCards[i])}
        
	}
    return shuffle
}


const makeDeck = () => {
    const initialDeck = []
    for (let index = 0; index < 53; index++){
        initialDeck.push(index)
    }
    return initialDeck
}
const firstDeck = makeDeck()
const n = firstDeck.length + 1;
const deck = randomize (firstDeck, n);
// console.log(deck)
const cardsArr = []
const Main = ({deck, traditionalCardDeck}) => {
    // deck.forEach( (idx, element) => {
    //     push.cardsArr(deck[idx])
    // });

    // const card1 = deck[0]
    const card2 = deck[1]
    const card3 = deck[2]
    const card4 = deck[3]
    const card5 = deck[4]
    const card6 = deck[5]
    const card7 = deck[6]
    const card8 = deck[7]
    const card9 = deck[8]
    const card10 = deck[9]
    const card11 = deck[10]
    const card12 = deck[11]
    const card13 = deck[12]
    const card14 = deck[13]
    const card15 = deck[14]
    const card16 = deck[15]
    const card17 = deck[16]
    const card18 = deck[17]
    const card19 = deck[18]
    const card20 = deck[19]
    const card21 = deck[20]
    const card22 = deck[21]
    const card23 = deck[22]
    const card24 = deck[23]
    const card25 = deck[24]
    const card26 = deck[25]
    const card27 = deck[26]
    const card28 = deck[27]
    const card29 = deck[28]
    const card30 = deck[29]
    const card31 = deck[30]
    const card32 = deck[31]
    const card33 = deck[32]
    const card34 = deck[33]
    const card35 = deck[34]
    const card36 = deck[35]
    const card37 = deck[36]
    const card38 = deck[37]
    const card39 = deck[38]
    const card40 = deck[39]
    const card41 = deck[40]
    const card42 = deck[41]
    const card43 = deck[42]
    const card44 = deck[43]
    const card45 = deck[44]
    const card46 = deck[45]
    const card47 = deck[46]
    const card48 = deck[47]
    const card49 = deck[48]
    const card50 = deck[49]
    const card51 = deck[50]
    const card52 = deck[51]
    const card53 = deck[52]
    return (<>
    <h1>PaiGow Poker</h1>

    <h2>Player 1</h2>
    <div className="hand">
    <span className="card">{traditionalCardDeck[deck[0]]} {traditionalCardDeck[deck[0]]}</span>
    <span className="card">{traditionalCardDeck[card2]} {traditionalCardDeck[card2]}</span>
    <span className="card">{traditionalCardDeck[card3]} {traditionalCardDeck[card3]}</span>
    <span className="card">{traditionalCardDeck[card4]} {traditionalCardDeck[card4]}</span>
    <span className="card">{traditionalCardDeck[card5]} {traditionalCardDeck[card5]}</span>
    <span className="card">{traditionalCardDeck[card6]} {traditionalCardDeck[card6]}</span>
    <span className="card">{traditionalCardDeck[card7]} {traditionalCardDeck[card7]}</span>
    </div>

    <h2>Player 2</h2>
    <div className="hand">
    <span className="card">{traditionalCardDeck[card8]} {traditionalCardDeck[card8]}</span>
    <span className="card">{traditionalCardDeck[card9]} {traditionalCardDeck[card9]}</span>
    <span className="card">{traditionalCardDeck[card10]} {traditionalCardDeck[card10]}</span>
    <span className="card">{traditionalCardDeck[card11]} {traditionalCardDeck[card11]}</span>
    <span className="card">{traditionalCardDeck[card12]} {traditionalCardDeck[card12]}</span>
    <span className="card">{traditionalCardDeck[card13]} {traditionalCardDeck[card13]}</span>
    <span className="card">{traditionalCardDeck[card14]} {traditionalCardDeck[card14]}</span>
    </div>

    <h2>Player 3</h2>
    <div className="hand">
    <span className="card">{traditionalCardDeck[card15]} {traditionalCardDeck[card15]}</span>
    <span className="card">{traditionalCardDeck[card16]} {traditionalCardDeck[card16]}</span>
    <span className="card">{traditionalCardDeck[card17]} {traditionalCardDeck[card17]}</span>
    <span className="card">{traditionalCardDeck[card18]} {traditionalCardDeck[card18]}</span>
    <span className="card">{traditionalCardDeck[card19]} {traditionalCardDeck[card19]}</span>
    <span className="card">{traditionalCardDeck[card20]} {traditionalCardDeck[card20]}</span>
    <span className="card">{traditionalCardDeck[card21]} {traditionalCardDeck[card21]}</span>
    </div>

    <h2>Player 4 </h2>
    <div className="hand">
    <span className="card">{traditionalCardDeck[card22]} {traditionalCardDeck[card22]}</span>
    <span className="card">{traditionalCardDeck[card23]} {traditionalCardDeck[card23]}</span>
    <span className="card">{traditionalCardDeck[card24]} {traditionalCardDeck[card24]}</span>
    <span className="card">{traditionalCardDeck[card25]} {traditionalCardDeck[card25]}</span>
    <span className="card">{traditionalCardDeck[card26]} {traditionalCardDeck[card26]}</span>
    <span className="card">{traditionalCardDeck[card27]} {traditionalCardDeck[card27]}</span>
    <span className="card">{traditionalCardDeck[card28]} {traditionalCardDeck[card28]}</span>
    </div>

    <h2>Player 5 </h2>
    <div className="hand">
    <span className="card">{traditionalCardDeck[card29]} {traditionalCardDeck[card29]}</span>
    <span className="card">{traditionalCardDeck[card30]} {traditionalCardDeck[card30]}</span>
    <span className="card">{traditionalCardDeck[card31]} {traditionalCardDeck[card31]}</span>
    <span className="card">{traditionalCardDeck[card32]} {traditionalCardDeck[card32]}</span>
    <span className="card">{traditionalCardDeck[card33]} {traditionalCardDeck[card33]}</span>
    <span className="card">{traditionalCardDeck[card34]} {traditionalCardDeck[card34]}</span>
    <span className="card">{traditionalCardDeck[card35]} {traditionalCardDeck[card35]}</span>
    </div>

    <h2>Player 6 </h2>
    <div className="hand">
    <span className="card">{traditionalCardDeck[card36]} {traditionalCardDeck[card36]}</span>
    <span className="card">{traditionalCardDeck[card37]} {traditionalCardDeck[card37]}</span>
    <span className="card">{traditionalCardDeck[card38]} {traditionalCardDeck[card38]}</span>
    <span className="card">{traditionalCardDeck[card39]} {traditionalCardDeck[card39]}</span>
    <span className="card">{traditionalCardDeck[card40]} {traditionalCardDeck[card40]}</span>
    <span className="card">{traditionalCardDeck[card41]} {traditionalCardDeck[card41]}</span>
    <span className="card">{traditionalCardDeck[card42]} {traditionalCardDeck[card42]}</span>
    </div>

    <h2>Player 7 </h2>
    <div className="hand">
        <span className="card">{traditionalCardDeck[card43]} {traditionalCardDeck[card43]}</span>
        <span className="card">{traditionalCardDeck[card44]} {traditionalCardDeck[card44]}</span>
        <span className="card">{traditionalCardDeck[card45]} {traditionalCardDeck[card45]}</span>
        <span className="card">{traditionalCardDeck[card46]} {traditionalCardDeck[card46]}</span>
        <span className="card">{traditionalCardDeck[card47]} {traditionalCardDeck[card47]}</span>
        <span className="card">{traditionalCardDeck[card48]} {traditionalCardDeck[card48]}</span>
        <span className="card">{traditionalCardDeck[card49]} {traditionalCardDeck[card49]}</span>
    </div>

    <h1>Burned Cards:</h1>
    <div className="hand">
    <span className="card">{traditionalCardDeck[card50]} {traditionalCardDeck[card50]}</span>
    <span className="card">{traditionalCardDeck[card51]} {traditionalCardDeck[card51]}</span>
    <span className="card">{traditionalCardDeck[card52]} {traditionalCardDeck[card52]}</span>
    <span className="card">{traditionalCardDeck[card53]} {traditionalCardDeck[card53]}</span>
    </div>

    <h1>Thanks for checking ;)</h1>
    </>)
}

ReactDOM.render(
      <Main deck={deck} traditionalCardDeck={traditionalCardDeck}/>,
    document.getElementById('app')
  )