(async function () {
  async function getData(url) {
    const response = await fetch(url);
    return response.json();
  }
  const result = await getData("gift.json");

  const startButton = document.querySelector(".js-start-btn");
  const gameIntro = document.querySelector(".game-intro");
  const gameAnimation = document.querySelector(".game-animation");
  const tree = document.querySelector(".shake-tree-frame");
  const gameResult = document.querySelector(".game-result");

  const textHeading = document.querySelector('.js-heading');
  const prizeImage = document.querySelector('.js-image');
  const title = document.querySelector('.js-title');
  const text = document.querySelector('.js-text');

  if (!startButton || !gameIntro || !gameAnimation || !tree || !gameResult) return;
  if (!textHeading || !prizeImage || !title || !text) return;

  // start game
  startButton.addEventListener("click", function (e) {
    gameIntro.style.display = "none";
    gameAnimation.classList.add("open");
    document.body.classList.add('is-game');

    // game animation
    tree.addEventListener("click", function (e) {
      tree.querySelector('img').classList.add("active");
      document.body.classList.remove("is-game");
      document.body.classList.add('is-hidden-tree');
      // show result
      setTimeout(() => {
        gameAnimation.style.display = "none";
        gameResult.style.display = "flex";
        document.body.classList.remove('is-hidden-tree');
        document.body.classList.add('is-game');
      }, 3640);
      clearTimeout();
      if (!result.lucky) textHeading.innerHTML = 'CẢM ƠN BẠN ĐÃ THAM GIA';
      prizeImage.src = result.img;
      title.innerHTML = result.title;
      text.innerHTML = result.text;
    });
  });
})();
