var play = true;

while (play) {
  alert("Tebak angka dari 1-10\nkamu punya 3 kesempatan");
  var angka = Math.floor(Math.random() * 10 + 1);

  for (var kesempatan = 3; kesempatan >= 0; kesempatan--) {
    if (kesempatan == 0) {
      alert(`Anda kalah!\nAngka : ${angka}`);
      break;
    } else {
      var angkaAnda = parseInt(
        prompt(`Kesempatan anda : ${kesempatan}\nMasukkan angka : `)
      );
      if (angkaAnda === angka) {
        alert("Anda Benar");
        break;
      } else if (angkaAnda < angka) {
        alert("Terlalu Rendah");
      } else if (angkaAnda > angka) {
        alert("Terlalu Tinggi");
      } else if (!angkaAnda) {
        alert("Nilai harus sesuai dan tidak kosong");
        kesempatan++;
      }
    }
  }
  play = confirm("lagi?");
}

alert("Terimakasih sudah bermain!");
