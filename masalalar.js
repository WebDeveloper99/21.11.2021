// ________________________________________________________________________________
/*
cutIt(["ab","cde","fgh"])  return ["ab","cd","fg"];
cutIt(["abc","defgh","ijklmn"])  return ["abc","def","ijk"];
cutIt(["codewars","javascript","java"])  return ["code","java","java"];
*/

// const array = ["kas", "fagzsj", "bkjsdbc", "iuxah", "dsaaasd"];
// const arr = [];
// array.map((val) => {
//   array.sort((a, b) => {
//     return a.length - b.length;
//   });
// });

// let a = array[0].length;
// array.map((val) => {
//   return arr.push(val.slice(0, a));
// });

// console.log(arr);

// _______________________yangicha usul bilan qilingan sort________________________

// var arr=[1,2,3,66,4,5,6,100,999]
// arr.sort((a,b)=>{
//   if (a%2==b%2) return a-b;
//   if (a%2>b%2) return -1;
//   return 1;
// })
// console.log(arr)

// var array = [1, 2, 3, 4, 4, 5, 5, 6, 6];

// for (let i = 0; i < array.length; i++) {
//   if (array[i] == array[i + 1]) {
//     const arr = array.splice(i, array.length);
//     array = array.concat(arr.reverse())
//     break;
//   }
// }
// console.log(array);

// ________________________________________________________________________





// const array = ['a','a','a','a','a','a', 'c', 'b', 'c', 'b', 'c', 'e'];

// array.sort((a, b) => {

//     return arr = a.localeCompare(b);


// })

// console.log(array);

// for (let i = 0; i < array.length; i++) {

//     let n = 0;


//     for (let j = 0; j < array.length; j++) {

//         array[i] == array[j] && n++;

//     }

// console.log(`${n} ta ${array[i]} `);

// }



// const obj = (a, b = 0) => {

//     if (b == 0) {
//         return (b) => {
//             console.log(a + b);
//         }
//     }
//     console.log(a + b);
// }

// obj(1, 2);
// obj(1)(2);




// const user = {
//     a: 1,
//     b: 2,
//     getA() {

//         return this;
//     },
//     // getB() {
//     //     return this;
//     // },

// }
// let obj = user.getA().getB();

// console.log(obj);






// const user = {
//     a: 1,
//     b: 2,
//     getA() {

//         return this;
//     },

// getB() {
//     return console.log(`a:  ${this.a}   b :  ${this.b}`); 
// },






// let x = "";
// const myObj = {
//     name: "John",
//     age: 30,
//     cars: [
//         { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
//         { name: "BMW", models: ["320", "X3", "X5"] },
//         { name: "Fiat", models: ["500", "Panda"] }
//     ]
// }

// for (let i in myObj.cars) {
//     x += myObj.cars[i].name;
//     for (let j in myObj.cars[i].models) {
//         x += " _" + myObj.cars[i].models[j] + " _";
//     }
// }

// console.log(x);


// CALL VA APPLY metodlari -> bir obectga boshqa bir obect malumotlarini chaqirish un


// function fun() {
//     let p = {
//       fullName: function(addr1, addr2) {
//         return this.fName + " " + this.lName 
//               + ", " + addr1 + ", " + addr2 + ", " + this.gulName();
//       }
//     }

//     let p1 = {
//       fName:"GFGfName",
//       lName: "GFGlName",
//       gulName : function () {
//           return 0;
//       }
//     }

//     let x = p.fullName.call(p1, "India", "USA"); 
//     console.log(x);

//     }

// fun();






// const myObj = {
//     п: "John",
//     и: 30,
// }

// let a = myObj.lang;
// console.log(a);



// const myObj = {
//     name: "John",
//     age: 30,
//     cars: [
//         { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
//         { name: "BMW", models: ["320", "X3", "X5"] },
//         { name: "Fiat", models: ["500", "Panda"] }
//     ]
// }

// console.log(JSON.stringify(myObj));





const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(''));