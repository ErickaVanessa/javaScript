function verificador() {
  let data = new Date()
  let ano = data.getFullYear()
  let fano = document.getElementById('textano')
  let res = document.querySelector('div#res')

  if(fano.value.length == 0 || Number(fano)){
    window.alert('[ERROR] Verifique os dados e tente novamente !')
  }else{
    let fsex = document.getElementsByName('radsex')
    let idade = ano - Number(fano.value)
    let genero = ''

    if(fsex[0].checked){
      genero='Homen'
    }else if(fsex[1].checked){
      genero='Mulher'
    }
  }

}
