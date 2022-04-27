function Gametif3 (sprite: game.LedSprite, num: number) {
    sprite.change(LedSpriteProperty.X, num)
}
function game4l (sprite: game.LedSprite, num: number) {
    sprite.change(LedSpriteProperty.X, num)
}
input.onButtonPressed(Button.A, function () {
    Gametif3(sprite, 1)
})
input.onButtonPressed(Button.B, function () {
    Gametif3(sprite, -1)
})
input.onGesture(Gesture.LogoDown, function () {
    game4l(sprite, 0)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 0)
basic.forever(function () {
	
})
