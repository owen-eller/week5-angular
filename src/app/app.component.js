const duplicateButtons = document.querySelectorAll(".duplicateButton");
const originalCard = document.querySelector(".container[data-card='1']");
const toggleColorButton = document.querySelector(".toggleColorButton");
const changeTitleButton = document.querySelector(".changeTitleButton");
const deleteCardButton = document.querySelector(".deleteCardButton");
const toggleDescriptionButtons = document.querySelectorAll(".toggle-button");

duplicateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cards = document.querySelectorAll(".container");
    const clone = cards[0].cloneNode(true);
    clone.querySelector(".toggle-button").classList.remove("hidden");
    document.querySelector(".wrapper").appendChild(clone);

    const toggleDescriptionButton = clone.querySelector(".toggle-button");
    const cardDescription = clone.querySelector(".description");
    toggleDescriptionButton.addEventListener("click", () => {
      cardDescription.classList.toggle("hidden");
    });
  });
});

toggleColorButton.addEventListener("click", () => {
  originalCard.classList.toggle("bg-toggle");
});

changeTitleButton.addEventListener("click", () => {
  const cardTitle = originalCard.querySelector(".card-title");
  cardTitle.textContent = "something else";
});

deleteCardButton.addEventListener("click", () => {
  const cards = document.querySelectorAll(".container");
  if (cards.length > 1) {
    const lastCard = cards[cards.length - 1];
    lastCard.remove();
  }
});

toggleDescriptionButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const cardDescriptions = document.querySelectorAll(".description");
    cardDescriptions[index].classList.toggle("hidden");
  });
});
