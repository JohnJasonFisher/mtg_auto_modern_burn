import {convertFileToDeckList} from './utils/TextFileConverter'
import {toPlayDeck} from './utils/toPlayDeck'

import PlayingCard from './domain/PlayingCard'

console.log('Start Script!')

// const deckList = convertFileToDeckList('./decklist.txt')
// const deck = toPlayDeck(deckList)

// setTimeout(function(){ console.log(deck) }, 60000)

let deck = [
    { name: 'Mountain', cost: 0, type: 'land' },
    { name: 'Mountain', cost: 0, type: 'land' },
    { name: 'Mountain', cost: 0, type: 'land' },
    { name: 'Mountain', cost: 0, type: 'land' },
    { name: 'Mountain', cost: 0, type: 'land' },
    { name: 'Mountain', cost: 0, type: 'land' },
    { name: 'Mountain', cost: 0, type: 'land' },
    { name: 'Mountain', cost: 0, type: 'land' },
    { name: 'Mountain', cost: 0, type: 'land' },
    { name: 'Mountain', cost: 0, type: 'land' },
    { name: 'Mountain', cost: 0, type: 'land' },
    { name: 'Mountain', cost: 0, type: 'land' },
    { name: 'Mountain', cost: 0, type: 'land' },
    { name: 'Mountain', cost: 0, type: 'land' },
    { name: 'Mountain', cost: 0, type: 'land' },
    { name: 'Mountain', cost: 0, type: 'land' },
    { name: 'Mountain', cost: 0, type: 'land' },
    { name: 'Mountain', cost: 0, type: 'land' },
    { name: 'Mountain', cost: 0, type: 'land' },
    { name: 'Lava Spike', cost: 1, type: 'Sorcery' },
    { name: 'Lava Spike', cost: 1, type: 'Sorcery' },
    { name: 'Lava Spike', cost: 1, type: 'Sorcery' },
    { name: 'Lava Spike', cost: 1, type: 'Sorcery' },
    { name: 'Lightning Bolt', cost: 1, type: 'Instant' },
    { name: 'Lightning Bolt', cost: 1, type: 'Instant' },
    { name: 'Lightning Bolt', cost: 1, type: 'Instant' },
    { name: 'Lightning Bolt', cost: 1, type: 'Instant' },
    { name: 'Shard Volley', cost: 1, type: 'Instant' },
    { name: 'Shard Volley', cost: 1, type: 'Instant' },
    { name: 'Shard Volley', cost: 1, type: 'Instant' },
    { name: 'Rift Bolt', cost: 3, type: 'Sorcery' },
    { name: 'Rift Bolt', cost: 3, type: 'Sorcery' },
    { name: 'Rift Bolt', cost: 3, type: 'Sorcery' },
    { name: 'Rift Bolt', cost: 3, type: 'Sorcery' },
    { name: 'Galvanic Blast', cost: 1, type: 'Instant' },
    { name: 'Galvanic Blast', cost: 1, type: 'Instant' },
    { name: 'Galvanic Blast', cost: 1, type: 'Instant' },
    { name: 'Galvanic Blast', cost: 1, type: 'Instant' },
    { name: 'Light Up the Stage', cost: 3, type: 'Sorcery' },
    { name: 'Light Up the Stage', cost: 3, type: 'Sorcery' },
    { name: 'Seal of Fire', cost: 1, type: 'Enchantment' },
    { name: 'Seal of Fire', cost: 1, type: 'Enchantment' },
    { name: 'Seal of Fire', cost: 1, type: 'Enchantment' },
    { name: 'Seal of Fire', cost: 1, type: 'Enchantment' },
    { name: "Wizard's Lightning", cost: 3, type: 'Instant' },
    { name: "Wizard's Lightning", cost: 3, type: 'Instant' },
    { name: "Wizard's Lightning", cost: 3, type: 'Instant' },
    { name: "Wizard's Lightning", cost: 3, type: 'Instant' },
    { name: 'Skewer the Critics', cost: 3, type: 'Sorcery' },
    { name: 'Skewer the Critics', cost: 3, type: 'Sorcery' },
    { name: 'Skewer the Critics', cost: 3, type: 'Sorcery' },
    { name: 'Skewer the Critics', cost: 3, type: 'Sorcery' },
    { name: 'Slaying Fire', cost: 3, type: 'Instant' },
    { name: 'Slaying Fire', cost: 3, type: 'Instant' },
    { name: 'Slaying Fire', cost: 3, type: 'Instant' },
    { name: 'Slaying Fire', cost: 3, type: 'Instant' },
    { name: 'Shock', cost: 1, type: 'Instant' },
    { name: 'Shock', cost: 1, type: 'Instant' },
    { name: 'Shock', cost: 1, type: 'Instant' },
    { name: 'Shock', cost: 1, type: 'Instant' }
  ]

  const playingDeck = deck.map(item =>
    new PlayingCard(item.name, item.cost, item.type)
)

// Start the game

const EnemyLife = 20

function shuffle (array: any[]) {
    var i = 0
      , j = 0
      , temp = null
  
    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }

shuffle(playingDeck)

const hand = []

for (var i = 0; i < 7; i++) {
    hand.push(playingDeck.pop())
}

console.log(hand.length)
console.log(hand)
console.log(playingDeck.length)