import {shuffleDeck} from './shuffleDeck'

it('draws a card from an empty playing deck', () => {
    
    const testArray = [0,1,2,3,4,5,6,7,8,9]
    const shuffledArray = shuffleDeck(testArray)

    expect(shuffledArray).not.toEqual([0,1,2,3,4,5,6,7,8,9])
})