/*
    Splat! Slime JavaScript Script
    Copyright (C) 2015 GeckoGames
    All Rights Reserved

    And, we hope you have fun!
*/
var SlimeBasic = function (x, y) {
    var dropchance;
    this.name = "SLIME_OBJECT"
    this.x = x
    this.y = y
    this.truex = x
    this.image = document.querySelector("#basic_slime")
    this.w = 128
    this.h = 128
    this.SPEED = 2.25
    this.current_path_index = 0;
    this.health = 5;
    this.update = function () {
        var pm = slimelogic.path_movement(this.current_path_index, 200, 1, this.x);
        this.current_path_index = pm.new_index;
        this.x = pm.new_x;
        var tio = game.gos.objects.indexOf(this);
        if (((game.gos.objects[0].x > this.x && game.gos.objects[0].x < this.x + 128) || (game.gos.objects[0].x + 128 > this.x && game.gos.objects[0].x + 128 < this.x + 128)) && game.gos.objects[0].y + 128 >= this.y){
            if(iskeydown(keybindings.ATTACK)) {
                this.health--;
                if(this.health == 0) {
                    game.gos.objects.splice(tio, 1);
                    points++;
                    var dropchance = function () {
						Math.floor((Math.random() * 10) + 1);
                    	if (dropchance = 10){
                    	game.gos.objects.push(new Coin(this.x, this.y));
                    	game.gos.objects.push(new Coin(this.x - 4, this.y));
                    	}
                    	if (dropchance = 9){
                    	game.gos.objects.push(new Coin(this.x, this.y));
                    	game.gos.objects.push(new Heart(this.x - 4, this.y));
                    	}
                    	else{
                    	game.gos.objects.push(new Coin(this.x, this.y));
                    }
                    game.gos.needtokill--;
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
