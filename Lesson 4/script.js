// var clickCount = 0;
// function clickHandler(evt){
//    clickCount++;
//    console.log(evt);
//    var str = "Thanks for clicking " + clickCount;
//    this.innerText = str;
// }

// var p = document.getElementById("pElement");
// p.addEventListener("click", clickHandler);

// function bodyClick(evt){
//     console.log("Clicked at X: " + evt.pageX + ", Y: " + evt.pageY);
//  }
//  window.onclick = bodyClick;
 
// function windowLoad() {
//     console.log("Window is loaded");
//  }
//  window.onload = windowLoad;


// function click(evt) {
//     console.log(evt.pageX, evt.pageY);
//  }
//  window.onclick = click;
 

// function setup() {

// }
// function preload() {
//     console.log("Window is loaded");
//  }
//  function mousePressed() {
//     console.log(mouseX, mouseY);
//  }
 
// function main() {
//     var socket = io();
//     var chatDiv = document.getElementById('chat');
//     var input = document.getElementById('message');
//     var button = document.getElementById('submit');
 
//     function handleSubmit(evt) {
//         var val = input.value;
//         if (val != "") {
//             socket.emit("send message", val);
//         }
//     }
//     button.onclick = handleSubmit;
 
//     function handleMessage(msg) {
//         var p = document.createElement('p');
//         p.innerText = msg;
//         chatDiv.appendChild(p);
//         input.value = "";
// }

// socket.on('display message', handleMessage);
// } // main closing bracket

// window.onload = main;   

function setup (){
    createCanvas(500, 500);
    background("#acacac");
}
function mouseDragged() {
    ellipse(mouseX, mouseY, 12, 12);
    fill("blue");
    return false;
  }
 




 