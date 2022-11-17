input.onButtonPressed(Button.A, function () {
    ship_space.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    chumbo = game.createSprite(ship_space.get(LedSpriteProperty.X), ship_space.get(LedSpriteProperty.Y))
    chumbo.change(LedSpriteProperty.Brightness, 80)
    for (let index = 0; index < 4; index++) {
        chumbo.change(LedSpriteProperty.Y, -1)
        basic.pause(150)
        if (chumbo.isTouching(coco)) {
            game.addScore(1)
            chumbo.delete()
            coco.delete()
        }
    }
    if (chumbo.get(LedSpriteProperty.Y) <= 0) {
        chumbo.delete()
    }
})
input.onButtonPressed(Button.B, function () {
    ship_space.move(1)
})
let coco: game.LedSprite = null
let chumbo: game.LedSprite = null
let ship_space: game.LedSprite = null
ship_space = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    coco = game.createSprite(randint(0, 4), 0)
    coco.set(LedSpriteProperty.Brightness, 150)
    basic.pause(100)
    coco.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        coco.move(1)
        basic.pause(500)
        if (coco.isTouching(ship_space)) {
            game.gameOver()
        }
    }
    if (coco.isTouchingEdge()) {
        coco.delete()
    }
})
