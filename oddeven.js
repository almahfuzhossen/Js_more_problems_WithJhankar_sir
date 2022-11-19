function isEven(number){
    if (number % 2 == 0){
        return true;
    }
    return false;
}

var myNumber = 222;
var isMyNumber = isEven(myNumber);
console.log('my number is', isMyNumber);
// -----------
var herNumber = 255;
var isHerNumber = isEven(herNumber);
console.log('her number is', isHerNumber);
// -----------

function isOdd(number){
    if (number % 2 == 1){
        return true;
    }
    return false;
}

var myFirstNum= 257;
var numberCheck = isOdd(myFirstNum);
console.log('my number is', numberCheck);
// ----
var mySecondNum = 230;
var numberCheck = isOdd(mySecondNum);
console.log('My second number is', numberCheck);
// ----
// -------leap year------

function LeapYear(year){
    if (year % 4 == 0){
        return true;
       
    }
    else{
        return false;
    }
}

var myYear= 2028;
var isYearLeap = LeapYear(myYear);
console.log('is this year leap', isYearLeap)
// -----
var anikaYear = 33455;
var isYearLeap = LeapYear(anikaYear);
console.log('is this year leap', isYearLeap)
// -----