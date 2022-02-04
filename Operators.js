var x = 15;
var y = 5;

// cebir operatorleri

// toplama
var sonuc = x + y

// cikarma
var sonuc1 = x - y // 10

// carpma
var sonuc2 = x * y // 75

// bolme
var sonuc3 = x / y // 3

// us alma
var sonuc4 = x ** y // 75,9375

// karsilastirma operatorleri
// boolean
var sonuc5 = x == y // false

// eger sonuc 5 dogruysa
/*if (sonuc5) {
    // bunu
    console.log("x ve y esittir")
    // degilse
} else {
    // bunu
    console.log("x ve y esit degil")
}*/

// var sonuc6 = x != y
// console.log(sonuc6)
// if (sonuc6) {
//     console.log("x ve y esit degil")
// } else {
//     console.log("x ve y esittir")
// }

// if (x != y) {
//     console.log("x ve y esit degildir")
// } else {
//     console.log("x ve y esittir")
// }

// if (x > y) {
//     console.log("x, y'den buyuktur")
// } else {
//     console.log("x, y'den kucuktur")
// }

// if (x >= y) {
//     console.log("x, y esit veya buyuktur")
// } else {
//     console.log("x, y'den kucuktur")
// }

var yas1 = 15;
var yas2 = 20;
var yas3 = 18;
var resitlikYasi = 18

if (yas1 >= resitlikYasi) { // 15
  console.log("yas1 resit")
} else {
  console.log("yas1 resit degil")
}

if (yas2 >= resitlikYasi) { // 20
  console.log("yas2 resit")
} else {
  console.log("yas2 resit degil")
}


var hello = "hello ";
var world = "world"

console.log(hello + world) // NaN: Not a Number