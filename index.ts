
import {shuffleDeck} from './gameMechanics/shuffleDeck'
import PlayingCard from './domain/PlayingCard'
import * as playdeckJson from "./decks.json"
import { draw } from './gameMechanics/draw'

console.log('Start Script!')
console.log('Using the burn deck')

const playingDeck: PlayingCard[] = playdeckJson['burn'].map( (item: any) =>
    new PlayingCard(item.name, item.cost, item.type)
)

// Start the game

const EnemyLife = 20

shuffleDeck(playingDeck)

const hand: PlayingCard[] = []

for (var i = 0; i < 7; i++) {
    draw(playingDeck)
}

console.log('*** Starting hand ***')
console.log(hand.length)
console.log(hand)

const keepHand = (hand: PlayingCard[]): boolean => {
    let shouldKeep = false
    let landCount = 0

    hand.forEach(card =>
        card.type === 'land' ? landCount += 1 : null
    )

    landCount >= 2 && landCount <= 3 ? shouldKeep = true : null
    
    // TODO: look for 1 spell with cmc < 1

    return shouldKeep
}

console.log(keepHand(hand))
