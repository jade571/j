let jade = 0
basic.showLeds(`
    . . # . .
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.forever(function () {
    jade += 1
})
