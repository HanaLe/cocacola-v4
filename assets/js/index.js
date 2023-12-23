(function () {
  const startButton = document.querySelector(".js-start-btn");
  const gameIntro = document.querySelector(".game-intro");
  const gameAnimation = document.querySelector(".game-animation");
  const gameResult = document.querySelector(".game-result");

  if (!startButton || !gameIntro || !gameAnimation || !gameResult) return;

  // start game
  startButton.addEventListener("click", function (e) {
    gameIntro.style.display = "none";
    gameAnimation.classList.add("open");
    
    // shake tree

    // show result
    setTimeout(() => {
      gameAnimation.style.display = "none";
      gameResult.style.display = "flex";
    }, 3000);
    clearTimeout();
  });

})();
