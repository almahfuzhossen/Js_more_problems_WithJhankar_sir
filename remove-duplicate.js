const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];

function removeDuplicate(names) {
    const unique = [];
    for (let i =0; i< names.length; i++){
        const element = names[i];
        console.log(element);
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);