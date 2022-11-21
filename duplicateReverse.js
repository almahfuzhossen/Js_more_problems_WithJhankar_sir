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

const greetings = 'Hello, how are you?';

function reverseString(text){
     let reverse = '';
    for (const letter of text){
        // console.log(letter);
        reverse = letter + reverse;
    }
    return reverse;
}

const reversed = reverseString(greetings);
console.log(reversed);