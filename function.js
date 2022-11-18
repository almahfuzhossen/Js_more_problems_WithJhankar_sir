 function bringPizza (taka){
     console.log('pizza r jonne dise', taka);
     console.log('mama pizza den');
     var pizzaPrice = 50;
     pizzaQuantity = taka / pizzaPrice;
     return pizzaQuantity;
 }
 var money = 500;
 var pizza = bringPizza(money);
 console.log('ei nen pizza', pizza);