namespace SpriteKind {
    export const object = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
}
scene.onHitWall(SpriteKind.Player, function (sprite) {
    game.over(false, effects.confetti)
})
sprites.onOverlap(SpriteKind.object, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(10000)
    joe.vy += -250
    trampo.setKind(SpriteKind.object)
    trampo.x += Math.randomRange(-70, 70)
    trampo.y += Math.randomRange(-50, -60)
})
let trampo: Sprite = null
let joe: Sprite = null
scene.setBackgroundImage(img`
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
`)
joe = sprites.create(img`
    . . . . . f f f f f f f . . . .
    . . . f f . . . . . . . f f . .
    . . f . . . . . . . . . . . f .
    . f . . . . . . . . . . . . . f
    . f . . . . . . . . . . . . . f
    . f . . . . . . . . . . . . . f
    . f . . . . . . . . . . . . . f
    . . f f f . . . . . . . . . f .
    . . . f . . . . . . . . . f . .
    . . . f . . . . . . . . . f . .
    . . . . f . . . . . . . f . . .
    . . . . . f . . . . . . f . . .
    . . . . . . f . . . . f . . . .
    . . . . . . f . . . . f . . . .
    . . . . . . . f . . f . . . . .
    . . . . . . . . f f . . . . . .
`, SpriteKind.Player)
joe.ay = 10000
trampo = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    f f f f f f 1 f f f 1 f f f f 1
    1 f f f 1 1 1 1 1 1 1 1 1 f 1 f
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f f
    f f f 1 1 1 1 1 1 1 1 1 1 f f f
    f f 1 f 1 1 1 1 1 1 1 1 f 1 f f
    f 1 1 f f f f f f f f f f f 1 f
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.object)
trampo = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    f f f f f f 1 f f f 1 f f f f 1
    1 f f f 1 1 1 1 1 1 1 1 1 f 1 f
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f f
    f f f 1 1 1 1 1 1 1 1 1 1 f f f
    f f 1 f 1 1 1 1 1 1 1 1 f 1 f f
    f 1 1 f f f f f f f f f f f 1 f
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.object)
trampo = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    f f f f f f 1 f f f 1 f f f f 1
    1 f f f 1 1 1 1 1 1 1 1 1 f 1 f
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f f
    f f f 1 1 1 1 1 1 1 1 1 1 f f f
    f f 1 f 1 1 1 1 1 1 1 1 f 1 f f
    f 1 1 f f f f f f f f f f f 1 f
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.object)
game.onUpdate(function () {
    joe.x += controller.dx()
})
