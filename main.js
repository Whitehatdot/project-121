x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

screen_width=0;
screen_height = 0;

apple="";

speak_data="";

to_number=0;

function preload(){
    apple = loadImage('https://i.postimg.cc/5NtCbyjz/apple.png');
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

 to_number = Number(content);

 if(Number.isInteger(to_number)){
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    draw_apple = "set"; 
 }
else{
    document.getElementById("status").innerHTML = "The speech has not recognized a number."
}
    
}

function setup() {
   screen_width = window.innerWidth;
   screen_height = window.innerHeight; 
    canvas = createCanvas(screen_width,screen_height-150);

}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak_data = to_number + "Apples Drawn";
    speak();
    for(let i = 0; i>=to_number;i++){
      x = Math.floor(Math.random()*700);
      y = Math.floor(Math.random*400);
      Image(apple,x,y,20,20);
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}