/*
    Splat! Slime JavaScript Script
    Copyright (C) 2015 GeckoGames
    All Rights Reserved

    And, we hope you have fun!

    This file is part of Splat!.

    Splat! is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Splat! is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Splat!.  If not, see <http://www.gnu.org/licenses/>.
*/
var SlimeBasic = function (x, y) {
    this.name = "SLIME_OBJECT"
    this.x = x
    this.y = y
    this.truex = x
    this.image = "basic_slime"
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
                    var dropchance = Math.floor((Math.random() * 10) + 1);
                    switch(dropchance){
                    case 10:
                    game.gos.objects.push(new Coin(this.x, 400));
                    game.gos.objects.push(new Coin(this.x + 50, 400));
                        break;
                    case 9:
                    game.gos.objects.push(new Coin(this.x, 400));
                    game.gos.objects.push(new Heart(this.x + 50, 400));
                        break;
                    case 8:
                    case 7:
                    case 6:
                    case 5:
                    case 4:
                    case 3:
                    case 2:
                    case 1:
                    game.gos.objects.push(new Coin(this.x, 400));
                        break;
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
