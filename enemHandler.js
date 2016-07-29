function EnemHandler(){

	var array = [];
	var numOfEnemys = 5;

	for(var i = 0; i < numOfEnemys; i++){

		array.push(new Enem(Math.floor(Math.random() * ((gameWidth - char.getXSize()) - 0) + 0)));
	}

	this.update = function(){

		for(var i = 0; i < array.length; i++){
			array[i].update();

			if(array[i].getY() > gameHeight){
				
				array[i].setY(0);
			}
		}
	};

	this.draw = function(){

		for(var i = 0; i < array.length; i++){
			array[i].draw();
		}

	};

	

	

	

	
}