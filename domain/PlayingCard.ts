export default class PlayingCard {
    name: string
    cmc: Number
    type: String

    constructor(name: string, cmc: Number, type: String) {
        this.name = name
        this.cmc = cmc
        this.type = type
    }
}