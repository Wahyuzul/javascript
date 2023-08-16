// //array
let employee = ["wahyu", "dwi", "prasetyo", "fahmi", 5];

//  for (let i = 0; i < employee.length; i++) {
//      console.log(employee[i]);
//      }
//employee.push("zul", "dames");
//employee.pop();
//employee.unshift("zul");
//employee.shift();
//employee.splice(0, 0, "zul");




//let employee2 = employee.slice(1,4);
//console.log(employee2.join(" - "));
//employee.forEach(function(e){
//     console.log(e);
// });
// angka.sort(function(a,b){
//     return b-a;
// });
// console.log(angka.join(" - "));
// });
// let angka = [6,5,1,2,4,10,7,8,9,0];
// let angka2 = angka.find(function(a){
//      return a > 5;
//  });
//  console.log(angka2);
// console.log(angka2.sort(function(a,b){
//     return a-b;
// }).join(" - ")); 

// //console.log(employee2.join(" - "));

// function getMonthName(month) {
//     const name = [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "Mei",
//       "Jun",
//       "Jul",
//       "Agt",
//       "Sep",
//       "Okt",
//       "Nov",
//       "Des"
//     ];
//     const result = month.map(function (m) {
//       return name[m];
//     });
//     return result;
//   }
  
//   const month = [1, 6, 7, 9];
//   console.log(getMonthName(month));

// menghitung sisa pemasukan
// const pemasukan = 1000000;
// const pengeluaran = [250000, 80000, 140000, 310000];

// const sisaPemasukan = pengeluaran.reduce(function (acc, curr) {
//   return acc - curr;
// }, pemasukan);
// // nilai variabel sisaPemasukan diambil dari hasil reduce array pengeluaran
// // acc adalah akumulator (accumulator)
// // nilai awal akumulator diambil dari argument kedua yaitu variabel pemasukan
// // curr adalah nilai elemen pada tiap iterasi

// console.log(sisaPemasukan); // 220000

// const animals = ["cat", "dog", "wolf"];

// console.log(animals.findIndex((animal) => animal === "bat")); // 0 --> mencari indeks cat dalam array animals
// console.log(animals.findIndex((animal) => animal === "pig")); // 1