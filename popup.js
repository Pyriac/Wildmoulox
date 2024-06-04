
//fonction pop-up

const appellePopUp = document.querySelector(".popup");
const fermerPopUp = document.querySelector(".popup-close");

appellePopUp.addEventListener("click", () => {
    popup = document.querySelector("#popup-overlay");
    popup.classList.toggle("open");
});

fermerPopUp.addEventListener("click", () => {
    popup = document.querySelector("#popup-overlay");
    popup.classList.remove("open");
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
    backgroundMusic.load();
});

//loop
backgroundMusic.loop = true;




