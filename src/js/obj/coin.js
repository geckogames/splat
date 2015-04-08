/*
    Splat! Coin JavaScript Script
    Copyright (C) 2015 GeckoGames
    All Rights Reserved

    And, we hope you have fun!
*/
var Coin = function (x, y) {
    this.name = "COIN_OBJECT"
    this.x = x
    this.y = y
    this.truex = x
    this.image = "coin";
    this.w = 32
    this.h = 32
    this.update = function () {
        var tio = game.gos.objects.indexOf(this);
        if (((game.gos.objects[0].x > this.x && game.gos.objects[0].x < this.x + 16) || (game.gos.objects[0].x + 16 > this.x && game.gos.objects[0].x + 16 < this.x + 16)) && (game.gos.objects[0].y + 16 >= this.y && game.gos.objects[0].y <= this.y + 16)){
            if(iskeydown(keybindings.ATTACK)){
            coins++;
            //game.gos.objects.splice(tio, 1)
            }
        }
    };
};
