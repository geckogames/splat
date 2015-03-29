/*
    Splat! Game Object System JavaScript Script
    Copyright (C) 2015 GeckoGames
    All Rights Reserved

    And, we hope you have fun!
*/
var gos_alpha = function () {
    this.name = "Splat GOS_ALPHA Engine"
    this.objects = []
    this.loadLevel = function (level) {
        level.objects = (new level.constructor()).objects;
        this.objects = level.objects
        nomusic();
        screens[1].music = level.music;
    }
}
