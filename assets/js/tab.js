(function () {
  const tabs = document.querySelectorAll(".js-tab");
  const tabContents = document.querySelectorAll(".tab-content");
  console.log(tabs);
  if (!tabs) {
    return;
  }
  tabs.forEach((item) => {
    item.addEventListener("click", function (e) {
      tabs.forEach((el) => {
        el.classList.remove("active");
      });
      tabContents.forEach((content) => {
        content.classList.remove("active");
      });
      e.target.classList.add("active");
      const target = e.target.getAttribute("data-target");
      document.querySelector(target)?.classList.add("active");
    });
  });
})();
