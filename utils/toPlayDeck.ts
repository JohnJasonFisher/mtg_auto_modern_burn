import DeckCard from '../domain/DeckCard'
import PlayingCard from '../domain/PlayingCard'

export const toPlayDeck = (decklist: DeckCard[]) => {
    const newPlayDeck: PlayingCard[]= []
    decklist.forEach(item => {
        const name = item.name
        const quantity = item.quantity
        let cost = 0
        let type = 'land'

        const newPlayCard = new PlayingCard(name, cost, type)

        if (name !== 'Mountain') {

        }

        for (var i = 0; i < quantity; i++) {
            newPlayDeck.push(newPlayCard)
        }
    })

    return newPlayDeck
}