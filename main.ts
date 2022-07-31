basic.showIcon(IconNames.Yes)
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
