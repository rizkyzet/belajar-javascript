var string = "";

// for (var i = 0; i < 5; i++) {
//   string += "*";
// }
// console.log(string);

// for (var i = 1; i <= 5; i++) {
//   for (var j = 1; j <= i; j++) {
//     string += j;
//   }
//   string += "\n";
// }
// console.log(string);

// *****
// *****
// *****
// *****
// *****
// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j < 5; j++) {
//     string += "*";
//   }
//   string += "\n";
// }

// console.log(string);

// *
// **
// ***
// ****
// *****
// for (var i = 0; i < 15; i++) {
//   for (var j = 0; j <= i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// *****
// ****
// ***
// **
// *
// for (var i = 5; i > 0; i--) {
//   for (var j = 0; j < i; j++) {
//     string += "*";
//   }

//   string += "\n";
// }

// console.log(string);

// *****
//  ****
//   ***
//    **
//     *

// for (var i = 0; i < 5; i++) {
//   for (var s = 0; s < i; s++) {
//     string += " ";
//   }
//   for (var j = 5; j > i; j--) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

//segitiga sama kaki

// for (var i = 0; i < 20; i++) {
//   for (var z = 20; z > i; z--) {
//     string += " ";
//   }
//   for (var j = 0; j <= i; j++) {
//     string += "*";
//   }

//   for (var y = 0; y < i; y++) {
//     string += "*";
//   }

//   string += "\n";
// }
// console.log(string);

//segitiga sama kaki terbalik
// for (var i = 10; i >= 0; i--) {
//   for (var z = 10; z > i; z--) {
//     string += " ";
//   }
//   for (var j = 0; j <= i; j++) {
//     string += "*";
//   }

//   for (var y = 0; y < i; y++) {
//     string += "*";
//   }

//   string += "\n";
// }
// console.log(string);

// diamond
for (var i = 0; i < 10; i++) {
  for (var z = 10; z > i; z--) {
    string += " ";
  }
  for (var j = 0; j <= i; j++) {
    string += "*";
  }

  for (var y = 0; y < i; y++) {
    string += "*";
  }

  string += "\n";
}
for (var i = 10; i >= 0; i--) {
  for (var z = 10; z > i; z--) {
    string += " ";
  }
  for (var j = 0; j <= i; j++) {
    string += "*";
  }

  for (var y = 0; y < i; y++) {
    string += "*";
  }

  string += "\n";
}
console.log(string);
