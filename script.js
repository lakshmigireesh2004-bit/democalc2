function display(val) {
    document.getElementById('result').value += val;
}

function clearScreen() {
    document.getElementById('result').value = '';
}

function calculate() {
    var p = document.getElementById('result').value;
    var q = eval(p);
    document.getElementById('result').value = q;
}

function deleteChar() {
    var p = document.getElementById('result').value;
    document.getElementById('result').value = p.substring(0, p.length - 1);
}