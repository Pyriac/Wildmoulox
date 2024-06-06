
//fonction pop-up

const appellePopUp = document.querySelector(".popup");
const fermerPopUp = document.querySelector(".popup-close");

appellePopUp.addEventListener("click", (event) => {
    event.preventDefault();
    addBlur = document.querySelector(".blur")
    popup = document.querySelector("#popup-overlay");
    popup.classList.toggle("open");
    addBlur.classList.toggle("open");
});

fermerPopUp.addEventListener("click", (event) => {
    event.preventDefault();
    addBlur = document.querySelector(".blur")
    popup = document.querySelector("#popup-overlay");
    popup.classList.remove("open");
    addBlur.classList.remove("open");
});

// fonction réglage du son
const backgroundMusic = document.querySelector(`.background-music`);
backgroundMusic.volume = 0.5;

const audios = document.querySelectorAll('audio');
const volumeControl = document.querySelector("#volume");
volumeControl.value = 0.5;


volumeControl.addEventListener("input", () => {
    audios.forEach(audio => {
        audio.volume = volumeControl.value;
    })
});

// Play et Stop


const playMusic = document.querySelector(".music-play");
const stopMusic = document.querySelector(".music-stop");


playMusic.addEventListener("click", () => {
    // console.log("click")
    backgroundMusic.play();
});
stopMusic.addEventListener("click", () => {
    // console.log("click")
    backgroundMusic.pause();
});




//loop
backgroundMusic.loop = true;

//local storage


const savedTime = localStorage.getItem("music-current-time");
const savedPlaying = localStorage.getItem("music-playing");

if (savedTime) {
    backgroundMusic.currentTime = parseFloat(savedTime);
}

if (savedPlaying === "true") {
    backgroundMusic.play();
}
else {
    backgroundMusic.pause();
}


backgroundMusic.addEventListener("timeupdate", () => {
    localStorage.setItem("music-current-time", backgroundMusic.currentTime);
});

backgroundMusic.addEventListener("play", () => {
    localStorage.setItem("music-playing", "true");
});

backgroundMusic.addEventListener("pause", () => {
    localStorage.setItem("music-playing", "false");
});

