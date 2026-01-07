let display = document.getElementById("display");

function adicionar(numero) {
  display.value += numero;
}
 function limpar() {
    display.value = "";
  }

  function calcular() {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Erro";
    }
  }