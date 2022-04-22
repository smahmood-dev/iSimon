// Global Constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

// Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false; 
var tonePlaying = false;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var attempts = 3;
var timer;

// Game State Functions

function startGame(){
    // initialize game variables
    progress = 0;
    attempts = 3;
    gamePlaying = true;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    // generate random pattern
    randomPattern();
    // play the clue sequence
    playClueSequence();
}

function stopGame(){
    // initialize game variables
    gamePlaying = false;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
    clearTimeout(timer);
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

// Game Behavior Functions

function randomPattern(){
  pattern = Array.from({length: 6}, () => Math.floor(Math.random() * 6 + 1));
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }
      else{
        progress++;
        clearTimeout(timer); // resets the 10 second round timer
        playClueSequence();
      }
    }
    else{
      guessCounter++;
    }
  }
  else{
    // deduct an attempt for each failed guess
    attempts--;
    // after 3 failed guesses, lose the game
    if(attempts == 0){
      loseGame();
    }
  }
}    

function playClueSequence(){
  guessCounter = 0;
  clueHoldTime *= (0.93**progress); // reduce clue duration by 7% after every subsequent round
  timer = setTimeout(loseGame, 10000); // gives player 10 seconds to match the correct pattern every round 
  let delay = nextClueWaitTime; // set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

// Sound Synthesis Functions

const freqMap = {
  1: 200,
  2: 275,
  3: 350,
  4: 425,
  5: 500,
  6: 575 
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)