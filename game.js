
var gameWidth = 400;
var gameHeight = 400;
var char;
var enemyHandler;
var shootHandler;

function setup(){
	createCanvas(gameWidth, gameHeight);
	char = new Char();
	enemyHandler = new EnemHandler();
	shootHandler = new ShootHandlelr();
	

	
}


function update(){
	char.update();
	enemyHandler.update();
	shootHandler.update();
	
}


function draw(){
	update();
	background(51);
	char.draw();
	enemyHandler.draw();
	shootHandler.draw();
	
}