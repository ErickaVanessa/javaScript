// defini gual numero e inpar ou par

function parimp(n) {
  if (n % 2 == 0) {
    return "par";
  } else {
    return "inpar";
  }
}

let res = parimp(11);
console.log(res)
