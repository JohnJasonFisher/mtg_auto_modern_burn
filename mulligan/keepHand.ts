import PlayingCard from "../domain/PlayingCard"

export const shouldKeepHand = (hand: PlayingCard[]): boolean => {
    let shouldKeep = true
    let landCount = 0

    hand.forEach(card =>
        card.type === 'land' ? landCount += 1 : null
    )

    if (landCount === 1 || landCount > 3) {
        shouldKeep = false
    }

    if (!hasCmcOneSpell(hand)) {
        shouldKeep = false
    }

    return shouldKeep
}

const hasCmcOneSpell = (hand: PlayingCard[]): boolean => {
    const listOfCmcSpells = hand.filter((card: PlayingCard) => card.cmc === 1)
    if (listOfCmcSpells.length < 1) {
        return false
    }

    return true
}