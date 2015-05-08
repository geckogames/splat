/*
    Splat! Main JavaScript Script
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
var cv, ctx, screenid = 0, pscreenid = -1, screens, cvtop, cvleft, error = false, keys = [], dev = true, glitch = false, glitchygcount = 0, glitchyhcount = 0, lives = 5, points = 0, coins = 0, levelscomplete = 0, muted = false, hammer = false, axe = false, sword = false

// Zoneclick - Check wether a click happened within a zone on the screen.
var zoneclick = function (zonex, zoney, width, height, clickx, clicky) {
    return (clickx > zonex - 1 && clickx < zonex + width + 1 && clicky > zoney - 1 && clicky < zoney + height + 1)
}

screens = [
    { // Title Screen
        name: "TITLE_SCREEN",
        ticks: 0,
        direction: false,
        music: "carnivalloader",
        update: function () {
            if(this.ticks === 51 || this.ticks === 0) { // Change direction of logo and slime
                this.direction = !this.direction
            }
            this.ticks += this.direction ? 1 : -1 // Change Coords in Direction
            ctx.drawImage(document.querySelector("#logo"), 50, 30 + this.ticks)
            ctx.drawImage(document.querySelector("#startico"), 150, 240)
            ctx.drawImage(document.querySelector("#credico"), 150, 330)
			ctx.drawImage(document.querySelector("#learning_slime"), this.ticks + 170, 202)
            ctx.drawImage(document.querySelector("#basic_slime"), this.ticks * 3, 372)
			ctx.drawImage(document.querySelector("#guy"), this.ticks * 2, 372)
        },
        mouseup: function (x, y) {
            if(zoneclick(150, 240, 200, 50, x, y)) {
                change_screen(1) // If clicks 'start game', transition to game screen
            } else if(zoneclick(150, 330, 200, 50, x, y)) {
                change_screen(2)
            }
        }
    },
    , // Leave Room for Game Screen (gamesys.js)
    { // Credits Screen
        name: "CREDITS_SCREEN",
        music: "percussionparadise",
        ticks: 0,
        update: function () {
            this.ticks++
            if(this.ticks === 20) {
                this.music = null
            }
            var loc = 250
            loc = 250 - Math.floor(this.ticks / 4)
            if(loc < -1070) {
                loc = -1070
            }
            ctx.drawImage(document.querySelector("#credits"), 0, loc)
            if(this.ticks > 5600) {
                this.ticks = 0
                this.music = "percussionparadise"
                change_screen(0)
            }
        }
    },
    { // Whining Screen
        name: "WINNING_SCREEN",
        music: "Resounding_Success",
        update: function () {
            ctx.drawImage(document.querySelector("#winning"), 0, 0)
            ctx.fillStyle = "#fff";
            ctx.font = "70px sans-serif";
            ctx.fillText(points, 200, 245);
        }
    },
    { // Losing Screen
        name: "LOSING_SCREEN",
        music: "Always_Next_Time",
        update: function () {
            ctx.drawImage(document.querySelector("#losing"), 0, 0)
            ctx.fillStyle = "#fff";
            ctx.font = "70px sans-serif";
            ctx.fillText(points, 220, 300);
        }
    },
    {
        name: "LEVEL_SELECT",
        music: "FlyingTime",
        update: function () {
            ctx.drawImage(document.querySelector("#levelselect"), 0, 0)
        },
        mouseup: function (x, y) {
            if(zoneclick(144, 420, 216, 69, x, y)) {
                if (confirm ("Shop is still in the works and doesn't do anything! All it really has is nice catchy elevator music! Are you sure you want to go there!?")) {
                 change_screen(6);
                }
            } else if(zoneclick(416, 427, 46, 55, x, y)){
                 if (confirm ("WARNING! This will force you to replay the tutorial!")){
				  change_screen(0);
				 }
            } else if(zoneclick(38, 40, 66, 62, x, y) && (levelscomplete >= 1 || dev)) {
                change_screen(1);
                game.level = 1;
                game.loadLevel = true;
            } else if(zoneclick(162, 40, 66, 62, x, y) && (levelscomplete >= 2 || dev)) {
                change_screen(1);
                game.level = 2;
                game.loadLevel = true;
            } else if(zoneclick(281, 40, 66, 62, x, y) && (levelscomplete >= 3 || dev)) {
                change_screen(1);
                game.level = 3;
                game.loadLevel = true;
            } else if(zoneclick(398, 40, 66, 62, x, y) && (levelscomplete >= 4 || dev)) {
                change_screen(1);
                game.level = 4;
                game.loadLevel = true;
            } /*else if(zoneclick(38, 136, 66, 62, x, y) && (levelscomplete >= 5 || dev)) {
                change_screen(1);
                game.level = 5;
                game.loadLevel = true;
            }*/
        }
    },
    {
        name: "SHOP",
        music: "Shop",
        update: function () {
            if(this.ticks == 0) {
                logcon("Shop Initiated")
            }
			/* if(zoneclick(58, 23, 60, 57, x, y) && coins > 5) {
                game.gos.objects[0].image = "player_newspaper_hammer";
                hammer = true;
            }*/
            ctx.drawImage(document.querySelector("#shop"), 0, 0)
            ctx.drawImage(document.querySelector("#hammer"), 59, 20)
			ctx.drawImage(document.querySelector("#axe"), 209 , 20)
			ctx.drawImage(document.querySelector("#torch"), 359, 20)
			ctx.drawImage(document.querySelector("#sword"), 59, 160)
        },
        mouseup: function (x, y){
            if (zoneclick(133, 407, 237, 87, x, y)){
                change_screen(5);
            }
        }
    }
]

// Change Screen Function - Keeps track of prev screen
var change_screen = function (x) {
    nomusic()
    pscreenid = screenid // Assign Previous Screen ID for errors.
    screenid = x // Assign Current Screen ID to requested ID
}
var level_select = function () {
    change_screen(4)
}

// Chunk String - From http://stackoverflow.com/questions/1772941/how-can-i-insert-a-character-after-every-n-characters-in-javascript
String.prototype.chunk = function(n) {
    var ret = []
    for(var i=0, len=this.length; i < len; i += n) {
       ret.push(this.substr(i, n))
    }
    return ret
}

// Error Screen Function - Draws Error Messages to the Screen
var errorscreen = function (text) {
    // Split text by lines
    var texts = text.split("\n")
    // Distance between lines on screen (px)
    const POS_JUMP = 24
    // Draw basic error box BG
    ctx.drawImage(document.querySelector("#errorbox"), 0, 0)

    var lines = 0

    // Draw text line by line
    for(var i = 0; i < texts.length; i++) {
        var chs = texts[i].chunk(45)
        for(var j = 0; j < chs.length; j++) {
            ctx.fillText(chs[j], 24, (lines + 1) * POS_JUMP + 55)
            lines++
        }
    }
}

// NoMusic function - Stops all audio
var nomusic = function () {
    var audios = document.getElementsByTagName("audio")
    for(var i = 0; i < audios.length; i++) {
        audios[i].pause()
        audios[i].currentTime = 0
    }
}

var iskeydown = function (keycode) {
    return (keys.indexOf(keycode) > -1)
}

/* From: http://diveintohtml5.info/storage.html */
function supports_html5_storage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

var mute = function (opt) {
    nomusic();
    muted = opt;
    if(supports_html5_storage()) {
        localStorage.muted = opt;
    }
}

var dmode = function (opt) {
	dev = opt;
	if(supports_html5_storage()) {
        localStorage.dev = opt;
    }
}

// Window Onload - Triggered on page load (duh)
window.onload = function () {
    if(supports_html5_storage()) {
		if (localStorage.muted) {
        	muted = JSON.parse(localStorage.muted);
		}
		if (localStorage.dev) {
        	dev = JSON.parse(localStorage.dev);
		}
    }
    window.scrollTo(0, 0)
    cv = document.querySelector("#splatvas")
    ctx = cv.getContext("2d")
    cvtop = cv.getBoundingClientRect().top
    cvleft = cv.getBoundingClientRect().left
    ctx.font = "18px monospace"
    // SING IT TO THE WORLD...
    var goodidea = false;
    // ...YUP!
    setInterval(function () {
        ctx.clearRect(0,0,500,500)
        if(!screens[screenid] || !screens[screenid].update) {
            nomusic()
            error = "Attempting to read nonexistent screen: " + screenid + (screens[screenid].name ? " (" + screens[screenid].name + ")" : "") +  "\n" + "Transition triggered by screen: " + pscreenid + (screens[pscreenid].name ? " (" + screens[pscreenid].name + ")" : "")
        }
        if(error) {
            errorscreen(error)
        } else  {
            screens[screenid].update()
            if(!glitch && screens[screenid].music && !muted) {
                document.querySelector("#" + screens[screenid].music).play()
            } else if (glitch) {
                document.querySelector("#glitchmusic").play()
            }
        }
    }, 9)
    cv.onmouseup = function (e) {
        if(screens[screenid].mouseup) {
            screens[screenid].mouseup(e.clientX - cvleft, e.clientY - cvtop)
        }
    }
    window.onkeydown = function (e) {
        if(iskeydown(e.keyCode)) return
        keys.push(e.keyCode)
        if(e.keyCode !== 116) e.preventDefault()
    }
    window.onkeyup = function (e) {
        keys.splice(keys.indexOf(e.keyCode), 1)
        // Requirements for glitch trigger: press g exactly 30 times, then h exactly 30 times.
        if(e.keyCode == keybindings.G && glitchyhcount == 0) glitchygcount++;
        if(e.keyCode == keybindings.H && glitchygcount == 30) glitchyhcount++;
        if(glitchygcount == 30 && glitchyhcount == 30) {
            nomusic();
            glitch = true;
            cv.style.background = "#f00";
        }

    }
    window.onerror = function (msg, url, ln) {
        var e = "ERROR IN: " + url.replace(/^.*[\\\/]/, '') + ":" + ln + "\n" + msg
        error = e
    }
}
