import {convertFileToDeckList} from './utils/TextFileConverter'
import {toPlayDeck} from './utils/toPlayDeck'


console.log('Start Script!')

const deckList = convertFileToDeckList('./decklist.txt')
const deck = toPlayDeck(deckList)

console.log(deck)