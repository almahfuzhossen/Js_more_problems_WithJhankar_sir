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

const cart = [
    { name: 'laptop', price: 43000, quantity: 1 },
    { name: 'shirt', price: 500, quantity: 8 },
    { name: 'watch', price: 3680, quantity: 3 },
    { name: 'phone', price: 55000, quantity: 1 }
];
let cartTotal = 0;
for ( const product of cart){
    console.log(product);
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);