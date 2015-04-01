/*
    Splat! Learning Slime JavaScript Script
    Copyright (C) 2015 GeckoGames
    All Rights Reserved

    And, we hope you have fun!
*/
var SlimeLearning = function (x, y) {
    this.name = "LEARNING_SLIME_OBJECT"
    this.x = x
    this.y = y
    this.truex = x
    this.image = document.querySelector("#learning_slime")
    this.w = 128
    this.h = 128
    this.SPEED = 1
    this.current_path_index = 0;
    this.update = function () {
        var pos = slimelogic.movetowardsplayer(game.gos.objects[0].x, this.x, this.truex, this.SPEED)
        this.x = pos.x
        this.truex = pos.truex
        var tio = game.gos.objects.indexOf(this);
        if (((game.gos.objects[0].x > this.x && game.gos.objects[0].x < this.x + 128) || (game.gos.objects[0].x + 128 > this.x && game.gos.objects[0].x + 128 < this.x + 128)) && game.gos.objects[0].y >= this.y){
            if(iskeydown(keybindings.ATTACK)) {
                game.gos.objects.splice(tio, 1);
                points++;
            } else {
                game.gos.objects[0].dodamage();
            }
        }
    }
}
