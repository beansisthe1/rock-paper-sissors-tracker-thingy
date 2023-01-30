function update_score () {
    OLED.clear()
    OLED.writeStringNewLine("PLAYER A:" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("PLAYER B:" + PB)
    OLED.newLine()
    OLED.writeStringNewLine("TIES:" + TIE)
    OLED.newLine()
    OLED.writeStringNewLine("rounds:" + ROUND)
}
let ROUND = 0
let TIE = 0
let PB = 0
let PA = 0
OLED.init(128, 64)
PA = 0
PB = 0
TIE = 0
ROUND = 0
OLED.writeStringNewLine("hey you, want to play a game!")
basic.pause(2000)
update_score()
