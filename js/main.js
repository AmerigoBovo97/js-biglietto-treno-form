// logic variables
const kmPrice = 0.21;
const discount18 = 20;
const discount65 = 40;
const ageDiscount18 = 18;
const ageDiscount65 = 65;
let totalPrice;
const distance = 0;
const age = 0;
let finalResult;

// html variables
const myForm = document.getElementById("calculator-form");
const myKms = document.getElementById("mks");
const myAge = document.getElementById("age");


// logic
 
myForm.addEventListener("submit", function(event){

    event.preventDefault();

    distance = myKms.value;
    totalPrice = kmPrice * distance;
    age = myAge.value;

   if (age < ageDiscount18){
        totalPrice = totalPrice * discount18 / 100;
   } else if (age > ageDiscount65){
        totalPrice = totalPrice * discount65 / 100;
   }

   totalPrice = totalPrice.toFixed(2)

});
