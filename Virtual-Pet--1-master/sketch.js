//Create variables here
var dog,happyDog,database,foodS,foodStock,D1
function preload()
{
	//load images here
  happyDog = loadImage("images/happydog.png")
  dog = loadImage("images/Dog.png")
}

function setup() {
database = firebase.database()


	createCanvas(500,500);
  D1 = createSprite(250,250,50,50)
D1.addImage(dog)
D1.scale =0.2
foodStock =database.ref('Food')
foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
if(keyDown(UP_ARROW)){
  writeStock(foodS);
dog.addImage(happyDog)
}
  drawSprites();
  //add styles here
  fill ("yellow")
  textSize(20)
  text("Press UP ^ arrow key to feed your dog milk!",60,20)
  text ("Food remainig="+foodS,170,100)
}

function readStock(data){
  foodS =data.val()
}


