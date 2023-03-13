const SLOGANS = [
    "Art for art's sake",
    "L'art pour l'art",
    "Ars gratia artis",
    "Sanat için sanat",
]
const CYCLE_DUR = 4000;
const sloganText = $("#slogan");

var currentIndex = 0;

function cycleSlogans() {
    sloganText.fadeOut(function () {
        sloganText.html("\"" + SLOGANS[currentIndex] + "\"");
        setTimeout(500);
        sloganText.fadeIn();
    });

    currentIndex++;
    if (currentIndex >= SLOGANS.length)
        currentIndex = 0;
}

setTimeout(setInterval(cycleSlogans, CYCLE_DUR), CYCLE_DUR);