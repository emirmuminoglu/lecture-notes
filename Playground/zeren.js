let myName = "zeren ipek";
var x = 13;
const myAge = 16;
var y = 6;
var z = 3;

var result = x + y;

var result1 = x - y;

var result2 = x * y;

var result3 = x / y;

var result4 = x ** y;

var MBoolean = true;
var MBoolean1 = false;

var result5 = x == y; // false
var result6 = x + z == myAge; // true

console.log(result6);


if (result5) {
    console.log("x ve y esit")
}
else {
    console.log("x ve y esit degil")
}

var result7 = x != y
console.log(result7)
if (result7) {
    console.log("x ve y esit degil")
} else {
    console.log("x ve y esittir")
}


if (x > myAge) {
    console.log("x, 16dan buyuktur")
} else {
    console.log("x, 16'dan kucuktur")
}

if (x >= z) {
    console.log("x, z esit veya buyuktur")
} else {
    console.log("x, z'den kucuktur")
}
