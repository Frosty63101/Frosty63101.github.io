function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const whileToggle = false;
const toggle = document.getElementById(rainbowToggle);


async function COLORS() {
    var body = document.getElementById("body");

do {
        body.style.color = "#ff0000"
        await delay(10);
        body.style.color = "#ffa500"
        await delay(10);
        body.style.color = "#ffff00"
        await delay(10);
        body.style.color = "#008000"
        await delay(10);
        body.style.color = "#0000ff"
        await delay(10);
        body.style.color = "#4b0082"
        await delay(10);
        body.style.color = "#ee82ee"
        await delay(10);
} while (whileToggle === true);
}