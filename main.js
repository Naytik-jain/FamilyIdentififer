function preload(){

}
function setup(){
   Canvas= createCanvas(300, 300);
    Canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Yhme4_MVd/', modelloaded);
    
}
function modelloaded(){
    console.log("Model is loaded successfully")
}
function draw(){
    image(video, 0, 0, 300, 300);
   classifier.classify(video, gotResults);
}
function gotResults(error, Results){
 if(error){
     console.error(error);
}
else
console.log(Results);
document.getElementById("Face").innerHTML=Results[0].label;
document.getElementById("Accuracy").innerHTML=Results[0].confidence.toFixed(3);
}