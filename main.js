function setup(){
  canvas= createCanvas(600, 300);
canvas.parent("canvas");

video= createCapture(VIDEO);
video.size(600, 300);
video.hide();

poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log("model loaded");
}

function draw(){
  image(video, 0, 0, 600, 300);
}