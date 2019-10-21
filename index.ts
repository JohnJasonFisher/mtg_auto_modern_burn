
import {shuffleDeck} from './gameMechanics/shuffleDeck'
import PlayingCard from './domain/PlayingCard'
import playdeckJson from './decks.json'
import {draw} from './gameMechanics/draw'

console.log('Start Script!')
console.log('Using the burn deck')

console.log(playdeckJson["burn"])

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

console.log('*** Starting hand ***')
console.log(hand.length)
console.log(hand)

const keepHand = (hand: PlayingCard[]): boolean => {
    let shouldKeep = true
    let landCount = 0

    hand.forEach(card =>
        card.type === 'land' ? landCount += 1 : null
    )

    if (landCount === 1 || landCount > 3) {
        shouldKeep = false
    }

    if (!hasCmcOneSpell(hand)) {
        shouldKeep = false
    }

    return shouldKeep
}

const hasCmcOneSpell = (hand: PlayingCard[]): boolean => {
    const listOfCmcSpells = hand.filter((card: PlayingCard) => card.type != 'land' && card.cost == 1)
    console.log('list of 1 cmc spells')
    console.log(listOfCmcSpells)
    if (listOfCmcSpells.length < 1) {
        return false
    }

    return true
}

console.log(keepHand(hand))