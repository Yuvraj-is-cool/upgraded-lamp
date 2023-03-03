function preload(){
    clown_nose=loadImage('https://i.postimg.cc/FRXqZLfy/clown-nose.png');
}
noseX=0;
noseY=0;
function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    canvas.position(600,150);
    video=createCapture(VIDEO);
    video.size(500,500);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX= results[0].pose.nose.x-15;
        noseY= results[0].pose.nose.y-15;
        console.log("nose x= "+ results[0].pose.nose.x);
        console.log("nose y= "+ results[0].pose.nose.y);
    }
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function draw(){
    image(video, 0,0,500,500);
    fill(255,0,0);
    stroke(255,0,0);
    
    image(clown_nose,noseX,noseY,50,50);
}
function take_snapshot(){
    save('something_special_but_better.png');
}