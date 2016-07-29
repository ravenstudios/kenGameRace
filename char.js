var Char = function(){

	var x = 0;
	var y = 0;
	var xVel = 0;
	var yVel = 0;
	var xSize = 20;
	var ySize = 20;
	var speed = 5;

	y = gameHeight - ySize;
	//x = gameWidth \2;
	
	this.update = function(){
		this.keyboard();
	};

	this.draw = function(){
		
		fill(255);
		rect(x, y, xSize, ySize);
	};

	this.keyboard = function(){



		if(keyIsDown(LEFT_ARROW) && x > 0){
				x = x + -speed;
		}

		if(keyIsDown(RIGHT_ARROW) && x + xSize < gameWidth){
				x = x + speed;
		}

		if(keyIsDown(UP_ARROW)){
			console.log("up pressed");
			shootHandler.pushShoot(x, y);	
		}
	
	};

	
	this.getX = function(){
		return x;
	};

	this.getY = function(){
		return y;
	};

	this.getXSize = function(){
		return xSize;
	};


};

function keyTyped() {
  if (key === ' ') {
    
  	shootHandler.pushShoot(char.getX(), char.getY());	

  } 
 }






