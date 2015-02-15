/*
    Splat! Player JavaScript Script
    Copyright (C) 2015 GeckoGames
    All Rights Reserved

    And, we hope you have fun!
*/
var Player = function (x, y) {
    this.name = "PLAYER_OBJECT"
    this.x = x
    this.y = y
    this.image = document.querySelector("#guy")
    this.w = 128
    this.h = 128
    this.velocity_y = 0
    this.velocity_x = 0
    this.friction = 0.25
    this.gravity = 0.2 // Gravitational constant for SplatLand's People
    this.jump_released = true // Wether or not jump key has been released since last jump
    this.n_jumps = 0 // Number of jumps executed without hitting the ground
    this.update = function (goe, ticks) {
        if(iskeydown(keybindings.RIGHT)) { // Move Right
            this.velocity_x = 4
        }
        if(iskeydown(keybindings.LEFT)) { // Move Left
            this.velocity_x = -4
        }
        if(this.velocity_x) {
            this.velocity_x += (this.velocity_x > 0) ? -this.friction : this.friction
        }
        this.x += Math.floor(this.velocity_x)
        if(iskeydown(keybindings.JUMP) && this.jump_released && this.n_jumps < 2) { // If liable to jump (max double-jump)
            // Set to jump velocity
            this.velocity_y = -7
            // Record that the jump button was not released
            this.jump_released = false
            // Increment Number of Jumps (Max double-jump)
            this.n_jumps++
        }
        if(!iskeydown(keybindings.JUMP)) {
            // Record that the jump button has been released
            this.jump_released = true
        }
        // If player is moving on y axis
        if(this.velocity_y || this.y < (500 - (game.levels[game.level].floor[this.x] | 0) - 128)) {
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

        var leftlvl = (500 - (game.levels[game.level].floor[this.x] || 0) - 128)
        var rightlvl = (500 - (game.levels[game.level].floor[this.x + 128] || 0) - 128)

        /*if((this.y > leftlvl || this.y > rightlvl) && this.velocity_y < 0) {
            this.velocity_y = 0
            this.y = leftlvl > rightlvl ? leftlvl : rightlvl
            this.n_jumps = 0
        }*/
    }
}