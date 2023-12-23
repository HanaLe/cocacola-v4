(function () {
  const modals = document.querySelectorAll("[data-modal]");
  if (!modals) {
    return;
  }
  modals.forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
      console.log("s");
      event.preventDefault();
      const modal = document.getElementById(trigger.dataset.modal);
      modal.classList.add("open");
      document.querySelector("main").classList.add("active");
      const exits = modal.querySelectorAll(".modal-exit");
      exits.forEach(function (exit) {
        exit.addEventListener("click", function (event) {
          event.preventDefault();
          modal.classList.remove("open");
          document.querySelector("main").classList.remove("active");
        });
      });
    });
  });
})();
