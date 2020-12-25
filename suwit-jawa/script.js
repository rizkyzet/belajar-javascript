var tanya = true;

while (tanya) {
  var p = prompt("Pilih gajah, semut, orang");
  var comp = Math.random();
  var hasil = "";
  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  if (p == "gajah" || p == "semut" || p == "orang") {
    if (p == comp) {
      hasil = "SERI!";
    } else if (p == "gajah") {
      hasil = comp == "orang" ? "MENANG!" : "KALAH!";
    } else if (p == "semut") {
      hasil = comp == "gajah" ? "MENANG!" : "KALAH!";
    } else if (p == "orang") {
      hasil = comp == "semut" ? "MENANG!" : "KALAH!";
    }
    alert(`Anda Memilih : ${p}\nComputer Memilih : ${comp}\nHasil : ${hasil}`);
    tanya = confirm("Main lagi?");
  } else {
    alert(`Pilihan tidak sesusai`);
  }
}

alert("Terimakasih sudah bermain");
