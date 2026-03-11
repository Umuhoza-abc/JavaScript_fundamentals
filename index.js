let country = "Rwanda" // global variable scope 

function DisplayCountry () {
    console.log(country)
}

DisplayCountry()


function greetings() {  //functional scope (local variables)

    let name = "John"
    console.log("hello"  +   name)
}

greetings()


if (true) {      // block 
    let age = 20
    console.log("My age is " + age)
}

// mathematical operators 

let itemPrice = 25;
let tax = 5;

let total = itemPrice * tax;

console.log (total)

// substraction

let total2 = itemPrice - tax
console.log (total2)

//division

let total3 = itemPrice / tax
console.log (total3)

// sum

let total4 = itemPrice + tax
console.log (total4)
 // power 

 let total5 = itemPrice ** tax
 console.log (total5)


 // exercise 

 let flourWeight = 500;
 let sugarWeight = 200;
// Q1
 let totalWeight = flourWeight + sugarWeight
 console.log(totalWeight + "g")

 // Q2

 let totalWeight1 = totalWeight /3 
 console.log(totalWeight1)

 //Q3   

 let totalWeight2 = totalWeight ** 3
 console.log(total2)

let score = 50;

score += 10;

let bankBalance = 1000;
// 1

bankBalance += 500
console.log(bankBalance);

//2 
bankBalance -= 150
console.log(bankBalance)

//3 

bankBalance *= 2

console.log(bankBalance)

// 


let userAge = 18;

console.log(userAge === 21)
console.log(userAge >= 18)
console.log(userAge !== 13)


// AND / OR / 

let hasTicket = true;
let isVip = false;

// AND operator : if one condition fails all things fail

console.log(hasTicket && isVip); // both conditions must beb true

// OR operator : at least one condition must be true

console.log(hasTicket || isVip);

// NOT

let isNotLoggedIn = true;
console.log(!isNotLoggedIn)

let cartTotal = 120;
let isPremiumMember = true;
let hasDiscountCode = false;
let isFraudulent = false;

console.log(cartTotal > 100 && isPremiumMember && !isFraudulent)