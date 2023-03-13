const slogans = [
    "Art for art's sake",
    "L'art pour l'art",
    "Ars gratia artis",
    "Sanat için sanat",
]
var currentIndex = 0;
const sloganText = document.getElementById("slogan");

function cycleSlogans() {
    sloganText.innerHTML = "\"" + slogans[currentIndex] + "\"";
    currentIndex++;
    if (currentIndex >= slogans.length)
        currentIndex = 0;
}

cycleSlogans();
setInterval(cycleSlogans, 4000);