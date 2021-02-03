var tom,tomImg;
var tomwalking,tomstop;
var jerry,jerryImg;
var jerry1,jerry2;
var ground,groundImg;


function preload() {
 //load the images here
 groundImg=loadImage("garden.png");
 tomImg=loadImage("cat1.png");
 tomwalking=loadAnimation("cat2.png","cat3.png");
 tomstop=loadImage("cat4.png");
}
    
function setup(){
  createCanvas(1000,800);
  //create tom and jerry sprites here 
  ground=createSprite(500,40,10,10);
  ground.addImage(groundImg);

 tom=createSprite(300,300,10,10);
 tom=addImage(tomImg);

}

function draw() {
    background(0);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
    text(mouseX + ',' + mouseY,10,45);
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
     tom.velocityX=-5;
     tom.addAnimation("c",tomwalking);
     tom.changeAnimation("c");
   }

}
