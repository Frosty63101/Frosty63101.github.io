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
    if (window.scrollY > 0) {
        totopButton.style.display = 'block';
        totopLabel.style.display = 'block';
    } else {
        totopButton.style.display = 'none';
        totopLabel.style.display = 'none';
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