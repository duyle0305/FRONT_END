// const arrNum = [99, 9, 1, 2, 3, 4, 5, 6, 7, 8];

// // Assignment 2
// const arrNumReduce = arrNum.reduce(function (total, next) {
//   return (total += next);
// }, 0);
// console.log("Tính tổng các phần tử: " + arrNumReduce);

// const arrNumSort1 = arrNum.sort((a, b) => a - b);
// console.log("Sắp xếp từ bé -> lớn: " + arrNumSort1);

// const areaArrNum = arrNum.map((length) => length * length);
// console.log("Bình phương các phần tử: " + areaArrNum);

// const arrMap = arrNum.map(function (num) {
//   if (num % 2 === 0) {
//     return num;
//   }
// });

// const arrFilter = arrNum.filter(function (num) {
//   if (num % 2 === 0) {
//     return num;
//   }
// });

// console.log(arrMap);
// console.log(arrFilter);

// const arrNumSort2 = arrNum.sort((a, b) => b - a);
// console.log("Sắp xếp từ lớn -> bé: " + arrNumSort2);

// // Assignment 3
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let user = [john, pete, mary];

// let names = [];
// for (user of user) {
//   names.push(user.name);
// }
// console.log(names.join(", "));

// // Assignment 4
// const arrA = [1, 2, 3];
// const arrB = [9, 8, 7];
// const arrC = arrA.concat(arrB);
// console.log(arrC);

// // Assignment 5
// const number = [1, 2, 3, 4, 5];
// console.log(number.join("-"));

// // Assignment 6: Viết chương trình lấy phần tử đầu tiên của mảng khi truyền vào parameter "n" và sẽ trả về n phần tử đầu tiên
// const arrNum1 = [0, 1, 2, 3, -4];
// console.log(arrNum1.slice(0, 1));

// function func(arrNum2, n) {
//   // Nếu mảng arr rỗng
//   if (n === 0) {
//     // Trả về một mảng rỗng
//     return [];
//   } else {
//     // Trả về một mảng mới chứa n phần tử đầu tiên của mảng arr
//     return arrNum2.slice(0, n);
//   }
// }
// console.log(func([], 3)); // Kết quả: []

// function func(arrNum3, n) {
//   // Trả về một mảng mới chứa n phần tử đầu tiên của mảng arr
//   return arrNum3.slice(0, n);
// }
// console.log(func([0, 1, 2, 3, -4], 3)); // Kết quả: [0, 1, 2]

// function func(arrNum4, n) {
//   // Nếu n nhỏ hơn hoặc bằng 0
//   if (n <= 0) {
//     // Trả về một mảng rỗng
//     return [];
//   } else {
//     // Trả về một mảng mới chứa n phần tử đầu tiên của mảng arr
//     return arrNum4.slice(0, n);
//   }
// }
// console.log(func([0, 1, 2, 3, -4], -6)); // Kết quả: []

// // Assignment 7: Nối các phần tử trong mảng
// const arrNum7 = ["1", "2", "3"];
// console.log(arrNum7.join(","));
// console.log(arrNum7.join("+"));
// console.log(arrNum7.join("."));

// // Assignment 8: Sắp xếp các phần tử trong array theo thứ tự tăng dần
// let arr8 = [
//   93, 63, 47, 53, 33, 50, 94, 88, 86, 33, 17, 14, 88, 97, 63, 26, 26, 33, 39,
//   41,
// ];
// const newArr = arr8.sort((a, b) => a - b);
// console.log(newArr);

// //Assignment 9: Viết function sắp xếp theo độ tăng dần dựa theo name của object
// const library = [
//   {
//     name: "The Road Ahead",
//     author: "Bill Gate",
//   },
//   {
//     name: "Walter Isaacson",
//     author: "Steve Jobs",
//   },
//   {
//     name: "Mockingjay",
//     author: "Suzanne Collins",
//   },
// ];
// function sortByName(arr) {
//   return arr.sort((a, b) => {
//     // So sánh thuộc tính `name` của hai đối tượng, chuyển thành chữ thường để bỏ qua phân biệt hoa thường
//     const nameA = a.name.toLowerCase();
//     const nameB = b.name.toLowerCase();
//     if (nameA < nameB) {
//       return -1;
//     } else if (nameA > nameB) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
// }
// const sortedLibrary = sortByName(library);
// console.log(sortedLibrary);

// //Assignment 10: Viết function kiểm tra phần tử có bên trong mảng hay không
// let arr = [
//   93, 63, 47, 53, 33, 50, 94, 88, 86, 33, 17, 14, 88, 97, 63, 26, 26, 33, 39,
//   41,
// ];
// function isExist(arr, n) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === n) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(isExist(arr, 47));

//Assignment 11:

const characters = [
  {
    name: "Luke Skywalker Duy",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// console.log("Get an array of all names");
// const mapName = characters.map((character) => character.name);
// console.log(mapName);

// console.log("Get an array of all heights");
// const mapHeights = characters.map(function (characters) {
//   return characters.height;
// });
// console.log(mapHeights);

// console.log("Get an array of objects with just name and height properties");
// const charactersWithNameAndHeight = characters.map((character) => ({
//   name: character.name,
//   height: character.height,
// }));
// const characterNameHeight = characters.map(function (character) {
//   return { name: character.name, height: character.height };
// });
// console.log(characterNameHeight);

// console.log("Get an array of all first names");
// const fristName = characters.map(function (characters) {
//   let nameSplipt = characters.name.split(" ");
//   return nameSplipt[0];
// });
// console.log(fristName);

// console.log("Get the total mass of all characters");
// const totalMass = characters.reduce(function (total, next) {
//   return (total += Number(next.mass));
// }, 0);
// console.log(totalMass);

// console.log("Get the total height of all characters");
// const totalHeight = characters.reduce(function (total, next) {
//   return (total += Number(next.height));
// }, 0);
// console.log(totalHeight);

// console.log("Get the total number of characters in all the character names");
// const totalCharacters = characters.reduce(function (total, next) {
//   let totalCharactersWithSpace = next.name.split(" ").join("").length;
//   return (total += totalCharactersWithSpace);
// }, 0);
// console.log(totalCharacters);

// const totalCharacters = characters.reduce((count, character) => {
//   const nameWithoutSpaces = character.name.split(" ").join(""); // Remove spaces
//   return count + nameWithoutSpaces.length; // Add character count to total
// }, 0); // Start with a count of 0

// console.log(totalCharacters); // Output the total character count

// console.log(
//   "Get the total number of characters by eye color (hint. a map of eye color to count)"
// );
// const totalColorEyes = characters.reduce(function (total, next) {
//   return (total += next.eye_color.length);
// }, 0);
// console.log(totalColorEyes);

// console.log("Get characters with mass greater than 100");
// for (let massCharacters of characters) {
//   if (massCharacters.mass > 100) {
//     console.log(massCharacters);
//   }
// }

// console.log("Get characters with height less than 200");
// for (let heightCharacters of characters) {
//   if (heightCharacters.height < 200) {
//     console.log(heightCharacters);
//   }
// }

// console.log("Get all male characters");
// for (let maleCharacters of characters) {
//   if (maleCharacters.gender === "male") {
//     console.log(maleCharacters);
//   }
// }

// console.log("Get all female characters");
// for (let femaleCharacters of characters) {
//   if (femaleCharacters.gender === "female") {
//     console.log(femaleCharacters);
//   }
// }

// console.log("Sort by name");
// function sortByName(arr) {
//   return arr.sort((a, b) => {
//     // So sánh thuộc tính `name` của hai đối tượng, chuyển thành chữ thường để bỏ qua phân biệt hoa thường
//     const nameA = a.name.toLowerCase();
//     const nameB = b.name.toLowerCase();
//     if (nameA < nameB) {
//       return -1;
//     } else if (nameA > nameB) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
// }
// const sortedCharactersName = sortByName(characters);
// console.log(sortedCharactersName);

// console.log("Sort by mass");
// function sortByMass(arr) {
//   return arr.sort((a, b) => {
//     return Number(a.mass) - Number(b.mass);
//   });
// }
// const sortedCharactersMass = sortByMass(characters);
// console.log(sortedCharactersMass);

// console.log("Sort by height");
// function sortByHeight(arr) {
//   return arr.sort((a, b) => {
//     return Number(a.height) - Number(b.height);
//   });
// }
// const sortedCharactersHeight = sortByHeight(characters);
// console.log(sortedCharactersHeight);

// console.log("Sort by gender");
// function sortByGender(arr) {
//     return arr.sort((a, b) => {
//       // So sánh thuộc tính `name` của hai đối tượng, chuyển thành chữ thường để bỏ qua phân biệt hoa thường
//       const genderA = a.gender;
//       const genderB = b.gender;
//       if (genderA > genderB) {
//         return -1;
//       } else if (genderA < genderB) {
//         return 1;
//       } else {
//         return 0;
//       }
//     });
//   }
// const sortedCharactersGender = sortByGender(characters);
// console.log(sortedCharactersGender);

// console.log("Does every character have blue eyes?");
// let countEyesColor = 0;
// for (let blueEyesCharacters of characters) {
//   if (blueEyesCharacters.eye_color === "blue") {
//     countEyesColor += 1;
//   }
// }

// for (let countCharacters in characters) {
//   if (countCharacters.length === countEyesColor) {
//     console.log("YES");
//   } else {
//     console.log("NO");
//   }
// }
// console.log(countEyesColor);

// console.log("Does every character have mass more than 40?");
// let boolean = "true";
// for (let massCharacters of characters) {
//   if (massCharacters.mass < 40) {
//     boolean = "false";
//   }
// }
// console.log(boolean)

console.log("Is every character shorter than 200?");

// console.log("Is every character male?");
// for (let genderCharacters of characters) {
//   if (genderCharacters.gender !== "Male") {
//     console.log("NO");
//   } else console.log("YES");
// }

// const genderCharacters = characters.every(function (character) {
//   return characters.gender === "male";
// });
// console.log(genderCharacters);

// console.log("Is there at least one male character?");
// var boolean = "false";
// for (let genderCharacters of characters) {
//   if (genderCharacters.gender === "male") {
//     boolean = "true";
//   }
// }
// console.log(boolean);

// console.log("Is there at least one character with blue eyes?");
// var boolean = "false";
// for (let eyeColorCharacters of characters) {
//   if (eyeColorCharacters.eye_color === "blue") {
//     boolean = "true";
//   }
// }
// console.log(boolean);

console.log("Is there at least one character taller than 200?");

console.log("Is there at least one character that has mass less than 50?");
var boolean = "false";
for (let massCharacters of characters) {
  if (massCharacters.mass < 50) {
    boolean = "true";
  }
}
console.log(boolean);
