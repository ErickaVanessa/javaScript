function verificador() {
  let data = new Date();
  let ano = data.getFullYear();
  let fano = document.getElementById("textano");
  let res = document.querySelector("div#res");

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERROR] Verifique os dados e tente novamente !");
  } else {
    let fsex = document.getElementsByName("radsex");
    let idade = ano - Number(fano.value);
    let genero = "";
    
    let img = document.createElement("img"); // criação da tag img no javaScript e enbaixo esta atribuindo um id
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "Homen";

      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute("src", "foto-bebe-m.png");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "foto-jovem-m.png");
      } else if (idade < 50) {
        // Adulto
        img.setAttribute("src", "foto-adulto-m.png");
      } else if (idade > 50) {
        // idoso
        img.setAttribute("src", "foto-idoso-m.png");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute("src", "foto-bebe-f.png");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "foto-jovem-f.png");
      } else if (idade < 50) {
        // Adulto
        img.setAttribute("src", "foto-adulto-f.png");
      } else if (idade > 50) {
        // idoso
        img.setAttribute("src", "foto-idoso-f.png");
      }
    }

    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img); // Atribuição da imagem
  }
}
