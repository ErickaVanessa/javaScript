let Agora= new Date()

let hora = Agora.getHours();
console.log(`Agora são exatamente ${hora}horas`);

if (hora < 12) {
  console.log("bom dia");
} else if (hora <= 18) {
  console.log("Boa tarde ");
} else {
  console.log("Boa NOite ");
}
