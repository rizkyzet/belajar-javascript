var teks = confirm("mulai?");
while (teks) {
  var makanan = prompt(
    "Masukkan nama makanan {cth: Nasi, Daging, Susu, Burger, Soto}"
  );

  switch (makanan) {
    case "Nasi":
      alert("Makanan Sehat!");
      break;
    case "Daging":
      alert("Makanan Sehat!");
      break;
    case "Susu":
      alert("Makanan Sehat!");
      break;
    case "Burger":
      alert("Makanan Sehat!");
      break;
    case "Soto":
      alert("Makanan Sehat!");
      break;
    default:
      alert("Makanan tidak ditemukan!");
      break;
  }

  teks = confirm("lagi?");
}
