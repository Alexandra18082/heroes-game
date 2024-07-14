let showHeroesBtn = document.getElementById("show-heroes");
let startFightBtn = document.getElementById("start-fight");
let heroesContainer = document.querySelector(".heroes-container");
let showWinner = document.querySelector(".show-winner");

showWinner.innerHTML = epicFight.findWinner();

showHeroesBtn.addEventListener("click", showHeroesFunc);

startFightBtn.addEventListener("click", showWinnerFunc);

function showHeroesFunc() {
  heroesContainer.classList.add("d-flex");
  showHeroesBtn.classList.add("d-none");
  startFightBtn.classList.add("d-block");
}
function showWinnerFunc() {
  showWinner.classList.add("d-block");
  startFightBtn.classList.remove("d-block");
}
