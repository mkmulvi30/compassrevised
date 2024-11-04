let degrees = 0
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees >= 350 || degrees <= 10) {
        basic.showString("N")
        basic.showArrow(ArrowNames.North)
    } else if (degrees > 10 && degrees < 80) {
        basic.showString("NE")
        basic.showArrow(ArrowNames.NorthEast)
    } else if (degrees >= 80 && degrees <= 100) {
        basic.showString("E")
        basic.showArrow(ArrowNames.East)
    } else if (degrees > 100 && degrees < 170) {
        basic.showString("SE")
        basic.showArrow(ArrowNames.SouthEast)
    } else if (degrees >= 170 && degrees <= 190) {
        basic.showString("S")
        basic.showArrow(ArrowNames.South)
    } else if (degrees > 190 && degrees < 260) {
        basic.showString("SW")
        basic.showArrow(ArrowNames.SouthWest)
    } else if (degrees >= 260 && degrees <= 280) {
        basic.showString("W")
        basic.showArrow(ArrowNames.West)
    } else if (degrees > 280 && degrees < 350) {
        basic.showString("NW")
        basic.showArrow(ArrowNames.NorthWest)
    }
})
