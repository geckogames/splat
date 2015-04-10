/*
    Splat! Swarm Slime JavaScript Script
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
var SlimeSwarm = function (x, y) {
    this.name = "SWARM_SLIME_OBJECT"
    this.x = x
    this.y = y
    this.image = "swarmslime"
    this.w = 128
    this.h = 128
    this.SPEED = 3.5
    this.current_path_index = 5;
    this.health = 4;
    this.path_distance = 300;
    this.update = function () {
        slimelogic.path_movement(this);
        slimelogic.pi_handler(this);
    }
}