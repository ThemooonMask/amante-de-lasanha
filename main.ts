enum RadioMessage {
    message1 = 49434,
    NAO = 38124
}
radio.setGroup(1)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # # . . .
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
