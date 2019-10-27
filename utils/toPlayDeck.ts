import DeckCard from '../domain/DeckCard'
import PlayingCard from '../domain/PlayingCard'

import {Cards} from 'mtgsdk-ts'

export const toPlayDeck = async (decklist: DeckCard[]): Promise<PlayingCard[] | void> => {

	const newPlayDeck: PlayingCard[] = []

	for (let deckCard of decklist) {
		const name = deckCard.name
		const quantity = deckCard.quantity

		const playingCard = await getPlayingCardData(name)

		for (var i = 0; i < quantity; i++) {
			newPlayDeck.push(playingCard)
		}
	}

	return newPlayDeck
}

const getPlayingCardData = async (name: string): Promise<PlayingCard> => {
	const results = await Cards.where({name: name})
	return new PlayingCard(name, results[0].cmc, results[0].types[0])
}