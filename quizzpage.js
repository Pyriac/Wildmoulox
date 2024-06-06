const questions = [
    {
        question: 'Quelle est la réponse à "ça va être tout noir" ? OK',
        image: "https://www.serieously.com/app/uploads/2022/07/rrrrrrr-ccca7a-va-ecc82tre-tout-noir.jpg",
        answers: ['Ta gueule', 'Non', 'Attends un peu !', 'à mes yeux tu brilles même dans le noir'],

    },
    {
        question: "C'est une bonne situation ça scribe ?",
        image: "https://images.lanouvellerepublique.fr/image/upload/t_1020w/f_auto/646ca4fea3ea7f23498b456e.jpg",
        answers: ["Vous savez, moi je ne crois pas qu'il y ait de bonne ou de mauvaise situation", "Pas autant qu'architecte", "On en a marre de t'entendre Edouard.", "Une bonne situation dépend moins de la nature de la profession que de la satisfaction"],
    },

    {
        question: "De quel film vient cette image ?",
        image: "https://external-images.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2020-11/2997395.jpg",
        answers: ["Dikkenek", "Bienvenue chez les Ch'tis", "Manneken Pis", "La Tour Montparnasse Infernale"],

    },

    {
        question: "Top ! Située entre l’Europe, le Caucase et l’Anatolie. Je suis principalement alimentée par le Danube, le Dniepr et le Don je suis je suis je suis :",
        image: "https://static.actu.fr/uploads/2018/03/Julien-Lepers-Question-pour-un-champion.jpg",
        answers: ["La mer Noire", "La mer égée", "La mer méditérannée", "La mer Rouge"],

    },
    {
        question: "Vous êtes Odile Deray ?",
        image: "https://www.serieously.com/app/uploads/2022/07/la-cite-de-la-peur-odile-aeroport.jpg",
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
        image: "https://clips-media-assets2.twitch.tv/IZEKkb7vx-HoNZXuvUpndQ/AT-cm%7CIZEKkb7vx-HoNZXuvUpndQ-preview-480x272.jpg",
        answers: ["Ouais ouais ouais", "Non non non", "peut-être", "C'est validé !"],

    },
    {
        question: "Après de nombreuses recherches scientifiques, le professeur Cyrielle a trouvé que la logique c'est :",
        image: "https://avatars.githubusercontent.com/u/118595509?v=4",
        answers: ["Logique", "Eclaté au sol", "Inutile", "la Lorraine"],
    },
    {
        question: "Qui est le meilleur générateur de mêmes ?",
        image: "https://forum.purplegiraffe.fr/uploads/default/original/2X/7/793e7f17298fe9e2b6b529dd26b419ddfd4509f2.jpeg",
        answers: ["Mathieu", "Mireille", "Windy", "Ta grand-mère"],
    },
    // Ewan a mis des images à partir d'ici
    {
        question: "Les doubitchous sont :",
        image: "https://i.ytimg.com/vi/hYeMacIIlQE/maxresdefault.jpg",
        answers: ["Roulés à la main sous les aisselles", "Roulés sous les aisselles", "Roulés avec les pieds", "Roulé-boulé"],
    },

    {
        question: "Que dit Olivier à la fin de chaque épisode de Sergent Pepper ?",
        image: "https://i.ytimg.com/vi/wbaPelv4swo/sddefault.jpg",
        answers: ["This is the law", "This is the job", "This is the way", "This is the flow"],
    },

    {
        question: "À quoi est le sandwich que propose Pierre en échange de la dénonciation du meurtieur dans le film ''RRRrrrr!!!'' ?",
        image: "https://cdn.discordapp.com/attachments/1243225688929206404/1248181621031698493/le-sandwich-a-la-fraise.png?ex=6662bb38&is=666169b8&hm=c5df9c3f819e3b91ca3570fcdac036440984435e2d2be5cadef1cd184f7afb7e&",
        answers: ["À  la fraise", "Au nutella", "Au jambon", "Au pastis"],
    },

    {
        question: "Le mur c'est...",
        image: "https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2024/06/mur-meme-wall-680x383.jpg?resize=500,281&key=ffd90ef8",
        answers: ["Tous les jours", "Toutes les semaines ", " À chaque live Co", " Quand Kevin a la flemme d'expliquer"],
    },

    {
        question: "Il s'appelle Juste Leblanc",
        image: "https://ds.static.rtbf.be/article/image/1920x1080/7/2/a/717d8b3d60d9eea997b35b02b6a4e867-1681812931.jpeg",
        answers: ["Ah bon ? Il n'a pas de prénom ?", "Ah bon ? Il est breton ?", "Ah bon ? Il est en noir et blanc ?", "Ah bon ? Il a juste un nom ?"],
    },

    {
        question: "Que pense Kim des marseillais à propos de la lune ?",
        image: "https://s1.dmcdn.net/v/67Dhi1LPTWUJQAOEl/x1080",
        answers: ["Qu'il y a 2 lunes", "Que la lune n'existe pas", "Qu'il y a des aliens sur la face cachée de la lune", "Que la lune est au centre de l'univers"],
    }
];

// module.exports = questions;

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
    if (usedIndex.length === 10) {
        buttonNextPage.href = "end.html";
        buttonNextPage.textContent = "TERMINÉ";
    };
    if (usedIndex.length !== 10) {
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
