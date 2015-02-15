/*
    Splat! Main JavaScript Script
    Copyright (C) 2015 GeckoGames
    All Rights Reserved

    And, we hope you have fun!
*/
var cv, ctx, screenid = 0, pscreenid = -1, screens, cvtop, cvleft, error = false, con, keys = [], dev = false

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
            ctx.drawImage(document.querySelector("#basic_slime"), this.ticks * 2, 372)
        },
        mouseup: function (x, y) {
            if(zoneclick(150, 240, 200, 50, x, y)) {
                change_screen(1) // If clicks 'start game', transition to game screen
                document.querySelector("#makeway").play()
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
            if(this.ticks === 0) {
                logcon("Credits Initiated")
            }
            this.ticks++
            if(this.ticks === 20) {
                logcon("Credits Music set null (prevents loop)")
                this.music = null
            }
            var loc = 250
            loc = 250 - Math.floor(this.ticks / 3)
            if(loc < -1070) {
                if(loc === -1070) {
                    logcon("Credits YPosFreeze")
                }
                loc = -1070
            }
            ctx.drawImage(document.querySelector("#credits"), 0, loc)
            if(this.ticks > 4400) {
                logcon("Credits End")
                this.ticks = 0
                this.music = "percussionparadise"
                change_screen(0)
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
    logcon("Music Cleared.")
}

var logcon = function (text) {
    con.innerHTML += text + "\n"
    con.scrollTop = con.scrollHeight - con.clientHeight
}

var iskeydown = function (keycode) {
    return (keys.indexOf(keycode) > -1)
}

// Window Onload - Triggered on page load (duh)
window.onload = function () {
    window.scrollTo(0, 0)
    document.querySelector("#carnivalloader").play()
    cv = document.querySelector("#splatvas")
    ctx = cv.getContext("2d")
    cvtop = cv.getBoundingClientRect().top
    cvleft = cv.getBoundingClientRect().left
    ctx.font = "18px monospace"
    con = document.querySelector("#textarea")
    logcon("Splat! Initiated.")
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
            if(screens[screenid].music) {
                document.querySelector("#" + screens[screenid].music).play()
            }
        }
    }, 10)
    cv.onmouseup = function (e) {
        if(screens[screenid].mouseup) {
            screens[screenid].mouseup(e.clientX - cvleft, e.clientY - cvtop)
        }
    }
    window.onkeydown = function (e) {
        if(iskeydown(e.keyCode)) return
        keys.push(e.keyCode)
        logcon("KEYDOWN: " + e.keyCode)
        if(e.keyCode !== 116) e.preventDefault()
    }
    window.onkeyup = function (e) {
        keys.splice(keys.indexOf(e.keyCode), 1)
        logcon("KEYUP: " + e.keyCode)
    }
    window.onerror = function (msg, url, ln) {
        var e = "ERROR IN: " + url.replace(/^.*[\\\/]/, '') + ":" + ln + "\n" + msg
        error = e
        logcon(e)
    }
}