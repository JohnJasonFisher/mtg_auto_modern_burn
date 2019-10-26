import DeckCard from '../domain/DeckCard'
import PlayingCard from '../domain/PlayingCard'

import {Cards} from 'mtgsdk-ts'

export const toPlayDeck = (decklist: DeckCard[]): PlayingCard[] | void => {

	const newPlayDeck: PlayingCard[] = []

	decklist.forEach( async (item: DeckCard) => {
		const name = item.name
		const quantity = item.quantity
		let cost = 0
		let type = 'land'

		// TODO: this function needs to wait for data to come in.
		getCardData(name)
		.then(res => {
			cost = res.cmc
			type = res.types
		})

		const newPlayCard = new PlayingCard(name, cost, type)

		for (var i = 0; i < quantity; i++) {
			newPlayDeck.push(newPlayCard)
		}
	})

	return newPlayDeck
}

// TODO: maybe I need this guy to return a promise
const getCardData = async (name: string) => {
	const results = await Cards.where({name: name})
	const result = {cmc: results[0].cmc, types: results[0].types[0]}
	return result
}
