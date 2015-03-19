/*
    Splat! Learning Slime JavaScript Script
    Copyright (C) 2015 GeckoGames
    All Rights Reserved

    And, we hope you have fun!
*/
var Bush = function (x, y) {
    this.name = "BUSH_OBJECT";
    this.x = x;
    this.y = y;
    this.truex = x;
    this.image = document.querySelector("#bush");
    this.w = 400;
    this.h = 400;
    this.enemy = false;
    this.solid = true;
    this.update = function () {
    };
};
