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