function calcularIMC() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    var imc = peso / (altura * altura);

    document.getElementById("resultado").innerText = "Seu IMC é: " + imc.toFixed(2);
}
