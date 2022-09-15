input.onButtonPressed(Button.A, function () {
    Player.move(-1)
})
input.onGesture(Gesture.LogoUp, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Player.move(1)
})
input.onGesture(Gesture.LogoDown, function () {
    Player.change(LedSpriteProperty.X, -1)
})
let Player: game.LedSprite = null
basic.showIcon(IconNames.Heart)
Player = game.createSprite(2, 2)
basic.forever(function () {
	
})
