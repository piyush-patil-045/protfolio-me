document
  .getElementById("about-me-button")
  .addEventListener("click", function () {
    const modal = document.getElementById("modal");
    const modalBox = document.getElementById("modal-box");

    modal.classList.remove("hidden");
    modalBox.classList.add("modal-enter");
    requestAnimationFrame(() => {
      modalBox.classList.add("modal-enter-active");
    });
  });

document
  .getElementById("close-modal-btn")
  .addEventListener("click", function () {
    closeModal();
  });

document
  .getElementById("modal-background")
  .addEventListener("click", function () {
    closeModal();
  });

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
}

document
  .getElementById("latest-works-btn")
  .addEventListener("click", function () {
    const section = document.getElementById("latest-works-section");

    section.scrollIntoView({ behavior: "smooth" });
  });

document.getElementById("to-top").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const downloadLink = document.querySelector("a[download]");
downloadLink.addEventListener("click", function () {
  alert("Your download is starting!");
});
