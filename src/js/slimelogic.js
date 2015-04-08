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
    movetowardsplayer: function (playerx, slimex, realx, SPEED) {
        if(slimex != playerx) {
            realx += (playerx > slimex) ? SPEED : -SPEED;
            slimex = Math.floor(realx);
        }
        return {
            truex: realx,
            x: slimex
        };
    },
    path_movement: function (cur_ind, max, speed, x) {
        // calculate difference movement on a back-and-forth path
        // cur_ind maximum is double 'max'
        // max is the maximum x
        var max_dir = max / 2; // Max for either directory
        var direction = (cur_ind > max_dir) ? -1 : 1;
        return { new_index: (cur_ind + 1) % max, new_x: x + direction * speed }; // Return new relative location
	}
};
