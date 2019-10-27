import {convertFileToDeckList} from './utils/TextFileConverter'
import {toPlayDeck} from './utils/toPlayDeck'
import DeckCard from './domain/DeckCard'

const deckList: DeckCard[] = convertFileToDeckList('./decklist.txt')

;(async deckList => {
    const playingDeck = await toPlayDeck(deckList)
    console.log(playingDeck)
})(deckList)