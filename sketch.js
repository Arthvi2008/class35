var ball;
var database,position,dbball;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    dbball=database.ref('ball/position');
    dbball.on("value",readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,1);
    }
    drawSprites();
}
function readPosition(data){
    position=data.val();
    console.log(position);
    ball.x=position.x;// from db to the program
    ball.y=position.y;
}

//from program to db
function writePosition(x,y){
    database.ref('ball/position').set({
        x:position.x+x,
        y:position.y+y   
     });
}
