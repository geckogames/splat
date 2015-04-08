/*
    Splat! Flying Slime JavaScript Script
    Copyright (C) 2015 GeckoGames
    All Rights Reserved

    And, we hope you have fun!
*/
var Spikes = function (x, y) {
    this.name = "SPIKES_OBJECT"
    this.x = x
    this.y = y
    this.truex = x
    this.image = "Spikes"
    this.w = 128
    this.h = 128
    this.SPEED = 0
    this.current_path_index = 0;
    this.update = function () {
        var tio = game.gos.objects.indexOf(this);
        if (((game.gos.objects[0].x > this.x && game.gos.objects[0].x < this.x + 128) || (game.gos.objects[0].x + 128 > this.x && game.gos.objects[0].x + 128 < this.x + 128)) && game.gos.objects[0].y + 128 >= this.y){
            if (game.gos.objects[0].y >= this.y) {
                game.gos.objects[0].bouncy();
            }
            game.gos.objects[0].dodamage();
        }
    }
}
