basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        if (true) {
            basic.showLeds(`
                # . # . #
                # . # . #
                # . # . #
                # . # . #
                # . # . #
                `)
            basic.pause(100)
            basic.showLeds(`
                . # . # .
                . # . # .
                . # . # .
                . # . # .
                . # . # .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        if (input.buttonIsPressed(Button.A)) {
            basic.showLeds(`
                # # # # #
                . . . . .
                # # # # #
                . . . . .
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                # # # # #
                . . . . .
                # # # # #
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else {
        	
        }
        if (true) {
        	
        } else {
        	
        }
    }
})
