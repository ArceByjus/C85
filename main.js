canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;
	//upload car, and background images on the canvas.

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
	//Define function ‘uploadBackground’

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
	//Define function ‘uploadgreencar’.

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);//limpia pantalla
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(greencar_y>=0){
		greencar_y = greencar_y - 10;
		console.log("Cuando presionas tecla arriba, x va hacer igual a "+ greencar_x);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(greencar_y<=350){
		greencar_y = greencar_y + 10;
		console.log("Cuando presionas tecla abajo, x va hacer igual a "+ greencar_x);
		uploadBackground();
		uploadgreencar();
	
	}//Define function to move the car downward
}

function left()
{
	if(greencar_x>=0){
		greencar_x = greencar_x - 10;
		console.log("Cuando presionas tecla izquierda, y va hacer igual a "+ greencar_y);
		uploadBackground();
		uploadgreencar();
	
	}	//Define function to move the car left side
}

function right()
{
	if(greencar_x<=750){
		greencar_x = greencar_x + 10;
		console.log("Cuando presionas tecla derecha, y va hacer igual a "+ greencar_y);
		uploadBackground();
		uploadgreencar();
	}	
	//Define function to move the car right side
}
