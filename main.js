nosex=0;
nosey=0;
difference=0;
left_wristx=0;
right_wristx=0;

function  setup() {
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    background("red");
    document.getElementById("square_side").innerHTML="Size of the square is: "+difference+"px";
    fill("black");
    stroke("green");
    square(nosex,nosey,difference);
}

function modelloaded() {
    console.log("Model is loaded");
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        left_wristx=results[0].pose.leftWrist.x
        right_wristx=results[0].pose.rightWrist.x
        difference=floor(left_wristx-right_wristx);
        console.log("nonex="+nosex+",nosey="+nosey);
        console.log("left_wristx="+left_wristx+",right_wrist="+right_wristx+",difference="+difference);

    }
}