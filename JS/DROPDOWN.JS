function info() {
    var x = document.getElementById("dropdown");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

window.addEventListener('DOMContentLoaded', function() {
    var drop = document.getElementById("dropdown");
    drop.style.display = "none";
});