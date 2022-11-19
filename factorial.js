
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