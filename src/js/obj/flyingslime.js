/*
    Splat! Flying Slime JavaScript Script
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
var SlimeFlying = function (x, y) {
    this.name = "FLYING_SLIME_OBJECT"
    this.x = x
    this.y = y
    this.truex = x
    this.image = "flying_slime";
    this.w = 128
    this.h = 128
    this.SPEED = 5
    this.current_path_index = 5;
    this.health = 1;
    this.update = function () {
        var pm = slimelogic.path_movement(this.current_path_index, 300, 1, this.x);
        this.current_path_index = pm.new_index;
        this.x = pm.new_x;
        var tio = game.gos.objects.indexOf(this);
        if (((game.gos.objects[0].x > this.x && game.gos.objects[0].x < this.x + 128) || (game.gos.objects[0].x + 128 > this.x && game.gos.objects[0].x + 128 < this.x + 128)) && (game.gos.objects[0].y + 128 >= this.y && game.gos.objects[0].y <= this.y + 128)){
            if(iskeydown(keybindings.ATTACK)) {
                this.health--;
                if(this.health == 0) {
                    game.gos.objects.splice(tio, 1);
                    points++;
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
