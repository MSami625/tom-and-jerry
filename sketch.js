var tom,tomImg;
var tomwalking,tomstop;
var jerry,jerryImg;
var jerryt,jerrylast;
var ground,groundImg;


function preload() {
 //load the images here
 tomwalking=loadAnimation("cat2.png","cat3.png");
 jerryt=loadAnimation("mouse2.png","mouse3.png");
 groundImg=loadImage("garden.png");
 tomImg=loadImage("cat1.png");
 tomstop=loadImage("cat4.png");
 jerryImg=loadImage("mouse1.png");
 jerrylast=loadImage("mouse4.png");
}
    
function setup(){
  createCanvas(900,700);
  //create tom and jerry sprites here 
  ground=createSprite(450,350,10,10);
  ground.addImage(groundImg);

 tom=createSprite(700,500,10,10);
 tom.addImage(tomImg);
 tom.addAnimation("c",tomwalking);
 tom.scale=0.2;

 jerry=createSprite(150,500);
 jerry.addImage(jerryImg);
 jerry.addAnimation("j2",jerryt);
 jerry.scale=0.1;

}

function draw() {
    background(0);

    keyPressed();
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<90){
      tom.velocityX=0;
      tom.addAnimation("t",tomstop);
      tom.changeAnimation("t",tomstop);
    }
    if(tom.x-jerry.x<90){
      jerry.addAnimation("j",jerrylast);
      jerry.changeAnimation("j",jerrylast);
    }
    drawSprites();
    fill("black");
    text(mouseX + ',' + mouseY,10,45);
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
     tom.velocityX=-5;
     tom.changeAnimation("c",tomwalking);
     jerry.changeAnimation("j2",jerryt);
   }

}
