import {draw} from './Draw'
import PlayingCard from "../domain/PlayingCard"

it('draws a card from an empty playing deck', () => {

    const testDeck: PlayingCard[] = [new PlayingCard('Bolt', 1, 'Instant')]
    const testHand: PlayingCard[] = []

    draw(testDeck, testHand)

    expect(testDeck).toHaveLength(0)
    expect(testHand).toHaveLength(1)
});