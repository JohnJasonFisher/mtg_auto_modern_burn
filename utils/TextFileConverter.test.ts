import {convertFileToDeckList} from './TextFileConverter'
import DeckCard from '../domain/DeckCard'

it('convert json file into play deck', () => {
    const deck = convertFileToDeckList('./decklistExample.txt')

    expect(deck).toHaveLength(1)
    expect(deck[0]).toEqual(new DeckCard('Forest', 1))
})  