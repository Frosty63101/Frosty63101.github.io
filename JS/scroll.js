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
    var x = document.getElementById("dropdown");
    if (window.scrollY > 0) {
        totopButton.style.display = 'block';
        totopLabel.style.display = 'block';
        elementH.style.left = '1150px';
        elementH.style.marginRight = '-200px';
        dropAdd.style.display = "none";
    } else {
        totopButton.style.display = 'none';
        totopLabel.style.display = 'none';
        elementH.style.left = '10px';
        elementH.style.marginRight = '950px';
        if(x.style.display !== "none"){
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