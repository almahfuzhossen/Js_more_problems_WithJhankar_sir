
var factorial = 1;
for (var i = 1; i <= 7; i++){
   
    factorial = factorial * i;
}
console.log(factorial);

// --------------
//----- factorial function----------

function GetFactorial (number){
  let factorial = 1;
  for( var i = 1; i <= number; i++){
      factorial = factorial * i;
  }
  return factorial;
}

var myFirstNum = 8;
var Result = GetFactorial(myFirstNum);
console.log('Our factorial Result Is ', Result)
// ------------

var mySecondNum = 5;
var Result = GetFactorial(mySecondNum);
console.log('our best factorial result is ', Result)
// ------------

function MyFactorial(number){
    let factorial = 1;
    let i = 1;
    while ( i <= number){
        factorial = factorial * i;
        return factorial;
    }
    
}

var result = MyFactorial(8);
console.log('here is my fact ', result)