//creating calling const
const openAnswerPop = document.querySelectorAll(".reponse");

//opening answer bloc function
openAnswerPop.forEach(reponse =>
    reponse.addEventListener("click", () => {
        answerPop = document.querySelector(".answer-pop");
        answerPop.classList.toggle("open");
    }));

