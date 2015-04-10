/*
    Splat! Gameplay JavaScript Script
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
var SplatGame = function (gos) {
    this.gos = gos
    this.level = 0
    this.loadLevel = true
    this.levels = [
        new level_tutorial(),
        new level_basic(),
        new level_2(),
        new level_3()
    ]
}
var game
screens[1] = {
    name: "GAME_SCREEN",
    music: "splat_score",
    ticks: 0,
    hasdown: false,
    update: function () {
        if(iskeydown(keybindings.ATTACK)) {
            if (this.hasdown) {
                window.onkeyup({keyCode: keybindings.ATTACK});
                this.hasdown = false;
            } else {
                this.hasdown = true;
            }
        }
        if(this.ticks === 0) {
            game = new SplatGame(new gos_alpha())
        }
        this.ticks++;
        if(game.loadLevel) {
            game.loadLevel = false
            game.gos.loadLevel(game.levels[game.level])
        }
        ctx.drawImage(document.querySelector("#" + game.levels[game.level].bgimg), 0 - game.gos.objects[0].x, 0)
        game.gos.objects[0].update(game.gos, this.ticks)
        for(var i = 1; i < game.gos.objects.length; i++) {
            game.gos.objects[i].update(game.gos, this.ticks)
            if (game.gos.objects[i] ) {
                ctx.drawImage(document.querySelector("#" + game.gos.objects[i].image), game.gos.objects[i].x - game.gos.objects[0].x + 200, game.gos.objects[i].y - 50)
            }
        }
        ctx.drawImage(document.querySelector("#" + game.gos.objects[0].image), 200, game.gos.objects[0].y - 50)
        // ctx.drawImage(document.querySelector("#grass"), 0, 0); DELETE
        var icowidth_and_spacing = 35; var heart_i = 0;
        while (heart_i < game.gos.objects[0].lives) {
            ctx.drawImage(document.querySelector("#heartimg"), icowidth_and_spacing * heart_i++ + 10, 10);
        }
    }
}
