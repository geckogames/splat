/*
    Splat! Pepper Slime JavaScript Script
    Copyright (C) 2015 GeckoGames
    All Rights Reserved

    And, we hope you have fun!
*/
var SlimeFlying = function (x, y) {
    this.name = "MUD_SLIME_OBJECT"
    this.x = x
    this.y = y
    this.truex = x
    this.image = document.querySelector("#mud_slime")
    this.w = 128
    this.h = 128
    this.SPEED = 0.5
    this.current_path_index = 0;
    this.health = 2;
    this.update = function () {
        var pm = slimelogic.path_movement(this.current_path_index, 300, 2, this.x);
        this.current_path_index = pm.new_index;
        this.x = pm.new_x;
        var tio = game.gos.objects.indexOf(this);
        if (((game.gos.objects[0].x > this.x && game.gos.objects[0].x < this.x + 128) || (game.gos.objects[0].x + 128 > this.x && game.gos.objects[0].x + 128 < this.x + 128)) && game.gos.objects[0].y + 128 >= this.y){
            if(iskeydown(keybindings.ATTACK)) {
                this.health--;
                if(this.health == 0) {
                    game.gos.objects.splice(tio, 1);
                    points++;
                }
            } else {
                if (game.gos.objects[0].y >= this.y) {
                    game.gos.objects[0].bouncy();
                }
                game.gos.objects[0].dodamage();
            }
        }
    }
}
