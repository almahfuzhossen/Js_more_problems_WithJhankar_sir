var student = { 
    id: 115, 
    name: 'Tom Khan', 
    class: 9, 
    marks: 98
};

var mobile = {
    brand: 'Samsung',
    price: 19000, 
    storage: '64gb',
    camera: '7MP'
};


var myComputer = {
    brand: 'lonovo',
    price: 39000,
    color: 'silver',
    processor: 'i7',
    storage: '500gb'
};
// ------------------------
// console.log(mobile);
// console.log(myComputer.processor);
// console.log(student.id);
// ---------------------------

// var computerPrice = myComputer.storage;
// console.log(computerPrice);
// ----
// var mobileProperty = mobile.price;
// console.log(mobileProperty);
// ----
// var studentProperty = student.name;
// console.log(studentProperty);
// ----

//-------set a object property value----------

//  myComputer.price = 45000;
//  console.log(myComputer);

//  ------------------
// myComputer['price']= 90000;
// console.log(myComputer);
// --
// mobile['price']= 23456;
// console.log(mobile);
// --
// student['id']= 23;
// console.log(student.id);
// --------------------
var storageProperty = 'storage';
myComputer[storageProperty]= '600gb';
console.log(myComputer);
// --
var branName = 'brand';
myComputer[branName] = 'samsung';
console.log(myComputer);
// --
var priceChange = 'price';
mobile[priceChange] = 23000;
console.log(mobile);
// --
var studentId = 'id';
student[studentId] = 34;
console.log(student);
