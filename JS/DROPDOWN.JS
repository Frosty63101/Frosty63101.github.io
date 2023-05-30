function info() {
    var dropAddX = document.getElementById("dropAdd");
    var x = document.getElementById("dropdown");
    if (x.style.display === "none") {
      x.style.display = "block";
      dropAddX.style.display = "block";
    } else {
      x.style.display = "none";
      dropAddX.style.display = "none";
    }
}

window.addEventListener('DOMContentLoaded', function() {
    var drop = document.getElementById("dropdown");
    var dropAdd = document.getElementById("dropAdd");
    dropAdd.style.display = "none";
    drop.style.display = "none";
});