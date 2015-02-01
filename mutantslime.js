/*
    Splat! Mutant Slime JavaScript Script
    Copyright (C) 2015 GeckoGames
    All Rights Reserved

    And, we hope you have fun!
*/
var SlimeMutant = function (x, y) {
    this.name = "MUTANT_SLIME_OBJECT";
    this.x = x;
    this.truex = x;
    this.y = y;
    this.image = document.querySelector("#mutant_slime");
    this.w = 128;
    this.h = 128;
    this.enemy = true;
    this.solid = true;
    this.SPEED = 2.5;
    this.update = function () {
        var pos = slimelogic.movetowardsplayer(game.gos.objects[0].x, this.x, this.truex, this.SPEED);
        this.x = pos.x;
        this.truex = pos.truex;
    };
};
