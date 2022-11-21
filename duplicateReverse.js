// const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];

// function removeDuplicate(names){
//     const unique = [];
//     for ( const element of names){
//         if(unique.indexOf(element) g== -1){
//             unique.push(element);
//         }
//     }
//     return unique;
// }

// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);

// ------- reverse -------------

// const greetings = 'Hello, how are you?';

// function reverseString(text){
//      let reverse = '';
//     for (const letter of text){
//         // console.log(letter);
//         reverse = letter + reverse;
//     }
//     return reverse;
// }

// ---- input parameter error -----

// function multiply (num1, num2){
//     const result = num1 * num2;
//     return result;
// }

// var multiplyNumber = multiply(23 * 22);
// console.log(multiplyNumber);
// -----
//  function AddNumber (num1 , num2){
//      const result = num1 + num2;
//      return result;
//  }

//  let addNumberCall = AddNumber( 23+23 , 234);
//  console.log(addNumberCall);

//  --------

// function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
//     const perChairWood = 3;
//     const perTableWood = 10;
//     const perBedWood = 50;
//     const chairWoodQuantity = perChairWood * chairQuantity;
//     const tableWoodQuantity = perTableWood * tableQuantity;
//     const bedWoodQuantity = perBedWood * bedQuantity;
//     const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
//     return totalWood;
// }

// let firstOption = woodCalculator(2, 5, 6);
// console.log(firstOption);

// --------Fo Bar Foobar ------

// for ( var i = 0; i <= 50; i++){
//     if ( i % 3 == 0 && i % 5 == 0){
//         console.log('foobar')
//     }
//     else if ( i % 3 == 0){
//         console.log('foo')
//     }
//     else if ( i % 5 == 0){
//         console.log('bar')
//     }
//     else {
//         console.log(i)
//     }

// }

// ----- lowest phone in an array --------

// const phones = [
//     { name: 'samsung s5', price: 45000, camera: 10, storage: 32 },
//     { name: 'walton m32', price: 15000, camera: 8, storage: 8 },
//     { name: 'shaomi m3', price: 12000, camera: 8, storage: 16 },
//     { name: 'oppo a2', price: 17000, camera: 8, storage: 32 },
//     { name: 'nokia n95', price: 8000, camera: 8, storage: 4 },
//     { name: 'htc h81', price: 25000, camera: 8, storage: 16 }
// ];

// let cheapest = phones[0];
// for ( const phone of phones){
//     if(phone.price < phone.cheapest){
//         cheapest = phone;
//     }
// }
// console.log(cheapest);

