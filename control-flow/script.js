var angka = null;
// while (angka === null) {
//   angka = parseInt(prompt("Masukkan angka :"));
//   while (isNaN(angka)) {
//     alert("Nilai harus angka");
//     angka = parseInt(prompt("Masukkan angka :"));
//   }
// }

// while (angka === null || isNaN(angka)) {
//   angka = parseInt(prompt("Masukkan angka : "));
//   if (isNaN(angka)) {
//     alert("Nilai harus angka");
//   }
// }

// while (angka === null || isNaN(angka)) {
//   angka = parseInt(prompt("Masukkan angka : "));
//   if (isNaN(angka)) {
//     alert("Nilai harus angka dan tidak boleh kosong ");
//   }
// }

while (angka === null || angka === "" || isNaN(angka)) {
  angka = prompt("Masukkan angka : ");
  if (!angka) {
    alert("Nilai harus diisi");
  } else {
    parseInt(angka);
    if (isNaN(angka)) {
      alert("Nilai harus angka");
    }
  }
}
if (angka % 2 === 0) {
  alert(angka + " bilangan genap");
} else {
  alert(angka + " bilangan ganjil");
}
