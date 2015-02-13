// SPLAT LEVELS
var level_basic = function () {
    // Basic Level
    this.name = "LEVEL_BASIC";
    this.objects = [
        new Player(0, 500 - 128),
        new SlimeBasic(128, 500 - 128),
        new SlimeLearning(256, 500 - 128),
        new SlimeMutant(400, 500 - 128),
        new SlimePepper(300, 500 - 128)
        new SlimeHutt(64, 500-128)
    ];
    this.floor = [];
    for(var i = 0; i < 500; i++) {
        this.floor.push(i / 2);
    }
};
