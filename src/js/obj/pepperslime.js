/*
    Splat! Pepper Slime JavaScript Script
    Copyright (C) 2015 GeckoGames
    All Rights Reserved

    And, we hope you have fun!
*/
var SlimePepper = function (x, y) {
    this.name = "PEPPER_SLIME_OBJECT"
    this.x = x
    this.y = y
    this.truex = x
    this.image = document.querySelector("#pepper_slime")
    this.w = 128
    this.h = 128
    this.enemy = true
    this.solid = true
    this.SPEED = 2.7
    this.update = function () {
        //var pos = slimelogic.movetowardsplayer(game.gos.objects[0].x, this.x, this.truex, this.SPEED)
        //this.x = pos.x
        //this.truex = pos.truex
    }
}
