// parameter dan argumen
// function tambah(a, b) {
//   return a + b;
// }

// function kali(a, b) {
//   return a * b;
// }

// var a = parseInt(prompt("Masukkan nilai 1 : "));
// var b = parseInt(prompt("Masukkan nilai 2 : "));
// var hasil = tambah(a, b);
// console.log(hasil);

// var hasil = kali(tambah(1, 2), tambah(3, 4));
// console.log(hasil);

//variabel argumen di function

function tambah() {
  var hasil = 0;
  for (i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}

console.log(tambah(1, 2, 3));
