/*
    Splat! Gameplay JavaScript Script
    Copyright (C) 2015 GeckoGames
    All Rights Reserved

    And, we hope you have fun!
*/
var SplatGame = function (gmp, gos, gie) {
    this.gie = gie
    this.gmp = gmp
    this.gos = gos
    this.level = 0
    this.loadLevel = true
    this.levels = [
        new level_basic()
    ]
    logcon("Gameplay Initiated.")
    logcon("Game Intersection Engine: \"" + this.gie.name + "\"")
    logcon("Game Music Player: \"" + this.gmp.name + "\"")
    logcon("Game Object System: \"" + this.gos.name + "\"")
}
var game
screens[1] = {
    name: "GAME_SCREEN",
    music: "splat_score",
    ticks: 0,
    update: function () {
        if(this.ticks === 0) {
            game = new SplatGame(new gmp_alpha(), new gos_alpha(), new gie_alpha())
        }
        this.ticks++;
        if(game.loadLevel) {
            game.loadLevel = false
            logcon("Loading Level: " + game.levels[game.level].name)
            game.gos.loadLevel(game.levels[game.level].objects)
        }
        if(dev) {
            ctx.drawImage(document.querySelector("#plainbg"), 0 - game.gos.objects[0].x, 0)
            game.gos.objects[0].update(game.gos, this.ticks)
            for(var i = 1; i < game.gos.objects.length; i++) {
                game.gos.objects[i].update(game.gos, this.ticks)
                ctx.drawImage(game.gos.objects[i].image, game.gos.objects[i].x - game.gos.objects[0].x + 200, game.gos.objects[i].y - 50)
            }
            ctx.drawImage(game.gos.objects[0].image, 200, game.gos.objects[0].y - 50)
            ctx.drawImage(document.querySelector("#grass"), 0, 0);
        } else {
            for(var i = 0; i < game.gos.objects.length; i++) {
                logcon(i)
                game.gos.objects[i].update(game.gos, this.ticks)
                ctx.drawImage(game.gos.objects[i].image, game.gos.objects[i].x, game.gos.objects[i].y)
            }
        }
    }
}
