function inchToFeet(inches){
var feet = inches / 12;
return feet;
}



var myInches = 132;
var feet = inchToFeet(myInches);
console.log('my inches to feet', feet);

var dadaInches = 142;
var feet = inchToFeet(dadaInches);
console.log('dada inches to feet', feet);

var dadiInches = 152;
var feet = inchToFeet(dadiInches);
console.log('dadi inches to feet', feet);

var nanaInches = 162;
var feet = inchToFeet(nanaInches);
console.log('nana inches to feet', feet);
// ---------------------------------------
// ----------Miles To Km--------------

function milesToKm(miles){
    var km = miles * 1.60934;
    return km;
}

var marathon = 125;
var myKm = milesToKm(marathon);
console.log('marathon miles to km', myKm);
// --

var malacha = 23;
var mala = milesToKm(malacha);
console.log('malacha r miles to km', mala);