
import {shuffleDeck} from './gameMechanics/shuffleDeck'
import PlayingCard from './domain/PlayingCard'
import playdeckJson from './decks.json'
import {draw} from './gameMechanics/draw'
import { shouldKeepHand as shouldKeepHand } from './mulligan/keepHand'

console.log('Start Script!')
console.log('Using the burn deck')

const playingDeck: PlayingCard[] = playdeckJson['burn'].map( (item: any) =>
    new PlayingCard(item.name, item.cost, item.type)
)

// Start the game

const EnemyLife = 20

shuffleDeck(playingDeck)

const hand: any[] = []

for (var i = 0; i < 7; i++) {
    draw(playingDeck, hand)
}

console.log(`*** Starting hand of ${hand.length} ***`)
console.log(hand)

console.log(shouldKeepHand(hand))