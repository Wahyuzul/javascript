// Array
/// soal 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//Sort the array and find the min and max age
ages.sort();
let min = Math.min(...ages);
let max = Math.max(...ages);
console.log(ages);
console.log("min of ages : " + min);
console.log("max of ages : " + max);

//Find the median age(one middle item or two middle items divided by two)
let median;
if (ages.length % 2 === 0) {
    median = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
} else {
    median = ages[Math.floor(ages.length / 2)];
}
console.log("median of ages : " + median);

//Find the average age(all items divided by number of items)
let average = ages.reduce((a, b) => a + b, 0) / ages.length;
console.log("average of ages : "+ Math.floor(average));

//Find the range of the ages(max minus min)
let range = Math.max(...ages) - Math.min(...ages);
console.log("range of min to max age : " + range);

//Compare the value of (min - average) and (max - average), use abs() method
average = Math.floor(average);
min - average;
max - average;
console.log("min - average age : " + Math.abs(min) + ", max - average age  : " + Math.abs(max));

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
 //Slice the first ten countries from the countries array
countries.slice(0,10).forEach(e => {
    console.log(e);
});

//Find the middle country(ies) in the countries array
let middle = Math.floor(countries.length / 2);
console.log("middle country : " + countries[middle]);

//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let countries1 = countries.slice(0,5);
let countries2 = countries.slice(5,10);
console.log(countries1.join(" - "));
console.log(countries2.join(" - "));
