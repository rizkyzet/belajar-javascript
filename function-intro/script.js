//function declaration
function jumlahDuaBilanganDec(a, b) {
  var total;

  total = a + b;
  return total;
}

console.log(jumlahDuaBilanganDec(100, 2));

//function expression
var jumlahDuaBilanganEx = function (a, b) {
  var total;

  total = a + b;
  return total;
};

console.log(jumlahDuaBilanganEx(1, 2));

function rekursif(a) {
  a += a;
  return a;
}

console.log(rekursif(rekursif(1)));
