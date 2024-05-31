const listQuestions = [
    {
        question: 'Quelle est la réponse à "ça va être tout noir" ?',
        Answers: ['Ta gueule', 'Non', 'Attends un peu !', 'à mes yeux tu brilles même dans le noir'],

    },
    {
        question: "C'est une bonne situation ça scribe ?",
        Answers: ["Vous savez, moi je ne crois pas qu'il y ait de bonne ou de mauvaise situation", "Pas autant qu'architecte", "On en a marre de t'entendre Edouard.", "Une bonne situation dépend moins de la nature de la profession que de la satisfaction intérieure et de l'harmonie entre l'individu et son rôle dans le monde."],

    },
    {
        question: 'Gérard sait :',
        image: "https://media-mcetv.ouest-france.fr/wp-content/uploads/2014/12/G%C3%A9rard-Depardieu-tue-deux-lions-et-les-mange-e1418663753544.jpg",
        Answers: ["Chanter du Barbara", "Compter 2 par 2 et lasser ses chaussures", "Rester sobre plus de 24h", "Prendre le train à Lyon Part-Dieu"],

    },

    {
        question: "De quel film vient cette image ?",
        image: "https://external-images.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2020-11/2997395.jpg",
        Answers: ["Dikkenek", "Bienvenue chez les Ch'tis", "Manneken Pis", "La Tour Montparnasse Infernale"],

    },

    {
        question: "Top ! Située entre l’Europe, le Caucase et l’Anatolie. Je suis principalement alimentée par le Danube, le Dniepr et le Don je suis je suis je suis :",
        Answers: ["La mer Noire", "La mer égée", "La mer méditérannée", "La mer Rouge"],

    },
    {
        question: "Vous êtes Odile Deray ?",
        Answers: ["Non je suis le pape et j'attends ma soeur ", "Non je suis à gauche de l'ascenceur ", "Non je suis Michel Polnareff et j'attends mon coiffeur", "Non je suis Crocodile Dundee"],

    },
    {
        question: `compléter ce dialogue "J'ai fait deux ans d'études à Montpellier.
        - De ?"`,
        image: "https://us-tuna-sounds-images.voicemod.net/fee83811-48eb-4d49-821e-5e6b7e760580-1672595687145.jpg",
        Answers: ["ans d'études à Montpellier", "Histoire de l'art", "LEA Allemand", "Pas besoin d'études pour être connu finalement"],

    },
    {
        question: "Ouais ouais ouais !",
        Answers: ["Ouais ouais ouais", "Non non non", "peut-être", "C'est validé !"],

    },

]


// ----------A faire :
// Faire en sorte que les questions soit choisies aléatoirement
// Faire en sorte que les réponses soit positionnées aléatoirement (tout en gardant la trace de la bonne réponse)
// Max caractères questionImage = 93 ch 
// Max caractères réponseImage = 64 ch

// -------Randomizer et test pour ne pas réutiliser la même question
// const usedQuestions = [];
// let randomIndex;
// while (randomIndex.includes(usedQuestions)) {
//     let randomIndex = Math.floor(Math.random() * listQuestions.length);
// }
// usedQuestions.push(randomIndex);


// Choisis l'index de la question
const testIndex = 2;

// Regarde si c'est une question à image ou non, et si oui, récupère l'img dans le tableau
if (listQuestions[testIndex].image !== undefined && imageTableau !== null) {
    const imageTableau = document.querySelector(".image");
    imageTableau.src = listQuestions[testIndex].image;
};

// Créé la question
const question = document.querySelector(".question");
question.textContent = listQuestions[testIndex].question;

// Créé les réponses
const reponses = document.querySelectorAll(".reponse");
listQuestions[testIndex].answers.forEach((answer, index) => {
    reponses[index].textContent = answer;
});

// Quand on clique sur réponse
reponses.addEventListener("click", () => {
    if (listQuestions[testIndex].image === undefined
    ) {
        window.open("quizzpage.html");
    } else {
        window.open("quizzpageimg.html");
        const image = document.querySelector(".image");
        image.src = listQuestions.image;
    }
});
