status = "";
function preload(){
    img1 = loadImage(IMG_0255.jpg);
}
function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    detector = ml5.objectdetector("cocossd",model);
    document.getElementById("jinx").innerHTML = "detecting object";
}
function model(){
    status = true;
    console.log("model loaded");
    detector.detect(img1,gotresult);
}
function gotresult(results,error){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}