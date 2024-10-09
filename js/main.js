// logic variables
const kmPrice = 0.21;
const discount18 = 20;
const discount65 = 40;
const ageDiscount18 = 18;
const ageDiscount65 = 65;
let totalPrice;
let distance 
let age
let finalResult;

// html variables
const myForm = document.getElementById("calculator-form");
const myKms = document.getElementById("kms");
const myAge = document.getElementById("age");
const showResult = document.getElementById("result")


// logic
myForm.addEventListener("submit", function(event){

    event.preventDefault();

    console.log(myKms.value)
    distance = myKms.value;
    totalPrice = kmPrice * distance;
    age = myAge.value;

   if (age < ageDiscount18){
        totalPrice = totalPrice * discount18 / 100;
   } else if (age > ageDiscount65){
        totalPrice = totalPrice * discount65 / 100;
   }

   totalPrice = totalPrice.toFixed(2);

   showResult.classList.remove("d-none");
   showResult.innerHTML = `<div class="fw-bold fs-3">Incredibile, ti toccherà pagare addirittura ${totalPrice}£, è assurdo diventerai un senzatetto!!</div>`


});

