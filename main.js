difference=0;
rightwristx=0;
leftwristx=0
function preload(){

}
function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,500);
canvas.position(560,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
    }
    }

function modelLoaded(){
console.log('poseNet is initialized');
}
function draw(){
background('#f79131');
textSize(difference);
fill('green');
text('Quadree Abaso',50,400);
}