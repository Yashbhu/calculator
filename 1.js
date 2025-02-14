function calc() {
    let n1 = parseFloat(prompt('Pehla number daal:', ''));
    let n2 = parseFloat(prompt('Dusra number daal:', ''));
    let choice = prompt('Operation daal (+, -, *, /):', '');

    switch (choice) {
        case "*":
            alert(n1 * n2);
            break;
        case "/":
            n2 !== 0 ? alert(n1 / n2) : alert("Bhakk 10vi fail!");
            break;
        case "+":
            alert(n1 + n2);
            break;
        case "-":
            alert(n1 - n2);
            break;
        default:
            alert('Apki ganit khrb hai');
    }
}

calc();
