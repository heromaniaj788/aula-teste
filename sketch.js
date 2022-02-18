var invencible
function setup() {
  createCanvas(400,400);
invencible = createSprite(200,200,30,30);


}

function draw() 
{
  background(30);
if(keyDown("right")){
invencible.x+=5;
}
if(keyDown("left")){
invencible.x-=5;
}
if(keyDown("up")){
invencible.y-=5;
}
if(keyDown("down")){
invencible.y+=5;  
}

drawSprites();
}




