const questions = [
    {
        question: 'Quelle est la réponse à "ça va être tout noir" ?',
        answers: ['Ta gueule', 'Non', 'Attends un peu !', 'à mes yeux tu brilles même dans le noir'],

    },
    {
        question: "C'est une bonne situation ça scribe ?",
        answers: ["Vous savez, moi je ne crois pas qu'il y ait de bonne ou de mauvaise situation", "Pas autant qu'architecte", "On en a marre de t'entendre Edouard.", "Une bonne situation dépend moins de la nature de la profession que de la satisfaction intérieure et de l'harmonie entre l'individu et son rôle dans le monde."],

    },
    {
        question: 'Gérard sait :',
        image: "https://media-mcetv.ouest-france.fr/wp-content/uploads/2014/12/G%C3%A9rard-Depardieu-tue-deux-lions-et-les-mange-e1418663753544.jpg",
        answers: ["Chanter du Barbara", "Compter 2 par 2 et lasser ses chaussures", "Rester sobre plus de 24h", "Prendre le train à Lyon Part-Dieu"],

    },

    {
        question: "De quel film vient cette image ?",
        image: "https://external-images.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2020-11/2997395.jpg",
        answers: ["Dikkenek", "Bienvenue chez les Ch'tis", "Manneken Pis", "La Tour Montparnasse Infernale"],

    },

    {
        question: "Top ! Située entre l’Europe, le Caucase et l’Anatolie. Je suis principalement alimentée par le Danube, le Dniepr et le Don je suis je suis je suis :",
        answers: ["La mer Noire", "La mer égée", "La mer méditérannée", "La mer Rouge"],

    },
    {
        question: "Vous êtes Odile Deray ?",
        answers: ["Non je suis le pape et j'attends ma soeur ", "Non je suis à gauche de l'ascenceur ", "Non je suis Michel Polnareff et j'attends mon coiffeur", "Non je suis Crocodile Dundee"],

    },
    {
        question: `compléter ce dialogue "J'ai fait deux ans d'études à Montpellier.
        - De ?"`,
        image: "https://us-tuna-sounds-images.voicemod.net/fee83811-48eb-4d49-821e-5e6b7e760580-1672595687145.jpg",
        answers: ["ans d'études à Montpellier", "Histoire de l'art", "LEA Allemand", "Pas besoin d'études pour être connu finalement"],

    },
    {
        question: "Ouais ouais ouais !",
        answers: ["Ouais ouais ouais", "Non non non", "peut-être", "C'est validé !"],

    },

]


// --------A ajouter au fichier accueil.js
// Revoir responsive img (avec img tableau)

// Reset le score et autres fichiers stockés (après une partie)
localStorage.clear()

const playButton = document.getElementById("startQuizz");

playButton.addEventListener("click", () => {
    // Défini index aléatoire pour la première question
    let randomIndex = Math.floor(Math.random() * questions.length);
    // Le stock pour quand on arrive sur la page suivante
    localStorage.setItem("randomIndex", randomIndex);
    // Regarde si question à image ou non
    if (questions[randomIndex].image) {
        playButton.href = "quizzpageimg.html";
    } else {
        playButton.href = "quizzpage.html";
    }
});
