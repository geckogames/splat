/*
    Splat! Game Object System JavaScript Script
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
var gos_alpha = function () {
    this.name = "Splat GOS_ALPHA Engine"
    this.objects = []
    this.needtokill = 0;
    this.loadLevel = function (level) {
        level.objects = (new level.constructor()).objects;
        this.objects = level.objects
        this.needtokill = level.needtokill
        nomusic();
        screens[1].music = level.music;
    }
}
