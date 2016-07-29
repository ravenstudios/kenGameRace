function Shoot(inX, inY){


	var x = inX;
	var y = inY;
	var xSize = 10;
	var ySize = 20;
	var speed = 5;
	var color = "rgb(255, 0, 0)";

	this.update = function(){

		y = y - speed;
	};

	this.draw = function(){

		fill(color);
		rect(x, y, xSize, ySize);
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

	this.getYSize = function(){

		return ySize;
	};
}

function ShootHandlelr(){

	var handlerArray = [];

	this.update = function(){


		for(var i = 0; i < handlerArray.length; i++){

			console.log(handlerArray.length);

			console.log("y:" + handlerArray[i].getY());

			if(handlerArray.length > 0){

				

				//console.log(handlerArray);
				if(handlerArray[i].getY() < 0){
					
					console.log("splice"); 
					handlerArray.splice(i, 1);
					break;
				}
			}

			 
			

			handlerArray[i].update();
		}
	};

	this.draw = function(){

		for(var i = 0; i < handlerArray.length; i++){
			handlerArray[i].draw();
		}
	};

	this.pushShoot = function(inX, inY){

		handlerArray.push(new Shoot(inX, inY));

	};
}