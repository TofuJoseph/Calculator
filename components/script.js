function toDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = "";
}

function calculate() {
    let expr = document.getElementById('display').value;
    let result = eval(expr)
    document.getElementById('display').value = result;
}