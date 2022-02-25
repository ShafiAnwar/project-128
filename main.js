
song1="";
song2="";
rightWristX=0;
leftWristX=0;
rightWristY=0;
leftWristY=0;
function preload(){
    song1=loadSound("Believer.mp3");
    song2=loadSound("Heat Waves.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
leftWristX=0;
rightWristX=0;
leftWristY=0;
rightWristY=0;
function draw(){
image(video,0,0,600,500);
}
function play(){
    song2.play();
    song2.setVolume(0.7);
    song2.rate(1);
}
function modelLoaded(){
    console.log("Posenet Loaded");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
    }
}
