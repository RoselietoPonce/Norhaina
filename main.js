const container = document.querySelector(".card");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomPosition() {
  const cardRect = container.getBoundingClientRect();
  const btnRect = btnNo.getBoundingClientRect();

  let newTop = Math.random() * (cardRect.height - btnRect.height);
  let newLeft = Math.random() * (cardRect.width - btnRect.width);

  return { top: newTop, left: newLeft };
}

btnNo.addEventListener("mouseover", () => {
  const { top, left } = getRandomPosition();
  btnNo.style.top = `${top}px`;
  btnNo.style.left = `${left}px`;
});

btnYes.addEventListener("click", () => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
  window.location.href = "yes.html"; // Redirects to yes.html

  // 💖 Cute Confetti Effect
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  document.body.appendChild(confetti);
});
