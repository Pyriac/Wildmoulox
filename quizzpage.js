const questions = [
    {
        question: 'Quelle est la réponse à "ça va être tout noir" ?',
        image: "https://media-mcetv.ouest-france.fr/wp-content/uploads/2014/12/G%C3%A9rard-Depardieu-tue-deux-lions-et-les-mange-e1418663753544.jpg",
        answers: ['Ta gueule', 'Non', 'Attends un peu !', 'à mes yeux tu brilles même dans le noir'],

    },
    {
        question: "C'est une bonne situation ça scribe ?",
        image: "https://media-mcetv.ouest-france.fr/wp-content/uploads/2014/12/G%C3%A9rard-Depardieu-tue-deux-lions-et-les-mange-e1418663753544.jpg",
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
        image: "https://media-mcetv.ouest-france.fr/wp-content/uploads/2014/12/G%C3%A9rard-Depardieu-tue-deux-lions-et-les-mange-e1418663753544.jpg",
        answers: ["La mer Noire", "La mer égée", "La mer méditérannée", "La mer Rouge"],

    },
    {
        question: "Vous êtes Odile Deray ?",
        image: "https://media-mcetv.ouest-france.fr/wp-content/uploads/2014/12/G%C3%A9rard-Depardieu-tue-deux-lions-et-les-mange-e1418663753544.jpg",
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
        image: "https://media-mcetv.ouest-france.fr/wp-content/uploads/2014/12/G%C3%A9rard-Depardieu-tue-deux-lions-et-les-mange-e1418663753544.jpg",
        answers: ["Ouais ouais ouais", "Non non non", "peut-être", "C'est validé !"],

    },
    {
        question: "Après de nombreuses recherches scientifiques, le professeur Cyrielle a trouvé que la logique c'est :",
        image: "https://avatars.githubusercontent.com/u/118595509?v=4",
        answers: ["Logique", "Eclaté au sol", "Inutile", "la Lorraine"],
    },
    {
        question: "Qui est le meilleur générateur de mêmes:",
        image: "https://forum.purplegiraffe.fr/uploads/default/original/2X/7/793e7f17298fe9e2b6b529dd26b419ddfd4509f2.jpeg",
        answers: ["Mathieu", "Mireille", "Windy", "Ta grand-mère"],
    },


]


//creating calling const
const clickedAnswer = document.querySelectorAll(".reponse");
const answerValue = document.querySelector(".answer-value");

let userScore = parseInt(localStorage.getItem("score")) || 0;
let randomIndex = parseInt(localStorage.getItem("randomIndex"));
const usedIndex = JSON.parse(localStorage.getItem("usedIndex")) || [];
console.log(`Index actuel : ${randomIndex}`);

usedIndex.push(randomIndex);
localStorage.setItem("usedIndex", JSON.stringify(usedIndex));
console.log(`Index utilisés : ${usedIndex}`);

function quizz() {
    const rightAnswer = [];
    rightAnswer.push(questions[randomIndex].answers[0]);
    console.log(`Bonne réponse : ${rightAnswer}`);

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const question = document.querySelector(".question");
    question.textContent = questions[randomIndex].question;
    const image = document.querySelector(".image");
    image.src = questions[randomIndex].image;

    const shuffledAnswers = [...questions[randomIndex].answers];
    console.log(`Réponses à la question actuelle : ${shuffledAnswers}`);
    shuffle(shuffledAnswers);
    console.log(`Réponses à la question actuelle mélangées : ${shuffledAnswers}`);

    const showedAnswers = document.querySelectorAll(".reponse");
    shuffledAnswers.forEach((answer, index) => {
        showedAnswers[index].textContent = answer;
        showedAnswers[index].addEventListener("click", () => {
            if (showedAnswers[index].textContent === rightAnswer[0]) {
                showedAnswers[index].style.backgroundColor = "lightgreen";
                answerValue.textContent = "Bonne réponse !";
                userScore++;
                localStorage.setItem("score", userScore);
            } else {
                showedAnswers[index].style.backgroundColor = "red";
                answerValue.textContent = "Mauvaise réponse !";
            }
        });
    });

    const buttonNextPage = document.querySelector(".next-pop");
    if (usedIndex.length === questions.length) {
        buttonNextPage.href = "end.html";
        buttonNextPage.textContent = "TERMINÉ";
    };
    if (usedIndex.length !== questions.length) {
        do {
            randomIndex = Math.floor(Math.random() * questions.length)
        } while (usedIndex.includes(randomIndex));
        localStorage.setItem("randomIndex", randomIndex);
        buttonNextPage.href = "quizzpageimg.html";
        buttonNextPage.textContent = "QUESTION SUIVANTE";
    };


    //opening answer bloc function
    clickedAnswer.forEach(reponse =>
        reponse.addEventListener("click", () => {
            answerPop = document.querySelector(".answer-pop");
            answerPop.classList.toggle("open");
            const popupScore = document.querySelector(".popupScore");
            popupScore.textContent = `Vous avez ${userScore} point(s) !`;
        }));




};


quizz();