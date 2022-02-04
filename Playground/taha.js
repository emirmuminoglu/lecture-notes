var MyName = "taha"

var x = 10
var y = 10
var sonuc = x + y
var sonuc2 = y - x // 5 
var sonuc3 = y * x // 50 
var sonuc4 = x / y // 3
var sonuc5 = x ** y // 75.665 
var sonuc6 = x == y // false 


if (sonuc5) {
    console.log(" x ve y esittir ")
}
else {
    console.log(" x ve y esit degil ")
}

if (x > y) {
    console.log(" x, y' den buyuktur ")
} else {
    console.log(" x, y ' den kucuktur")
}

if  ( x >=y ) {
    console.log (" x, y esit veya buyuktur" )
} else {
    console.log (" x, y' den kucuktur ")
}


const message = 'Hello World'
const mesajiKullaniciMesajiniYazdir = true

if (mesajiKullaniciMesajiniYazdir) {
  let geciciMesaj = message

  console.log(geciciMesaj)
}

var geciciMesaj = 'Gecici Mesaj'

console.log(geciciMesaj)

// Yazi olan degerleri tirnak icerisine almazsan onlari degisken olarak algilar
// Yazilari tirnak icerisinde almalusun
// Her degerin sonuna , koymalisin sonuncu hariç
const taha = { 
    adi: 'taha',
    soyadi:'ekinci',
    boy: 1.8,
    yas: 16
}
console.log(taha.boy)
   


