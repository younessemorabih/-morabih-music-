// var audio = new Audio();
// audio.src = "0126 (1).MP3"



// do{
//     audio.src = "0126 (1).MP3"

// }while (audio>10) {
    
// }
////////////////////////////////////////////////////////

// window.addEventListener('keydown',function(e){
//     console.log(e.keyCode);

// })




// var audio = new Audio();
// audio.src = '' 

// var audio = new Audio();
// audio.src = '' 

// var audio = new Audio();
// audio.src = '' 

// var audio = new Audio();
// audio.src = ''  


window.addEventListener('keydown',play)
function play (e){
var key = document.querySelector(`button[data-key='${e.keyCode}']`)
var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
audio.play()
audio.currentTime=0


}