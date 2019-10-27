export default class PlayingCard {
    name: string
    cmc: number
    type: string

    constructor(name: string, cmc: number, type: string) {
        this.name = name
        this.cmc = cmc
        this.type = type
    }
}