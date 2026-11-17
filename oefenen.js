const titel = document.querySelector("h1");
titel.textContent = "Welkom op mijn website";
const kaart = document.querySelector(".kaart");
kaart.classList.add("uitgelicht");
const foto = document.querySelector("img");
foto.style.borderRadius = "50%";
const knop = document.querySelector("#wissel");

knop.addEventListener("click", function () {
    kaart.classList.toggle("uitgelicht");
});