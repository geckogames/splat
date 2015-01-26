/*
    Splat! Learning Slime JavaScript Script
    Copyright (C) 2015 GeckoGames
    All Rights Reserved

    And, we hope you have fun!
*/
var SlimeLearning = function (x, y) {
    this.name = "LEARNING_SLIME_OBJECT";
    this.x = x;
    this.y = y;
    this.image = document.querySelector("#learning_slime");
    this.w = 128;
    this.h = 128;
    this.enemy = true;
    this.solid = true;
    this.update = function () {};
};
