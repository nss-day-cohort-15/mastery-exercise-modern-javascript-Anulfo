
var Robot = function (name) {
    this.health = 100;
    this.damage = 20;
    this.shield = 30;
    this.speed = null;
    this.name = name;
};

console.log (Robot);

Cyborg = function () {
    this.health = this.health + 40;
    this.damage = this.damage + 10;
    this.speed = 5;
}

Cyborg.prototype = new Robot;

ATV = function () {
    console.log(typeof this.health);

    this.health = this.health + 40;
    this.damage = this.damage + 10;
    this.speed = 7;
}

ATV.prototype = new Robot;

var Drone = function () {
    this.health = this.health + 40;
    this.damage = this.damage + 10;
    this.speed = 10;
}

Drone.prototype = new Robot;

Robot.Robocop = function () {
    this.health = this.health + Math.floor(Math.random() * 30);
    this.damage = this.damage - 10;
    this.speed = this.speed - 2;
}

Robot.Robocop.prototype = new Cyborg;
// var test = new Robocop;
// console.log(test);

Robot.DCCyborg = function () {
    this.health = this.health + Math.floor(Math.random() * 15);
    this.damage = this.damage + 10;
    this.speed = this.speed + 1;
}

Robot.DCCyborg.prototype = new Cyborg;

Robot.WallE = function () {
    console.log(typeof this.health);
    this.health = this.health - Math.floor(Math.random() * 10);
    this.damage = this.damage - 10;
    this.speed = this.speed + 1;
}

Robot.WallE.prototype = new ATV();

Robot.Jhonny5 = function () {
    this.health = this.health - Math.floor(Math.random() * 10);
    this.damage = this.damage + 10;
    this.speed = this.speed + 2;
}

Robot.Jhonny5.prototype = new ATV;

Robot.MatrixSentinel = function () {
    this.health = this.health - Math.floor(Math.random() * 20);
    this.damage = this.damage + 10;
    this.speed = this.speed + 3;
}

Robot.MatrixSentinel.prototype = new ATV;

Robot.EVE = function () {
    this.health = this.health - Math.floor(Math.random() * 15);
    this.damage = this.damage + 15;
    this.speed = this.speed + 2;
}

Robot.EVE.prototype = new ATV;
