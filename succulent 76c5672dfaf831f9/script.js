let dot1El = document.querySelector('.d1')
let dot2El = document.querySelector('.d2')
let dot3El = document.querySelector('.d3')
let dot4El = document.querySelector('.d4')
let backgroundEl = document.getElementById('body')
let viewPortWidth = window.innerHeight

dot1El.onclick = function() {
    backgroundEl.style.backgroundImage = "url(./img/img3.jpg)";
    dot1El.style.opacity = "1"
    dot2El.style.opacity = ".5"
    dot3El.style.opacity = ".5"
    dot4El.style.opacity = ".5"
}
dot2El.onclick = function() {
    backgroundEl.style.backgroundImage = "url(./img/img1.jpg)";
    dot1El.style.opacity = ".5"
    dot2El.style.opacity = "1"
    dot3El.style.opacity = ".5"
    dot4El.style.opacity = ".5"
}
dot3El.onclick = function() {
    backgroundEl.style.backgroundImage = "url(./img/img2.jpg)";
    dot1El.style.opacity = ".5"
    dot2El.style.opacity = ".5"
    dot3El.style.opacity = "1"
    dot4El.style.opacity = ".5"
}
dot4El.onclick = function() {
    backgroundEl.style.backgroundImage = "url(./img/img4.jpg)";
    dot1El.style.opacity = ".5"
    dot2El.style.opacity = ".5"
    dot3El.style.opacity = ".5"
    dot4El.style.opacity = "1"
}