
var gameWidth = 400;
var gameHeight = 400;
var char;
var enemyHandler;

function setup(){
	createCanvas(gameWidth, gameHeight);
	char = new Char();
	enemyHandler = new EnemHandler();
	

	
}


function update(){
	char.update();
	enemyHandler.update();
	
}


function draw(){
	update();
	background(51);
	char.draw();
	enemyHandler.draw();
	
}