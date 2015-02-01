/*
    Splat! Slime JavaScript Script
    Copyright (C) 2015 GeckoGames
    All Rights Reserved

    And, we hope you have fun!
*/
var SlimeBasic = function (x, y) {
    this.name = "SLIME_OBJECT";
    this.x = x;
    this.y = y;
    this.image = document.querySelector("#basic_slime");
    this.w = 128;
    this.h = 128;
    this.enemy = true;
    this.solid = false;
    this.update = function () {
        this.x += (game.gos.objects[0].x > this.x) ? 1 : -1;
    };
};
