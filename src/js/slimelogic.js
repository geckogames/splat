/*
    Splat! SlimeLogic JavaScript Script
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
var slimelogic = {
    movetowardsplayer: function (it) {
        if(it.x != game.gos.objects[0].x) {
            it.truex += (game.gos.objects[0].x > it.x) ? it.SPEED : -it.SPEED;
            it.x = Math.floor(it.truex);
        }
    },
    path_movement: function (it) {
        // calculate difference movement on a back-and-forth path
        // current_path_index maximum is double path_distance
        // max is the maximum x
        var max_dir = it.path_distance / 2; // Max for either directory
        var direction = (it.current_path_index > max_dir) ? -1 : 1;
        it.current_path_index = (it.current_path_index + 1) % it.path_distance;
        it.x = it.x + direction * it.SPEED;
	},
    player_intersects: function (it) {
        return (((game.gos.objects[0].x > it.x && game.gos.objects[0].x < it.x + 128) || (game.gos.objects[0].x + 128 > it.x && game.gos.objects[0].x + 128 < it.x + 128)) && (game.gos.objects[0].y + 128 >= it.y && game.gos.objects[0].y <= it.y + 128));
    },
    pi_handler: function (it) {
        var tio = game.gos.objects.indexOf(it);
        if (this.player_intersects(it)) {
            if(iskeydown(keybindings.ATTACK) && !it.unkillable) {
                it.health--;
                if(it.health == 0) {
                    game.gos.objects.splice(tio, 1);
                    points++;
                    var dropchance = Math.floor((Math.random() * 10) + 1);
                    switch(dropchance){
                    case 10:
                        game.gos.objects.push(new Coin(it.x + 90, 400));
                        game.gos.objects.push(new Coin(it.x + 50, 400));
                        break;
                    case 9:
                        game.gos.objects.push(new Coin(it.x + 90, 400));
                        game.gos.objects.push(new Heart(it.x + 50, 400));
                        break;
                    case 8:
                    case 7:
                        game.gos.objects.push(new Heart(it.x + 50, 400));
                    case 6:
                    case 5:
                    case 4:
                    case 3:
                    case 2:
                    case 1:
                        game.gos.objects.push(new Coin(it.x + 50, 400));
                        break;
                    }
                    game.gos.needtokill--;
                }
            } else {
                if (game.gos.objects[0].y >= it.y) {
                    game.gos.objects[0].bouncy();
                }
                game.gos.objects[0].dodamage();
            }
        }
    }
};
