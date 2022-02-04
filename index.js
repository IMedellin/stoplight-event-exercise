let stopBtn = document.getElementById('stopButton');
let redBulb = document.getElementById('stopLight');
let slowBtn = document.getElementById('slowButton');
let slowBulb = document.getElementById('slowLight');
let goBtn = document.getElementById('goButton');
let goBulb = document.getElementById('goLight');
let red = document.getElementById('stopButton').textContent
//BONUS
let controls = document.getElementById("controls")
controls.addEventListener('click', function (event) {

  if (stopBtn) {
    console.log((event.target.textContent) + ' ' + 'bulb is on')
  } else {
    console.log((event.target.textContent) + ' ' + 'bulb is off')
  }
})


// //Toggle buttons for light function
// let toggle = function () {
//   controls.addEventListener('click', function () {
//     'use strict';
//     controls.classLight.toggle('stop')
//   })
// }




// //Stop button ON/OFF
stopBtn.addEventListener('click', function red() {
  'use strict';
  //gives stopBtn functionality
  stopLight.classList.toggle('stop')
})
// MOUSE HOVER IN
stopBtn.addEventListener('mouseenter', function () {
  console.log("Entered the stop button.")
})
// MOUSE HOVER OUT
stopBtn.addEventListener('mouseleave', function () {
  // let clear = setTimeout(console.clear(), 20000)
  console.log("Left the stop button")
})

//Slow button
slowBtn.addEventListener('click', function () {
  'use strict';
  //gives stopBtn functionality
  slowLight.classList.toggle('slow')
})
//SLOW MOUSE HOVER IN
slowBtn.addEventListener('mouseenter', function () {
  console.log("Entered the slow button.")
})

slowBtn.addEventListener('mouseleave', function () {
  console.log("Left the slow button")
})

//Go button
goBtn.addEventListener('click', function () {
  'use strict';
  //gives stopBtn functionality
  goLight.classList.toggle('go')
})
// Go button hover IN
goBtn.addEventListener('mouseenter', function () {
  console.log("Entered the go button.")
})
// Go button Hover out
goBtn.addEventListener('mouseleave', function () {
  console.log("Left the go button")
})
