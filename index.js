const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class boundary{
    constructor({position}) {
        this.position = position
        this.width = 40
        this.height = 40
    }

}