let userScore = (10 - parseInt(localStorage.getItem("score"))) || 10;

const score = document.querySelector(".variable");

score.textContent = userScore;

const score2 = document.querySelector(".sur10");

score2.textContent = `/ 10`;