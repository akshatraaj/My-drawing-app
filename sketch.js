var database;
function setup(){
    database = firebase.database();
  var canvas = createCanvas(1350,650);
  console.log(database);
}
function draw(){
    drawSprites();
}
function mouseDragged(){
    var ggg = createSprite(1,1,10,10);
    ggg.shapeColor = "red";
    ggg.x = mouseX;
    ggg.y = mouseY;
}
function color(){
    database.ref('color').set({
        'color':"red"
    })
}