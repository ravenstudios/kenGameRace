var Enem = function(inX){

	var x = inX;
	var y = 0;
	var xVel = 0;
	var yVel = 0;
	var speed = 5;
	var xSize = 20;
	var ySize = 20;

	this.update = function(){
		

		
			 y = y + speed;
		

		
	};

	this.draw = function(){
		fill(0, 255, 0);
		rect(x, y, xSize, ySize);

	};

	this.getY = function(){
		
		return y;
	};

	this.setY = function(inY){
		
		y = inY;
	};

	this.getYSize = function(){
		return ySize;
	};
};