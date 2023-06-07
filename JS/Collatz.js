function Collatz() {
    var input = document.getElementById("collatzIn").value;
    var out = '';

    while (input !== 1) {
        if (input % 2 === 0) {
            input = input / 2;
        }
        else {
            input = (((3 * input) + 1) / 2);
        }
        out++;
    }
    document.getElementById("collatzOut").value = out;
}