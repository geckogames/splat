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
    }
};
