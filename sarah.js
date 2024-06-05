// AUDIOS

const playAudioLinkDenis = document.querySelector("#audioLinkDenis");
const audioDenis = document.querySelector("#audioDenis");

playAudioLinkDenis.addEventListener("click", (event) => {
    event.preventDefault();
    audioDenis.play();
});

const playAudioLinkSouffrir = document.querySelector("#audioLinkSouffrir");
const audioSouffrir = document.querySelector("#audioSouffrir")

playAudioLinkSouffrir.addEventListener("click", (event) => {
    event.preventDefault();
    audioSouffrir.play();
});

const playAudioLinkKamoulox = document.querySelector("#audioLinkKamoulox");
const audioKamoulox = document.querySelector("#audioKamoulox")

playAudioLinkKamoulox.addEventListener("click", (event) => {
    event.preventDefault();
    audioKamoulox.play();
});

const playAudioLinkRisitas = document.querySelector("#audioLinkRisitas");
const audioRisitas = document.querySelector("#audioRisitas")

playAudioLinkRisitas.addEventListener("click", (event) => {
    event.preventDefault();
    audioRisitas.play();
});

const playAudioLinkVelo = document.querySelector("#audioLinkVelo");
const audioVelo = document.querySelector("#audioVelo")

playAudioLinkVelo.addEventListener("click", (event) => {
    event.preventDefault();
    audioVelo.play();
});

// POP UP LE SACHIEZ-VOUS

// Tableau qui contient mes différents paragraphes

const paragraphes = [
    "Le feu ça brûle.",
    "L'eau ça mouille.",
    "Tous les oiseaux volent dans le ciel.",
    "Si tu fermes les yeux, ça éteint la lumière.",
    "C'est l'âne de Shrek qui double Eddy Murphy."
]

const popupLink = document.querySelectorAll(".popup-link");
const leSachiezVous = document.querySelector("#le-sachiez-vous");
const closeLsv = document.querySelector(".close-lsv");
const grid = document.querySelector(".grid");

// Ouvrir le popup

popupLink.forEach((element, index) => {

    element.addEventListener("click", (event) => {
        event.preventDefault();
        leSachiezVous.classList.toggle("open");
        grid.classList.toggle("open");

        const paragraphe = paragraphes[index];
        const showParagraph = document.querySelector("#paragraphBox");
        showParagraph.innerHTML = paragraphe;
    });
});

// Fzermer lle pop-up
closeLsv.addEventListener("click", (event) => {
    event.preventDefault();
    leSachiezVous.classList.remove("open");
    grid.classList.remove("open");
});


