(async function () {
  async function getData(url) {
    const response = await fetch(url);
    return response.json();
  }
  function getImageList(data, id) {
    return data.filter((obj) => obj.id === id);
  }
  function getPrizeData(data, retail) {
    return data.filter((obj) => obj.supermarket === retail);
  }
  function getContent(id){
    if(id === 'bigC' || id === 'go' || id ==='top-market' || id === "go-plus"){
      return "central-retail";
    }else if(id === 'coop' || id === 'coop-extra'){
      return "coop"
    }else if(id === 'win' || id === 'winmart' || id==="winmart-plus"){
      return "win-commerce"
    }else if(id === 'emart'){
      return "emart";
    }else if(id === 'aeon'){
      return "aeon";
    }else if(id === 'bsmart'){
      return "bsmart";
    }else if(id === 'lotte-mart'){
      return "lotte";
    }else if(id === 'mega-market'){
      return "mega";
    }else if(id === 'ministop'){
      return "ministop";
    }
  }
  function getPrizeType(data,type){
    return data.filter((obj) => obj.type === type);
  }

  // get data
  const result = await getData("result.json");
  const listPrizes = await getData("prize.json");
  const data = await getData("data.json");

  const supermarket = result.result.id;
  const prize = result.result.prize;
  const imgList = getImageList(listPrizes.prize,supermarket);
  const prizeData = getPrizeData(data.data,getContent(supermarket));
  const prizeContent = getPrizeType(prizeData[0].prize,prize);
  
  const startButton = document.querySelector(".js-start-btn");
  const gameIntro = document.querySelector(".game-intro");
  const gameAnimation = document.querySelector(".game-animation");
  const gameResult = document.querySelector(".game-result");

  const listPrize = document.querySelector('.js-list-prize');
  const textHeading = document.querySelector('.js-heading');

  const prizeImage = document.querySelector('.js-image');
  const title = document.querySelector('.js-title');
  const text = document.querySelector('.js-text');

  if (!startButton || !gameIntro || !gameAnimation || !gameResult) return;
  if (!listPrize || !textHeading || !prizeImage || !title || !text) return;

  listPrize.src = imgList[0].list;
  if (prize === "unlucky") textHeading.innerHTML = 'CẢM ƠN BẠN ĐÃ THAM GIA';
  prizeImage.src = prizeContent[0].img;
  title.innerHTML =  prizeContent[0].title;
  text.innerHTML =  prizeContent[0].text;

  // start game
  startButton.addEventListener("click", function (e) {
    gameIntro.style.display = "none";
    gameAnimation.classList.add("open");
    document.body.classList.add('active');
    // show result
    setTimeout(() => {
      gameAnimation.style.display = "none";
      gameResult.style.display = "flex";
    }, 3500);
    clearTimeout();
  });

})();
