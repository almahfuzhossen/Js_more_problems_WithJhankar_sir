// var business = 350;
// var minister = 450;
// var army = 700;

// if( business > minister){
//     console.log('businees man er pola is bigger')
// }
// else (minister < business)
//     console.log('minister er pola is bigger')
// -------------------------

// function findLargest( first , second){
//       if ( first > second){
//           return true;
//       }
//       return false;
// }

// var myNumber = findLargest ( 23 , 56);
// console.log('the number is biggest than others ', myNumber)

// ------ sum calculation in array---------

function ArrayTotal (numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
   }
     return sum;
 }
   
    var total = ArrayTotal([34, 565, 35]);
    console.log('sum of an array total ', total)