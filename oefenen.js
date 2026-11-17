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
document.querySelector("#groet").addEventListener("click", function () {
    const oefening = document.querySelector("#invoer").value.trim();

    if (oefening === "") {
        document.querySelector("#uitvoer").textContent =
            "Vul eerst een oefening in.";
        return;
    }

    const item = document.createElement("li");

    item.textContent = oefening;

    document.querySelector("#lijst").append(item);

    document.querySelector("#invoer").value = "";

    document.querySelector("#uitvoer").textContent = "";
});

document.querySelector("#wissen").addEventListener("click", function () {
    document.querySelector("#lijst").replaceChildren();
});