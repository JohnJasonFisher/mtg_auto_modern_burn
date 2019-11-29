import PlayingCard from "../domain/PlayingCard"

export const draw = (deck: PlayingCard[], hand: PlayingCard[]): PlayingCard | undefined => {
    let drawnCard
    if (deck.length > 0) {
        drawnCard = deck.pop()!
        hand.push(drawnCard)
    }
    return drawnCard
}