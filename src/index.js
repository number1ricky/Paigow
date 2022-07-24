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

    const card1 = deck[0]
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

    return (
    <div className='main'>
    <h1>PaiGow Poker</h1>

    <h2>Player 1</h2>
    <div className="hand">
    <div className="card">
        <div className='symbol'>{traditionalCardDeck[card1]}</div>
        <div className='symbol'>{traditionalCardDeck[card1]}</div>
    </div>
    <div className="card">
        <div className='symbol'>{traditionalCardDeck[card2]}</div>
        <div className='symbol'>{traditionalCardDeck[card2]}</div>
    </div>
    <div className="card">
        <div className='symbol'>{traditionalCardDeck[card3]}</div>
        <div className='symbol'>{traditionalCardDeck[card3]}</div>
    </div>
    <div className="card">
        <div className='symbol'>{traditionalCardDeck[card4]}</div>
        <div className='symbol'>{traditionalCardDeck[card4]}</div>
    </div>
    <div className="card">
        <div className='symbol'>{traditionalCardDeck[card5]}</div>
        <div className='symbol'>{traditionalCardDeck[card5]}</div>
    </div>
    <div className="card">
        <div className='symbol'>{traditionalCardDeck[card6]}</div>
        <div className='symbol'>{traditionalCardDeck[card6]}</div>
    </div>
    <div className="card">
        <div className='symbol'>{traditionalCardDeck[card7]}</div>
        <div className='symbol'>{traditionalCardDeck[card7]}</div>
    </div>
    </div>

    <h2>Player 2</h2>
    <div className="hand">
    <div className="card">{traditionalCardDeck[card8]} {traditionalCardDeck[card8]}</div>
    <div className="card">{traditionalCardDeck[card9]} {traditionalCardDeck[card9]}</div>
    <div className="card">{traditionalCardDeck[card10]} {traditionalCardDeck[card10]}</div>
    <div className="card">{traditionalCardDeck[card11]} {traditionalCardDeck[card11]}</div>
    <div className="card">{traditionalCardDeck[card12]} {traditionalCardDeck[card12]}</div>
    <div className="card">{traditionalCardDeck[card13]} {traditionalCardDeck[card13]}</div>
    <div className="card">{traditionalCardDeck[card14]} {traditionalCardDeck[card14]}</div>
    </div>

    <h2>Player 3</h2>
    <div className="hand">
    <div className="card">{traditionalCardDeck[card15]} {traditionalCardDeck[card15]}</div>
    <div className="card">{traditionalCardDeck[card16]} {traditionalCardDeck[card16]}</div>
    <div className="card">{traditionalCardDeck[card17]} {traditionalCardDeck[card17]}</div>
    <div className="card">{traditionalCardDeck[card18]} {traditionalCardDeck[card18]}</div>
    <div className="card">{traditionalCardDeck[card19]} {traditionalCardDeck[card19]}</div>
    <div className="card">{traditionalCardDeck[card20]} {traditionalCardDeck[card20]}</div>
    <div className="card">{traditionalCardDeck[card21]} {traditionalCardDeck[card21]}</div>
    </div>

    <h2>Player 4 </h2>
    <div className="hand">
    <div className="card">{traditionalCardDeck[card22]} {traditionalCardDeck[card22]}</div>
    <div className="card">{traditionalCardDeck[card23]} {traditionalCardDeck[card23]}</div>
    <div className="card">{traditionalCardDeck[card24]} {traditionalCardDeck[card24]}</div>
    <div className="card">{traditionalCardDeck[card25]} {traditionalCardDeck[card25]}</div>
    <div className="card">{traditionalCardDeck[card26]} {traditionalCardDeck[card26]}</div>
    <div className="card">{traditionalCardDeck[card27]} {traditionalCardDeck[card27]}</div>
    <div className="card">{traditionalCardDeck[card28]} {traditionalCardDeck[card28]}</div>
    </div>

    <h2>Player 5 </h2>
    <div className="hand">
    <div className="card">{traditionalCardDeck[card29]} {traditionalCardDeck[card29]}</div>
    <div className="card">{traditionalCardDeck[card30]} {traditionalCardDeck[card30]}</div>
    <div className="card">{traditionalCardDeck[card31]} {traditionalCardDeck[card31]}</div>
    <div className="card">{traditionalCardDeck[card32]} {traditionalCardDeck[card32]}</div>
    <div className="card">{traditionalCardDeck[card33]} {traditionalCardDeck[card33]}</div>
    <div className="card">{traditionalCardDeck[card34]} {traditionalCardDeck[card34]}</div>
    <div className="card">{traditionalCardDeck[card35]} {traditionalCardDeck[card35]}</div>
    </div>

    <h2>Player 6 </h2>
    <div className="hand">
    <div className="card">{traditionalCardDeck[card36]} {traditionalCardDeck[card36]}</div>
    <div className="card">{traditionalCardDeck[card37]} {traditionalCardDeck[card37]}</div>
    <div className="card">{traditionalCardDeck[card38]} {traditionalCardDeck[card38]}</div>
    <div className="card">{traditionalCardDeck[card39]} {traditionalCardDeck[card39]}</div>
    <div className="card">{traditionalCardDeck[card40]} {traditionalCardDeck[card40]}</div>
    <div className="card">{traditionalCardDeck[card41]} {traditionalCardDeck[card41]}</div>
    <div className="card">{traditionalCardDeck[card42]} {traditionalCardDeck[card42]}</div>
    </div>

    <h2>Player 7 </h2>
    <div className="hand">
        <div className="card">{traditionalCardDeck[card43]} {traditionalCardDeck[card43]}</div>
        <div className="card">{traditionalCardDeck[card44]} {traditionalCardDeck[card44]}</div>
        <div className="card">{traditionalCardDeck[card45]} {traditionalCardDeck[card45]}</div>
        <div className="card">{traditionalCardDeck[card46]} {traditionalCardDeck[card46]}</div>
        <div className="card">{traditionalCardDeck[card47]} {traditionalCardDeck[card47]}</div>
        <div className="card">{traditionalCardDeck[card48]} {traditionalCardDeck[card48]}</div>
        <div className="card">{traditionalCardDeck[card49]} {traditionalCardDeck[card49]}</div>
    </div>

    <h1>Burned Cards:</h1>
    <div className="hand">
    <div className="card">{traditionalCardDeck[card50]} {traditionalCardDeck[card50]}</div>
    <div className="card">{traditionalCardDeck[card51]} {traditionalCardDeck[card51]}</div>
    <div className="card">{traditionalCardDeck[card52]} {traditionalCardDeck[card52]}</div>
    <div className="card">{traditionalCardDeck[card53]} {traditionalCardDeck[card53]}</div>
    </div>

    <h1>Thanks for checking!</h1>
    </div>
    )
}

ReactDOM.render(
      <Main deck={deck} traditionalCardDeck={traditionalCardDeck}/>,
    document.getElementById('app')
  )