import DeckCard from '../domain/DeckCard'
import fs, { PathLike } from 'fs'

export const convertFileToDeckList = (path: PathLike): DeckCard[] => {

    const newDeck: DeckCard[] = []

    const fileText: string = fs.readFileSync(path, 'utf8')

    const listofCardStrings: string[] = fileText.split('\r\n')

    listofCardStrings.forEach(item => {
        const splitItem = item.split('x ')
        newDeck.push(new DeckCard(splitItem[1], parseInt(splitItem[0])))
    })

    return newDeck
}