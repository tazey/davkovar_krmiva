input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    basic.showIcon(IconNames.Sword)
    pins.servoWritePin(AnalogPin.P0, 140)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 90)
    basic.showIcon(IconNames.No)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.No)
    pins.servoWritePin(AnalogPin.P0, 90)
})
basic.showLeds(`
    . # . # .
    . . # . .
    . . # . .
    # . . . #
    # # # # #
    `)
