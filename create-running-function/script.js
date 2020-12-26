function volumeDuaBuahKubus1(a, b) {
  var volume1 = 1;
  var volume2 = 1;
  for (var i = 1; i <= 3; i++) {
    volume1 *= a;
    volume2 *= b;
  }

  return volume1 + volume2;
}

function volumeDuaBuahKubus2(a, b) {
  var loop = 0;
  var volume1 = 1;
  var volume2 = 1;
  var sisi = 3;
  while (loop < sisi) {
    volume1 *= a;
    volume2 *= b;
    loop++;
  }

  return volume1 + volume2;
}

function volumeDuaBuahKubus3(a, b) {
  var volume1, volume2;

  volume1 = a * a * a;
  volume2 = b * b * b;
  return volume1 + volume2;
}

function volumeDuaBuahKubus4(a, b) {
  var volume1, volume2;

  volume1 = Math.pow(a, 3);
  volume2 = Math.pow(b, 3);

  return volume1 + volume2;
}

function volumeDuaBuahKubusPaDhika(a, b) {
  var volumeA;
  var volumeB;
  var total;

  volumeA = a * a * a;
  volumeB = b * b * b;
  total = volumeA + volumeB;

  return total;
}

console.log(volumeDuaBuahKubusPaDhika(8, 3));
