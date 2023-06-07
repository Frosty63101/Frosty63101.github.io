document.getElementById("toggleButton").addEventListener(
    "change",
    function() {
        var img = document.getElementById("totop");
        document.body.classList.toggle(
            "modified-background");
        document.body.classList.toggle(
            "modified-text");
        topspan.classList.toggle(
            "modified-text");
        spantoggle.classList.toggle(
            "modified-text");
        rainbowToggleSpan.classList.toggle(
            "modified-text");

        var isModifiedBackground = document.body
            .classList.contains(
            "modified-background");
        var isModifiedText = document.body.classList
            .contains("modified-text");

        if (isModifiedText === true) {
            img.src = "../IMAGES/up.png";
        }
        else {
            img.src = "../IMAGES/up 2.png";
        }

        localStorage.setItem("backgroundModified",
            isModifiedBackground);
        localStorage.setItem("textModified",
            isModifiedText);
});

window.addEventListener("DOMContentLoaded", function() {
    var isModifiedBackground = localStorage
        .getItem("backgroundModified");
    var isModifiedText = localStorage.getItem(
        "textModified");
    var toggle = document.getElementById("toggleButton");
    var img = document.getElementById("totop");
    
    if (isModifiedBackground === "true") {
        document.body.classList.add(
            "modified-background");
        toggle.checked = true;
    }
    if (isModifiedText === "true") {
        document.body.classList.add(
            "modified-text");
        topspan.classList.add(
            "modified-text");
        spantoggle.classList.add(
            "modified-text");
        img.src = "../IMAGES/up.png";
        rainbowToggleSpan.classList.add(
            "modified-text");
        
    }
    else {
        img.src = "../IMAGES/up 2.png";
    }
    
});