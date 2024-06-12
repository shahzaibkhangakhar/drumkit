var NoofElements = document.querySelectorAll(".drum").length;

//Detecting Mouse click on specific button press and producing sound by send that on screen button to makesound method
for (var i = 0; i < NoofElements; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    //this keyword shows k kn sa button click ho rha so lets change the color
    //this.style.color="white"
    var ButtonValues = this.innerHTML;
    makesound(ButtonValues);
    ButtonAnimation(ButtonValues)

  });
}

//Detecting keyboard button press on specific button  and producing sound by send that on keyboard button / Event (e) to makesound method
document.addEventListener("keydown",function(e){
makesound(e.key)
ButtonAnimation(e.key)
})


//same function for both methods
function makesound(key){
  switch (key) {
    case 'w':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case 'a':
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case 's':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case 'd':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case 'j':
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case 'k':
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case 'l':
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(ButtonValues)
      break;
  }
}

function ButtonAnimation(currentkey) {
  
  var Activebutton = document.querySelector("."+ currentkey)
  Activebutton.classList.add("pressed")
  setTimeout(() => {
    Activebutton.classList.remove("pressed")
  }, 100);
}