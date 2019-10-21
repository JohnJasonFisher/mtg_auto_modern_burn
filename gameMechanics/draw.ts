import PlayingCard from "../domain/PlayingCard"

export const draw = (deck: PlayingCard[], hand: PlayingCard[]): void => {
    if (deck.length > 0) {
        hand.push(deck.pop()!)
    }
}