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
    path_movement: function (cur_ind, max) {
        // calculate difference movement on a back-and-forth path
        // cur_ind maximum is double 'max'
        // max is the maximum x
        return ; // Return new relative location
    }
};
