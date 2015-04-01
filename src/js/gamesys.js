/*
    Splat! Gameplay JavaScript Script
    Copyright (C) 2015 GeckoGames
    All Rights Reserved

    And, we hope you have fun!
*/
var SplatGame = function (gos) {
    this.gos = gos
    this.level = 0
    this.loadLevel = true
    this.levels = [
        new level_tutorial(),
        new level_basic(),
        new level_2()
    ]
    logcon("Gameplay Initiated.")
    logcon("Game Object System: \"" + this.gos.name + "\"")
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
            logcon("Loading Level: " + game.levels[game.level].name)
            game.gos.loadLevel(game.levels[game.level])
        }
        ctx.drawImage(document.querySelector("#" + game.levels[game.level].bgimg), 0 - game.gos.objects[0].x, 0)
        game.gos.objects[0].update(game.gos, this.ticks)
        for(var i = 1; i < game.gos.objects.length; i++) {
            game.gos.objects[i].update(game.gos, this.ticks)
            ctx.drawImage(game.gos.objects[i].image, game.gos.objects[i].x - game.gos.objects[0].x + 200, game.gos.objects[i].y - 50)
        }
        ctx.drawImage(game.gos.objects[0].image, 200, game.gos.objects[0].y - 50)
        ctx.drawImage(document.querySelector("#grass"), 0, 0);
        var icowidth_and_spacing = 35; var heart_i = 0;
        while (heart_i < game.gos.objects[0].lives) {
            ctx.drawImage(document.querySelector("#heart"), icowidth_and_spacing * heart_i++ + 10, 10);
        }
    }
}
