export default class PlayingCard {
    name: string
    cost: Number
    type: String

    constructor(name: string, cost: Number, type: String) {
        this.name = name
        this.cost = cost
        this.type = type
    }
}