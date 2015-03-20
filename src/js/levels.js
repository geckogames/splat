// SPLAT LEVELS
var level_basic = function () {
    // Basic Level
    this.name = "LEVEL_BASIC";
    this.objects = [
        new Player(0, 500 - 128),
        new SlimeBasic(150, 500 - 128),
        new SlimeLearning(400, 500 - 128),
        new SlimeBasic(600, 500 - 128),
        new SlimeBasic(400, 500 - 128),
		new SlimeBasic(750, 500 - 128),
		new SlimeBasic(900, 500 - 128),
		new Bush(64, 500 - 128),
        new Bush2(175, 500 - 128),
        new Bush(450, 500 - 128),
        new Tree(430, 500 - 128),
		new Bush(1400, 500 - 128),
		new Tree2(1200, 500 - 128)
    ];
    this.floor = [];
    for(var i = 0; i < 500; i++) {
        this.floor.push(i / 2)
    }
}
