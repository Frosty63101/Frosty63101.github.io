function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({
        behavior: "smooth"
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function() {
    var totopButton = document.getElementById('totop');
    var totopLabel = document.querySelector('.toplabel');
    var elementH = document.getElementById("header");
    var dropAdd = document.getElementById("dropAdd");
    var headMove = document.getElementById("headMove");
    var x = document.getElementById("dropdown");
    if (window.scrollY > 0) {
        totopButton.style.display = 'block';
        totopLabel.style.display = 'block';
        elementH.style.left = '65%';
        elementH.style.marginRight = '-13%';
        dropAdd.style.display = "none";
        headMove.style.display = "none";
    } else {
        totopButton.style.display = 'none';
        totopLabel.style.display = 'none';
        elementH.style.left = '2%';
        elementH.style.marginRight = '63%';
        headMove.style.display = "block";
        if (x.style.display !== "none") {
            dropAdd.style.display = "block";
        }
    }
});

window.addEventListener('DOMContentLoaded', function() {
    var totopButton = document.getElementById('totop');
    var totopLabel = document.querySelector('.toplabel');
    if (window.scrollY === 0) {
        totopButton.style.display = 'none';
        totopLabel.style.display = 'none';
    }
});
