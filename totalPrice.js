const products = [ 
    { name: 'laptop', price: 43000},
    { name: 'watch', price: 5000},
    { name: 'phone', price: 45000},
    { name: 'shirt', price: 4500},
];
let totalPrice = 0;
for (const product of products){
    totalPrice = totalPrice + product.price;
}
// console.log(totalPrice);