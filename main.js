x = 0;
y = 0;

drawApple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 

}

function setup() {
  canvas = createCanvas(600,500)
  canvas.center()
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function modelLoaded(){
  console.log("PoseNet foi inicializado!");
}

function draw() {//função draw!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 background("FF4000");
 textSize();
 fill("FF0000");
 text('manipulador de fonte',200,200);
  if(drawApple == "set")
  {
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";
  }
}

function speak(){// função speak!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";
}
 screenWidth = 0;
 screenHeight = 0;
 var apple = ""

 function gotPoses(){
leftWrist = leftWristX,leftWristY;
rightWrist = rightWristX,rightWristY;
leftWrist = leftWristX,leftWristY - rightWrist - rightWristX,rightWristY;
florr();
textSize(0);
 }
  