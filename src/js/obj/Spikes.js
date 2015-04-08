/*
    Splat! Spikes JavaScript Script
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
