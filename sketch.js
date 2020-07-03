var canvas,backgroundImg;
var peopleCount;
var database;
var form,user,pCount;
var question1,question2,question3;

function setup(){
    canvas = createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    form = new Form();
    form.display();
    user = new User();
    console.log("mouse is pressed");
    user.readCount();
    
}

function draw(){}