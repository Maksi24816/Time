let Arrow1 = document.querySelector(".Arrow1")
let Arrow2 = document.querySelector(".Arrow2")
let Arrow3 = document.querySelector(".Arrow3")

var now = new Date();

let S = "Секунд " + now.getSeconds() + " ";
let M = "Минут " + now.getMinutes() + " ";
let H = "Годин " + now.getHours() + " ";

setInterval(function () {
    now = new Date();

    S = "rotate(" + (now.getSeconds()*6) + "deg)";
    M = "rotate(" + (now.getMinutes()*6 + now.getSeconds()/10) + "deg)";
    H = "rotate(" + (now.getHours()*30 + now.getMinutes()/2) + "deg)";
    
    Arrow1.style.transform = S;
    Arrow2.style.transform = M;
    Arrow3.style.transform = H;
}, 1000)