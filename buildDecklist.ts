import {convertFileToDeckList} from './utils/TextFileConverter'
import {toPlayDeck} from './utils/toPlayDeck'
import DeckCard from './domain/DeckCard'
import playdeckJson from './decks.json'
import fs from 'fs'

const deckName: string = process.argv[2]

const deckList: DeckCard[] = convertFileToDeckList('./decklist.txt')

;(async deckList => {
    const playingDeck = await toPlayDeck(deckList)
    console.log(playingDeck)
    
    if (deckName) {
        playdeckJson['burn'] = playingDeck.map(playCard => ({name: playCard.name, cost: playCard.cmc,type: playCard.type}))
        fs.writeFileSync('./decks.json', JSON.stringify(playdeckJson, null, 2))
    }
    
    
})(deckList)