function insert(num) {
  let numero = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = numero + num;
  
}

function calcular() {
  let resultado = document.getElementById("resultado").innerHTML;

  if (resultado) {
    document.getElementById("resultado").innerHTML = eval(resultado)
  } else {
    document.getElementById("resultado").innerHTML = "Nada...";
  }
}

// função de linpeza

function clean() {
  document.getElementById("resultado").innerHTML = "";
}
