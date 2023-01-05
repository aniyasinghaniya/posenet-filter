nose_x=0;
nose_y=0;
function preload(){
   img = loadImage("https://i.postimg.cc/3R9xnt91/sunglasses-vector-graphics-image-png-favpng-htg-Tzf-Tdg-NYV57-Edez-YK6b-MQs.jpg")     
}
function setup(){
canvas=createCanvas(400,300);
canvas.center();
camera=createCapture(VIDEO);
camera.hide();

poseNet=ml5.poseNet(camera, modelLoaded);
poseNet.on("pose",gotPoses);

}
function draw(){
image(camera,0,0,400,300);
image(img,nose_x,nose_y,120,50);
}

function modelLoaded(){
    console.log("posenet is loaded succesfully");
}

function gotPoses(result){
    if(result.length >0){
        console.log(result);
        nose_x =result[0].pose.nose.x;
        nose_y =result[0].pose.nose.y;
    }
    else {
        console.log("ur code is having a error");
    }
    
    
}

 function take_snapshot(){
    save ("myfilter.png");
 }