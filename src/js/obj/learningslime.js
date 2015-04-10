/*
    Splat! Learning Slime JavaScript Script
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
var SlimeLearning = function (x, y) {
    this.name = "LEARNING_SLIME_OBJECT"
    this.x = x
    this.y = y
    this.truex = x
    this.image = "learning_slime";
    this.w = 128
    this.h = 128
    this.SPEED = 1
    this.health = 4;
    this.update = function () {
        slimelogic.movetowardsplayer(this);
        slimelogic.pi_handler(this);
    }
}
