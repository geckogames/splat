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
