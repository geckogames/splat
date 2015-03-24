// SPLAT LEVELS
var level_basic = function () {
    // Basic Level
    this.name = "LEVEL_BASIC";
    this.objects = [
        new Player(0, 500 - 600),
        new SlimeBasic(300, 500 - 128),
        new SlimeLearning(400, 500 - 128),
        new SlimeBasic(800, 500 - 128),
        new SlimeBasic(600, 500 - 128),
		new SlimeBasic(1000, 500 - 128),
		new SlimeBasic(1300, 500 - 128),
        new Bush(400, 500 - 400),
		new Bush2(50, 650 - 400),
        new Tree(430, 500 - 400),
		new Bush(1400, 500 - 400),
		new Tree2(1200, 500 - 400)
    ];
    this.floor = [];
    for(var i = 0; i < 500; i++) {
        this.floor.push(i / 2)
    }
}
var level_2 = function () {
    //Level 2
    this.name = "LEVEL_2";
    this.objects = [
        new Player(0, 500 - 600),
        new SlimeMutant(300, 500 - 128),
        new SlimeLearning(400, 500 - 128),
        new SlimeMutant(800, 500 - 128),
        new SlimeMutant(600, 500 - 128),
		new SlimeMutant(1000, 500 - 128),
		new SlimeMutant(1300, 500 - 128),
        new Bush2(400, 500 - 400),
		new Bush2(50, 650 - 400),
        new Bush2(430, 500 - 400),
		new Bush2(1400, 500 - 400),
		new Bush2(1200, 500 - 400)
    ];
    this.floor = [];
    for(var i = 0; i < 500; i++) {
        this.floor.push(i / 2)
    }
}
