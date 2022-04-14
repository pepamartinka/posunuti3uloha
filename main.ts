input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    forever(function on_forever() {
        let soucet = 0
        if (soucet == 0) {
            first.showImage(0)
        }
        
        basic.pause(3000)
        for (let i = 0; i < 3; i++) {
            soucet += 1
            if (soucet == 1) {
                second.showImage(0)
            }
            
            if (soucet == 2) {
                third.showImage(0)
            }
            
            if (soucet == 3) {
                fouth.showImage(0)
            }
            
            basic.pause(3000)
        }
    })
})
let first = images.createImage(`
. # . . .
# . . . .
. . . . .
. . . . .
. . . . .
`)
let second = images.createImage(`
. . . . .
. . # . .
. # . . .
. . . . .
. . . . .
`)
let third = images.createImage(`
. . . . .
. . . . .
. . . # .
. . # . .
. . . . .
`)
let fouth = images.createImage(`
. . . . .
. . . . .
. . . . .
. . . . #
. . . # .
`)
first.showImage(0)
