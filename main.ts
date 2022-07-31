input.onButtonPressed(Button.A, function () {
    robotbit.MotorRun(robotbit.Motors.M1A, -165)
})
input.onButtonPressed(Button.AB, function () {
    robotbit.MotorStopAll()
})
input.onButtonPressed(Button.B, function () {
    robotbit.MotorRun(robotbit.Motors.M2B, -165)
})
basic.showIcon(IconNames.Happy)
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
