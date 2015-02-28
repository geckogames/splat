/*
    Splat! Slime JavaScript Script
    Copyright (C) 2015 GeckoGames
    All Rights Reserved

    And, we hope you have fun!
*/
var SlimeHutt = function (x, y) {
    this.name = "HUTT_SLIME_OBJECT"
    this.x = x
    this.y = y
    this.truex = x
    this.image = document.querySelector("#hutt_slime")
    this.w = 128
    this.h = 128
    this.enemy = true
    this.solid = false
    this.SPEED = 2
    this.update = function () {
        //var pos = slimelogic.movetowardsplayer(game.gos.objects[0].x, this.x, this.truex, this.SPEED)
        //this.x = pos.x
        //this.truex = pos.truex
    }
}
