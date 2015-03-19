// SPLAT LEVELS
var level_basic = function () {
    // Basic Level
    this.name = "LEVEL_BASIC";
    this.objects = [
        new Player(0, 500 - 128),
        new SlimeBasic(128, 500 - 128),
        new SlimeLearning(400, 500 - 128),
        new SlimeBasic(700, 500 - 128),
        new SlimeBasic(300, 500 - 128),
		new SlimeBasic(900, 500 - 128),
		new SlimeBasic(1300, 500 - 128),
		new Bush(64, 500 - 128),
        //new Bush2(175, 500 - 128),
        new Bush(450, 500 - 128),
        new Tree(430, 500 - 128),
		new Bush(1400, 500 - 128)
    ];
    this.floor = [];
    for(var i = 0; i < 500; i++) {
        this.floor.push(i / 2)
    }
}
