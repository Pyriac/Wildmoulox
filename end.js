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
        answers: ["Logique", "Éclaté au sol", "Inutile", "La Lorraine"],
    },
    {
        question: "Qui est le meilleur générateur de mêmes ?",
        image: "https://forum.purplegiraffe.fr/uploads/default/original/2X/7/793e7f17298fe9e2b6b529dd26b419ddfd4509f2.jpeg",
        answers: ["Mathieu", "Mireille", "Windy", "Ta grand-mère"],
    },
    {
        question: "Les doubitchous sont :",
        image: "https://media-mcetv.ouest-france.fr/wp-content/uploads/2014/12/G%C3%A9rard-Depardieu-tue-deux-lions-et-les-mange-e1418663753544.jpg",
        answers: ["Roulés à la main sous les aisselles", "Roulés sous les aisselles", "Roulés avec les pieds", "Roulé-boulé"],
    },

    {
        question: "Que dit le sheriff à la fin de chaque épisode de Sergent Pepper ?",
        image: "https://i.ytimg.com/vi/wbaPelv4swo/sddefault.jpg",
        answers: ["This is the law", "This is the job", "This is the way", "This is the flow"],
    },

    {
        question: "À quoi est le sandwich que propose Pierre en échange de la dénonciation du meurtieur dans le film ''RRRrrrr!!!'' ?",
        image: "https://media-mcetv.ouest-france.fr/wp-content/uploads/2014/12/G%C3%A9rard-Depardieu-tue-deux-lions-et-les-mange-e1418663753544.jpg",
        answers: ["À  la fraise", "Au nutella", "Au jambon", "Au pastis"],
    },

    {
        question: "Le mur c'est...",
        image: "https://media-mcetv.ouest-france.fr/wp-content/uploads/2014/12/G%C3%A9rard-Depardieu-tue-deux-lions-et-les-mange-e1418663753544.jpg",
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
    },

]

console.log(questions.length)

//  let userScore = parseInt(localStorage.getItem("score"));

let userScore = (10 - parseInt(localStorage.getItem("score"))) || 0;

const score = document.querySelector(".variable");

score.textContent = userScore;

const score2 = document.querySelector(".sur10");

score2.textContent = `/ 10`;