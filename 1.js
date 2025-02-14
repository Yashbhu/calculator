function calculate() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let choice = document.getElementById("operator").value;

    let result;
    switch (choice) {
        case "*":
            result = n1 * n2;
            break;
        case "/":
            result = n2 !== 0 ? n1 / n2 : "Bhakk 10vi fail!";
            break;
        case "+":
            result = n1 + n2;
            break;
        case "-":
            result = n1 - n2;
            break;
        default:
            result = 'Apki ganit khrb hai';
    }

    document.getElementById("result").innerText = result;
    console.log("Calculated Result:", result); // Debugging ke liye
}
