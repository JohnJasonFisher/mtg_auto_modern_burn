import DeckCard from '../domain/DeckCard'
import PlayingCard from '../domain/PlayingCard'

import {Cards} from 'mtgsdk-ts'

export const toPlayDeck = (decklist: DeckCard[]): PlayingCard[] => {
    const newPlayDeck: PlayingCard[]= []
    decklist.forEach(item => {
        const name = item.name
        const quantity = item.quantity
        let cost = 0
        let type = 'land'

        if (name !== 'Mountain') {
            let carddata = getCardData(name)
            .then(res => {
                cost = res.cmc
                type = res.type

                const newPlayCard = new PlayingCard(name, cost, type)

                for (var i = 0; i < quantity; i++) {
                    newPlayDeck.push(newPlayCard)
                }
                return newPlayDeck
            })
        } else {
            const newPlayCard = new PlayingCard(name, cost, type)

            for (var i = 0; i < quantity; i++) {
                newPlayDeck.push(newPlayCard)
            }
        }
    })

    return newPlayDeck
}

const getCardData = async (name: string) => {
    const results = await Cards.where({name: name})
    const result = {cmc: results[0].cmc, type: results[0].types[0]}
    return result
}
