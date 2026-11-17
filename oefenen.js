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
let aantal = 0;

document.querySelector("#tel").addEventListener("click", function () {
    aantal = aantal + 1;

    document.querySelector("#stand").textContent =
        aantal + " keer geklikt";
});