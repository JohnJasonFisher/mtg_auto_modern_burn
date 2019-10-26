import {convertFileToDeckList} from './utils/TextFileConverter'
import {toPlayDeck} from './utils/toPlayDeck'

const deckList = convertFileToDeckList('./decklist.txt')
const deck = toPlayDeck(deckList)

setTimeout(() => {
    console.log(deck)
}, 10000)