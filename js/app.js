/* Orginal unmodified code made by GitHub User oxica */
const element = document.querySelector('#typewriter');
const oldText = "and i'm a c# developer";
const newText = "and i'm an amateur c# developer";
/* Anim data format: Amount of characters, Milliseconds, Mode (forwards or backwards) */
const anim = [[14, 25, 0], [3, 50, 0], [1, 600, 1], [6, 50, 1], [2, 50, 0], [2, 150, 0], [5, 100, 0], [1, 450, 0], [13, 25, 0]];
let i = 0;
let newFlag = 0;
let charCount = 1;
let step = 0;
let speed = 100;
let mode = 0;
let text = oldText;

setTimeout(writeText, 2000);

function writeText() {
    if (mode) {
        i--;
        newFlag = 1;
    } else {
        i++;
        if (newFlag) {
            text = newText;
            newFlag = 0;
        }
    }
    charCount++;
    
    if (i <= text.length) {
        element.innerHTML = text.slice(0, i);
        if (charCount >= anim[step][0]) {
            step++;
            charCount = 0;
        }
        speed = anim[step][1];
        mode = anim[step][2];
        setTimeout(writeText, speed);
    }
}

/* Goose code */
const goose = document.querySelector('#goose');
goose.addEventListener("mouseover", widenGoose);
goose.addEventListener("mouseout", unwidenGoose);
const gooseWidth = goose.clientWidth;
let gooseExpandWidth = goose.clientWidth;
let gooseWideTimeout;
let gooseUnwideTimeout;
let currentWidth;
let ninePlusTen = 21;
/* you stupid */
function widenGoose() {
    clearTimeout(gooseUnwideTimeout);
    gooseExpandWidth = gooseExpandWidth + 0.8;
    goose.style.width = gooseExpandWidth + "px";
    gooseWideTimeout = setTimeout(widenGoose, ninePlusTen);
}
function unwidenGoose() {
    clearTimeout(gooseWideTimeout);
    currentWidth = goose.style.width.replace("px", "");
    if (goose.style.width != gooseWidth + "px") {
        if (currentWidth > gooseWidth + 1) {
            gooseExpandWidth = gooseWidth + (gooseExpandWidth - gooseWidth) * 0.9;
            goose.style.width = gooseExpandWidth + "px";
            gooseUnwideTimeout = setTimeout(unwidenGoose, ninePlusTen);
        } else {
            goose.style.width = "";
            gooseExpandWidth = gooseWidth;
        }
    }
}