import PlayingCard from "../domain/PlayingCard"

export const draw = (deck: PlayingCard[]) => {
    if (deck.length > 0) {
        deck.pop()
    }
}