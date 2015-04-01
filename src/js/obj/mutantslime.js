/*
    Splat! Mutant Slime JavaScript Script
    Copyright (C) 2015 GeckoGames
    All Rights Reserved

    And, we hope you have fun!
*/
var SlimeMutant = function (x, y) {
    this.name = "MUTANT_SLIME_OBJECT"
    this.x = x
    this.truex = x
    this.y = y
    this.image = document.querySelector("#mutant_slime")
    this.w = 128
    this.h = 128
    this.enemy = true
    this.solid = true
    this.SPEED = 1.8
    this.current_path_index = 0;
    this.update = function () {
        //var pos = slimelogic.movetowardsplayer(game.gos.objects[0].x, this.x, this.truex, this.SPEED)
        //this.x = pos.x
        //this.truex = pos.truex
        var pm = slimelogic.path_movement(this.current_path_index, 350, 3, this.x);
        this.current_path_index = pm.new_index;
        this.x = pm.new_x;
        var tio = game.gos.objects.indexOf(this);
        if (iskeydown(keybindings.ATTACK) && ((game.gos.objects[0].x > this.x && game.gos.objects[0].x < this.x + 128) || (game.gos.objects[0].x + 128 > this.x && game.gos.objects[0].x + 128 < this.x + 128)) && game.gos.objects[0].y >= this.y){
            game.gos.objects.splice(tio, 1);
        }
    }
}
