radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        All_Stop()
    } else if (receivedNumber == 1) {
        All_Fwd()
    } else if (receivedNumber == 2) {
        All_Rev()
    }
})
input.onButtonPressed(Button.A, function () {
	
})
function All_Rev () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -99,
    robotbit.Motors.M2B,
    -94
    )
}
function All_Fwd () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    68,
    robotbit.Motors.M2B,
    68
    )
}
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
function All_Stop () {
    robotbit.MotorStopAll()
}
radio.setGroup(3)
basic.showIcon(IconNames.StickFigure)
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
robotbit.MotorStopAll()
strip.clear()
strip.show()
strip.setBrightness(64)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
strip.show()
basic.pause(500)
strip.clear()
strip.show()
basic.forever(function () {
	
})
