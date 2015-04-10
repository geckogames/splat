/*
    Splat! Levels JavaScript Script
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
var level_tutorial = function () {
    // Tutorial Level
    this.name = "LEVEL_TUTORIAL";
    this.music = "smokemachine";
    this.bgimg = "tutimg";
    this.width = 2000;
    this.objects = [
        new Player(0, -100),
        new SlimeBasic(800, 500 - 128),
        new SlimeBasic(1000, 500 - 128),
        new SlimeBasic(1200, 500 - 128),
        new Spikes(1200, 500 - 128),
        new NullObject()
    ];
    this.needtokill = 3;
}
var level_basic = function () {
    // Basic Level
    this.name = "LEVEL_BASIC";
    this.music = "splat_score";
    this.bgimg = "plainbg";
    this.width = 2000;
    this.objects = [
        new Player(0, -100),
        new Bush(400, 500 - 128),
		new Bush2(50, 650 - 128),
        new Tree(430, 500 - 256),
		new Bush(1400, 500 - 128),
		new Tree2(1200, 500 - 256),
        new SlimeBasic(300, 500 - 128),
        new SlimeLearning(400, 500 - 128),
        new SlimeBasic(800, 500 - 128),
        new SlimeBasic(600, 500 - 128),
		new SlimeBasic(1000, 500 - 128),
		new SlimeBasic(1300, 500 - 128),
        new NullObject()
    ];
    this.needtokill = 6;
}
var level_2 = function () {
    //Level 2
    this.name = "LEVEL_2";
    this.music = "NUCLEAR";
    this.bgimg = "foggi";
    this.width = 3000;
    this.objects = [
        new Player(0, -100),
        new Bush2(400, 500 - 128),
		new Bush2(50, 650 - 128),
        new Bush2(430, 500 - 128),
		new Bush2(1400, 500 - 128),
		new Bush2(1200, 500 - 128),
        new SlimeMutant(300, 500 - 128),
        new SlimeLearning(400, 500 - 128),
        new SlimeMutant(800, 500 - 128),
		//new SlimeFlying(400, 100),
		//new SlimeFlying(1150, 200),
        new SlimeMutant(600, 500 - 128),
		new SlimeMutant(1000, 500 - 128),
		new SlimeMutant(1300, 500 - 128),
        new NullObject()
    ];
    this.needtokill = 6;
}
var level_3 = function () {
    //Level 3
    this.name = "LEVEL_3";
    this.music = "InTheWild";
    this.bgimg = "jungle";
    this.width = 4000;
    this.objects = [
        new Player(0, -100),
        new Bush2(400, 500 - 128),
		new Bush2(50, 650 - 128),
        new Bush2(430, 500 - 128),
		new Tree(200, 500 - 256),
		new Tree(700, 500 - 256),
		new Tree(800, 500 - 256),
		new Tree(1500, 500 - 256),
		new Tree(1800, 500 - 256),
		new Tree(1300, 500 - 256),
		new Bush2(100, 500 - 128),
		new Bush2(1200, 500 - 128),
        new SlimeSwarm(300, 500 - 128),
        new SlimeLearning(400, 500 - 128),
        new SlimeSwarm(800, 500 - 128),
		new SlimeFlying(400, 100),
		new SlimeFlying(1150, 200),
        new SlimeSwarm(600, 500 - 128),
		new SlimeSwarm(1000, 500 - 128),
		new SlimeSwarm(1300, 500 - 128),
		new SlimeTrap(3000, 500 - 128),
        new NullObject()
    ];
    this.needtokill = 6;
}
