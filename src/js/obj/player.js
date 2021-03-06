/*
    Splat! Player JavaScript Script
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
var Player = function (x, y) {
    this.name = "PLAYER_OBJECT"
    this.x = x
    this.y = y
    this.image = "guy"
    this.can_move_left_right = false
    this.w = 128
    this.h = 128
    this.velocity_y = 5
    this.velocity_x = 0
    this.friction = 0.6
    this.gravity = 0.2 // Gravitational constant for SplatLand's People
    this.jump_released = true // Whether or not jump key has been released since last jump
    this.n_jumps = 0 // Number of jumps executed without hitting the ground
    this.update = function (goe, ticks) {
        if(lives < 0) {
            change_screen(4);
        }
        if(hammer){
            this.image = "guy_hammer"
        } else if (axe){
            this.image = "guyaxe"
        }
        if(this.can_move_left_right) {
            if(iskeydown(keybindings.RIGHT) && this.velocity_x > -6) { // Move Right
                this.velocity_x = 5
            }
            if(iskeydown(keybindings.LEFT)) { // Move Left
                this.velocity_x = -5
            }
        }
        if(!this.can_move_left_right && this.y > 500 - 129)
            this.can_move_left_right = true
        if(this.velocity_x && this.y === 500 - 128) {
            this.velocity_x += (this.velocity_x > 0) ? -this.friction : this.friction
        } else if (this.velocity_x) {
            this.velocity_x += (this.velocity_x > 0) ? -this.friction / 1.5 : this.friction / 1.5
        }
        this.x += Math.floor(this.velocity_x)
        if(Math.floor(this.velocity_x) === 0) this.velocity_x = 0;
        if(iskeydown(keybindings.JUMP) && this.jump_released && this.n_jumps < 2) { // If liable to jump (max double-jump)
            // Set to jump velocity
            this.velocity_y = -8
            // If player can double jump (with glitch setting), record that the jump button was not released
            this.jump_released = !glitch
            // Increment Number of Jumps (Max double-jump)
            this.n_jumps++
        }
        if(!iskeydown(keybindings.JUMP)) {
            // Record that the jump button has been released
            this.jump_released = true
        }
        // If player is moving on y axis
        if(this.velocity_y || this.y < (500 - 128)) {
            // Affect velocity with gravity
            this.velocity_y += this.gravity
            // Change YPos using velocity
            this.y += Math.floor(this.velocity_y)
            this.y = Math.floor(this.y)

            // Terminate Velocity on ground and reset jump limits
            if(this.y > 500 - 128) {
                this.velocity_y = 0
                this.y = 500 - 128
                this.n_jumps = 0
            }
        }

        if(this.x < 0) {
            this.x = 0;
        } else if(this.x > game.levels[game.level].width - 500) {
            if(game.gos.needtokill > 0 && !dev) {
                this.x = game.levels[game.level].width - 500
            } else if(game.level < game.levels.length - 1) {
                change_screen(5);
                levelscomplete++;
            } else {
                nomusic();
                screenid = 3;
            }
            game.loadLevel = true;
        }
    }
    this.dodamage = function () {
        lives -= 0.005;
    }
    this.bouncy = function () {
        if (this.velocity_y > -3) {
            this.velocity_y = -3;
            if (hammer){
                this.image = "guyhurthammer"
            } else if (axe){
                this.image = "guyhurtaxe"
            } else {
                this.image = "guyhurt"
            }
            setTimeout(function () {
                if (hammer){
                    game.gos.objects[0].image = "guy_hammer"
                } else if (axe){
                    game.gos.objects[0].image = "guyaxe"
                } else {
                    game.gos.objects[0].image = "guy"
                }
            }, 75);
        }
    }
}
