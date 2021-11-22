difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modalLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){    
    background('#6C91C2');
    document.getElementById("font_size").innerHTML="width and height of the font will be = "+difference+"px";
    textSize(difference);
    fill('#FFE787');
    text('Mughilavan', 50, 400);
}
function modalLoaded(){
    console.log('Posenet is initialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
console.log("left wrist x = "+leftWristX+" right wrist x ="+rightWristX+" difference = "+difference);
    }
}