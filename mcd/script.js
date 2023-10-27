function calcularMCD() {
    
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);

    
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingrese dos números válidos.");
        return;
    }

    var mcd = euclides(numero1, numero2);
    
    document.getElementById("resultado").innerHTML = "El MCD de " + numero1 + " y " + numero2 + " es: " + mcd;
}

function euclides(a, b) {
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}