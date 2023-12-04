let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
function displayTime(){
   let date =new Date ();

//    getting hour , min ,sec from date

let hh = date.getHours();
let mm = date.getMinutes();
let ss = date.getSeconds();

// 12 hour = m360deg
// 1 hour = 360/12 =30
// h hour =30h + m/2

// 60 min = 360deg
// 1 min = 360/60 =30
// m min =6m

// 60 sec = 360deg
// 1 sec = 360/60 =30
// s sec =6s


let hRotation = 30*hh + mm/2;
let mRotation = 6*mm;
let sRotation =6*ss;

hr.style.transform = `rotate(${hRotation}deg)`;
min.style.transform = `rotate(${mRotation}deg)`;
sec.style.transform = `rotate(${sRotation}deg)`;


}
setInterval(displayTime, 1000);