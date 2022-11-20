var business = 350;
var minister = 450;
var army = 700;

// if( business > minister){
//     console.log('businees man er pola is bigger')
// }
// else (minister < business)
//     console.log('minister er pola is bigger')
// -------------------------

function findLargest( first , second){
      if ( first > second){
          return true;
      }
      return false;
}

var myNumber = findLargest ( 23 , 56);
console.log('the number is biggest than others ', myNumber)