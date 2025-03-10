// Lyt efter 'DOMContentLoaded' eventet
window.addEventListener("DOMContentLoaded", () => {
  // Hvis brugeren er kommet tilbage fra en anden side, kør kun gameStart()
  if (sessionStorage.getItem("returningFromPage") === "true") {
    sessionStorage.removeItem("returningFromPage"); // Fjern flaget
    gameStart();
    document.querySelector("#loading").classList.add("none");
    document.getElementById("loading-dots").classList.add("none");
     // Kald gameStart() når brugeren kommer tilbage
  } else {
    start(); // Kald start() første gang vi er på index.html
  }
});

// Funktionen til at håndtere den første indlæsning på index.html
function start() {
  document.querySelector(".start").classList.add("none");
  document.querySelector(".option-one").classList.add("none");
  document.querySelector(".option-two").classList.add("none");
  document.querySelector(".option-three").classList.add("none");
  document.querySelector(".option-four").classList.add("none");
  document.querySelector(".contact-container").classList.add("none");

  setTimeout(() => {
    document.querySelector(".start").classList.remove("none");
    document.querySelector("#loading").classList.add("none");
    document.querySelector(".contact-container").classList.remove("none");
  }, 3000);

  // Når start-knappen bliver klikket, start spillet
  document.querySelector(".start").addEventListener("click", gameStart);
}

// Funktionen til at starte spillet
function gameStart() {
  document.getElementById("loading-dots").classList.remove("none");
  document.querySelector(".start").classList.add("none");

  setTimeout(() => {
    document.querySelector(".option-one").classList.remove("none");
    document.querySelector(".option-two").classList.remove("none");
    document.querySelector(".option-three").classList.remove("none");
    document.querySelector(".option-four").classList.remove("none");
    document.getElementById("loading-dots").classList.add("none");
  }, 2000);
}

// Håndtering af 'Back'-knappen på de andre sider
document.getElementById("back-button")?.addEventListener("click", () => {
  // Når brugeren klikker på back-knappen, sæt et flag i sessionStorage
  sessionStorage.setItem("returningFromPage", "true");

  // Send brugeren tilbage til index.html
  window.location.href = "/index.html";
});

/* Reset */