// segment 1
/// exercise 1
//// soal 1

let age = prompt ("Enter your age:");
if (age >= 18) {
    alert("You are old enough to drive");
} else {
    alert("You are left with " + (18 - age) + " years to drive");
}

//// soal 2

let myAge = prompt ("Enter your age:");
let yourAge = prompt ("Enter your age:");
if (myAge > yourAge) {
    alert("I am " + (myAge - yourAge) + " years older than you");
} else if (myAge < yourAge) {
    alert("You are " + (yourAge - myAge) + " years older than me");
} else {
    alert("We have the same age");
}

//// soal 3

let a = prompt ("Enter number a:");
let b = prompt ("Enter number b:");
let result = (a > b) ? "a is greater than b" : "a is less than b";
result = (a == b) ? "a is equal to b" : result;
alert(result);

//// soal 4

let number = prompt ("Enter a number:");
if (number % 2 == 0) {
    alert(number + " is an even number");
} else {
    alert(number + " is an odd number");
}

/// exercise 2
//// soal 1

let grade = prompt ("Enter your grade:");
if (grade >= 90) {
    alert("A");
}
else if (grade >= 70) {
    alert("B");
}
else if (grade >= 60) {
    alert("C");
}
else if (grade >= 50) {
    alert("D");
}
else {
    alert("E");
}

//// soal 2
let season = prompt ("Enter a month:").toLowerCase();
switch (season) {
    case "september":
    case "october":
    case "november":
        alert("The season is Autumn");
        break;
    case "december":
    case "january":
    case "february":
        alert("The season is Winter");
        break;
    case "march":
    case "april":
    case "may":
        alert("The season is Spring");
        break;
    case "june":
    case "july":
    case "august":
        alert("The season is Summer");
        break;
    default:
        alert("Invalid month");
        break;
}

/// exercise 3
//// soal 1

let month = prompt("Enter a month:").toLowerCase();

if(month == "january"){
    alert("January has 31 days");
}else if(month == "february"){
    alert("February has 28 days");
}else if(month == "march"){
    alert("March has 31 days");
}else if(month == "april"){
    alert("April has 30 days");
}else if(month == "may"){
    alert("May has 31 days");
}else if(month == "june"){
    alert("June has 30 days");
}else if(month == "july"){
    alert("July has 31 days");
}else if(month == "august"){
    alert("August has 31 days");
}else if(month == "september"){
    alert("September has 30 days");
}else if(month == "october"){
    alert("October has 31 days");
}else if(month == "november"){
    alert("November has 30 days");
}else if(month == "december"){
    alert("December has 31 days");
}else{
    alert("Invalid month");
}
