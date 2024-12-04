let name1="Home"
let name2="Guest"
let homecount=0
let guestcount=0
let hinc1=1
let hinc2=2
let hinc3=3
let ginc=1
let ginc2=2
let ginc3=3
document.getElementById("home").textContent=name1
document.getElementById("home-count").textContent=homecount
document.getElementById("guest-count").textContent=guestcount
document.getElementById("guest").textContent=name2
document.getElementById("inc-home-1").textContent=hinc1
document.getElementById("inc-home-2").textContent=hinc2
document.getElementById("inc-home-3").textContent=hinc3
document.getElementById("inc-guest-1").textContent=ginc
document.getElementById("inc-guest-2").textContent=ginc2
document.getElementById("inc-guest-3").textContent=ginc3

document.getElementById("inc-home-1").addEventListener("click",function() {homecount=homecount+1;
    document.getElementById("home-count").textContent=homecount

})
document.getElementById("inc-home-2").addEventListener("click",function() {homecount=homecount+2;
    document.getElementById("home-count").textContent=homecount

})
document.getElementById("inc-home-3").addEventListener("click",function() {homecount=homecount+3;
    document.getElementById("home-count").textContent=homecount

})
document.getElementById("inc-guest-1").addEventListener("click",function() {guestcount=guestcount+1;
    document.getElementById("guest-count").textContent=guestcount

})
document.getElementById("inc-guest-2").addEventListener("click",function() {guestcount=guestcount+2;
    document.getElementById("guest-count").textContent=guestcount

})
document.getElementById("inc-guest-3").addEventListener("click",function() {guestcount=guestcount+3;
    document.getElementById("guest-count").textContent=guestcount

})

