// ------------------------- Fundamentals Part 1 ------------------------ //
// ------------------------- Values & Varaiables ------------------------ //

/* let js = "amazing";
console.log(40 + 8 - 10);

console.log("lam");
console.log(23 );

let firstName = "Lam";
console.log(firstName);

let country ="Sweden";
let contitnent ="Europe";
let population =11000000;
console.log(country, contitnent, population); */

// ------------------------------ Data Types ---------------------------- //

/* true;
let JavascriptIsFun = true;
console.log(JavascriptIsFun);

console.log(typeof true);
console.log(typeof JavascriptIsFun);
console.log(typeof 332);
console.log(typeof "string ");

JavascriptIsFun = "Yes!"
console.log(typeof JavascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1999;
console.log(typeof year);

console.log(typeof null); */

// ------------------------------ Operators ----------------------------- //


/* // Math Operators
const now = 2037;
const ageLam = now - 1999;
const ageQuan = now - 2018;
console.log(ageLam, ageQuan);

console.log(ageLam * 2, ageLam / 2, 2 ** 3);
// 2 ** 3 betyder 2 * 2 * 2, annat exempel 5 ** 5 är samma som 5 * 5 * 5 * 5 * 5 

const firstName = "Lam";
const lastName = "Ky";
console.log(firstName + " " + lastName); */

/* // Assignment operators - Uppdrags operatoprs
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x /= 2; // x = x / 2 = 50
x++; // stegar med 1 så 51
x--; // stegar ner 1 så 50
console.log(x); */

/* // Comparison operators
console.log(ageLam > ageQuan); // är Lam äldre/större än Quan? 
console.log(ageLam < ageQuan); // är Lam yngre/mindre än Quan? 
console.log(ageLam >= 38); // är Lam äldre/större eller lika med? 
console.log(ageLam <= 25); // är Lam yngre/mindre eller lika med? 

console.log(now - 1999 > now - 2018); */


/* // Precedence operator
const now = 2037;
const ageLam = now - 1999;
const ageQuan = now - 2018;

console.log(now - 1999 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const avrageAge = (ageLam + ageQuan) / 2;
console.log(ageLam, ageQuan, avrageAge); */


// ----------------------------- Challenge 1 ---------------------------- //

/* const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2; // 27.309968138370508
console.log (BMIMark);

const BMIJohn = massJohn / heightJohn ** 2; // 24.194608809993426
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log (markHigherBMI); */


// ------------------------- Strings & Template ------------------------- //


/* const firstName = "Lam";
const job = "feautre frontend developer"
const birthYear = 1999;
const year = 2024;

const lam = "I'm " + firstName + ", a " + (year - birthYear) + " years old and working as a " + job + "!";
console.log(lam);

const lamNew = `I'm ${firstName}, a ${year - birthYear} years old and working as a ${job}!`
console.log(lamNew);  */

// ------------------------ If / Else Statements ------------------------ //

/* const age = 15;

if (age >= 18) {
    console.log("Sara can start driving license");
} else {
    const yearLeft = 18 - age;
    console.log(`Sara is to young. wait another ${yearLeft} years ;)`);
}

const birthYear = 1999;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century); */

// ----------------------------- Challenge 2 ---------------------------- //

/* // const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2; // 27.309968138370508
console.log (BMIMark);

const BMIJohn = massJohn / heightJohn ** 2; // 24.194608809993426
console.log(BMIJohn);



// if (BMIMark > BMIJohn) {
//     console.log("Mark's BMI is higher than John's!");
// } else {
//     console.log("John's BMI is higher than Mark's!");
// }
// console.log();

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
console.log();  */

// -------------------- Type Conversion & Coercion ---------------------- //

/* // Type Conversion 
const inputYear = "1999";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Lam"));
console.log(typeof NaN);
console.log(String(23), 23);

// Type Coercion
console.log("I am " + 24 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");

let n = "1" + 1; // "11" i string så "1" i string blir 10?!?
n = n - 1;
console.log(n); */

// ----------------------- Truthy & Falsy Values ------------------------ //

// 5 falsy values: 0, "", undefined, null & NaN när man ska köra boolean

/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean("Lam"));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("don't spend it all");
}else {
    console.log("u should get a job");
}

let height = 0;
if (height) {
    console.log("Height is defined");
}else {
    console.log("height is undefined");
} */

// -------------------- Equality Operators == vs === -------------------- //

/* const age = "18";
if (age === 18) console.log("u just became 18 (strict)");

if (age == 18) console.log("u just became 18 (loose)");

const favo = Number(prompt("whats your number?"))
console.log(favo);
console.log(typeof favo);


if (favo === 23) {
    console.log("cool 23 is an amazing nr!");
} else if (favo === 7) {
    console.log("7 is also a cool nr");
} else if (favo === 9) {
    console.log("9 is also a cool nr");
}else {
    console.log("number is not 23 or 7 or 9");
}

if (favo !== 23) console.log("why not 23"); { 
    
} */

// ------------------------ Logical Operators --------------------------- //

/* const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // && betyder Och
console.log(hasDriversLicense || hasGoodVision); // || betyder eller
console.log(!hasDriversLicense ); // - ! betyder Not/inte

// if (hasDriversLicense && hasGoodVision;) {
//     console.log("sara is able to drive");
// } else {
//     console.log("someone else should drive"); 
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sara is able to drive");
} else {
    console.log("someone else should drive");
} */

// ----------------------------- Challenge 3 ---------------------------- //

/* const scoreDolphine = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110 ) / 3;
console.log(scoreDolphine, scoreKoalas);

if (scoreDolphine > scoreKoalas) {
    console.log("The WINNER is Dolphoine");
} else if (scoreKoalas > scoreDolphine) {
    console.log("The WINNER is Koalas");
} else if (scoreDolphine === scoreKoalas) {
    console.log("The Winner is Both");
}

const scoreDolphineBouns1 = (97 + 112 + 101) / 3;
const scoreKoalasBouns1 = (109 + 95 + 123) / 3;
console.log(scoreDolphineBouns1, scoreKoalasBouns1);

if (scoreDolphineBouns1 > scoreKoalasBouns1 && scoreDolphineBouns1 >= 100) {
    console.log("The WINNER is Dolphoine");
} else if (scoreKoalasBouns1 > scoreDolphineBouns1 && scoreKoalasBouns1 >= 100) {
    console.log("The WINNER is Koalas");
} else if (scoreDolphineBouns1 === scoreKoalasBouns1) {
    console.log("The Winner is Both");
}

const scoreDolphineBouns2 = (97 + 112 + 101) / 3;
const scoreKoalasBouns2 = (109 + 95 + 106) / 3;
console.log(scoreDolphineBouns2, scoreKoalasBouns2);

if (scoreDolphineBouns2 > scoreKoalasBouns2 && scoreDolphineBouns2 >= 100) {
    console.log("The WINNER is Dolphoine");
} else if (scoreKoalasBouns2 > scoreDolphineBouns2 && scoreKoalasBouns2 >= 100) {
    console.log("The WINNER is Koalas");
} else if (scoreDolphineBouns2 === scoreKoalasBouns2) {
    console.log("The Winner is Both");
}

const scoreDolphineBouns3 = (97 + 112 + 81) / 3;
const scoreKoalasBouns3 = (109 + 95 + 86) / 3;
console.log(scoreDolphineBouns3, scoreKoalasBouns3);

if (scoreDolphineBouns3 > scoreKoalasBouns3 && scoreDolphineBouns3 >= 100) {
    console.log("The WINNER is Dolphoine");
} else if (scoreKoalasBouns3 > scoreDolphineBouns3 && scoreKoalasBouns3 >= 100) {
    console.log("The WINNER is Koalas");
} else if (scoreDolphineBouns3 === scoreKoalasBouns3 && scoreKoalasBouns3 >= 100 && scoreDolphineBouns3 >= 100) {
    console.log("The Winner is Both");
} else {
    console.log("No one is the Winner");
} */

// ------------------------ The Switch Statemen ------------------------- //

/* const day = "saturday"; 

switch(day) {
    case 'monday': // day === monday
        console.log('plan course structure');
        console.log("Go to coding meetup");
    break;
    case 'tuesday':
        console.log('Prepare theory vidoes'); 
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Write code examples");
        break;
    case 'Friday': 
        console.log("Record Vidoes");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the Weekend");
        break;
    default:
        console.log("not a valid day");   
} */


/* if (day === 'monday') {
    console.log('plan course structure');
    console.log("Go to coding meetup");
} else if (day === 'tuesday') {
    console.log('Prepare theory vidoes'); 
} else if (day === 'wednesday' || day === 'thursday') {
    console.log("Write code examples");
} else if (day === 'friday') {
    console.log("Record Vidoes");
} else if (day === 'saturday' || day === 'sunday') {
    console.log("Enjoy the Weekend");
} else {
    console.log("not a valid day");
} */
// ------------------------- Statements & Expression ------------------------- //

// ----- Statements & Expression ----- //
/* // Expression
3 + 4
1999
true && false && !false */

/* // Statement
if (23 >10) {
    const str = '23 is bigger'
}
const me = "Lam"
console.log(`i'm ${2024 - 1999} years old ${me}`); */

// ------------------------- The Conditional (Ternary) Operator ------------------------- //

// Ternary Operator
/* const age = 23;
age >= 18 ? console.log('i like to drink wine'):
console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);


//if statement
let drink2;
if (age >= 18) {
    drink2 = 'wine';
}else {
    drink2 = 'water';
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
                                // båda funkar
console.log(`I like to drink ${drink}`);  */

// ------------------------- Challenge 4 ------------------------- //

/* const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill + tip} `); */

// ------------------------- End ------------------------ //

