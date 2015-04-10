/*
    Splat! Coin JavaScript Script
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
        if (((game.gos.objects[0].x > this.x && game.gos.objects[0].x < this.x + 32) || (game.gos.objects[0].x + 32 > this.x && game.gos.objects[0].x + 32 < this.x + 32)) && (game.gos.objects[0].y + 32 >= this.y && game.gos.objects[0].y <= this.y + 32)){
            coins++;
            game.gos.objects.splice(tio, 1);
        }
    };
};
