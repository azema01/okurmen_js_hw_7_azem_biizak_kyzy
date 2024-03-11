// const randomBodyPart = ['smart', 'sweet', 'beautiful'];
// const randomAdjectives = ['kind', 'glad', 'brave'];
// const randomWords = ['cute', 'lucky', 'cool', 'generous', 'reasonable'];


// function getRandomWord(array){
//     const word  = array [Math.floor(Math.random() * array.length)];

//     return word;

// };

// const text = `your ${getRandomWord
// (randomBodyPart)} Radiant ${getRandomWord
// (randomAdjectives)} ${getRandomWord(randomWords)}!!!`;

// console.log(text);


// function fillArray(start, end) {
//     let array = [];
//     for (let i = start; i <= end; i++) {
//         array.push(i);
//     }
//     return array;
// }

// let start = 1;
// let end = 100;
// let result = fillArray(start, end);
// console.log(result); // even numbers 0,2,4,6,8


// function roundArray(array) {
//     let roundedArray = array.map(num => Math.ceil(num));
//     return roundedArray;
// }

// let array = [1.456, 2.125, 3.32, 4.1, 5.34];
// let result = roundArray(array);
// console.log(result);



// function parseDate(dateString) {
//     const [year, month, day] = dateString.split('-');
//     return { year, month, day };
// };

// const date = "2024-03-01";
// const parsedDate = parseDate(date);
// console.log(parsedDate);





// const array = [3,2,1]; // array.join('большеб чем array[i]')

// let result = '';

// for (let i = 0; i < array.length; i++) {
//     result += 'больше ' + array[i];
//     if (i !== array.length - 1) {
//         result += ', ';
//     }
// }

// console.log(result);



// let start = '';
// for (let i = 1; i <=  7; i++){
//     start += '*';
//     console.log (start);
// }


// let obj = {
//     a: 11,
//     b: 12,
//     c: 13,
//     d: 14,
//     e: 15,
//     f: 16,
//     g: 17,
//     h: 18,
//   };
  
//   let sum = 0;
  
//   for (let key in obj) {
//       sum += obj[key];
//   }
  
//   console.log(sum); 


// let obj = {
//     1: {
//       1: 11,
//       2: 12,
//       3: 13,
//     },
//     2: {
//       1: 21,
//       2: 22,
//       3: 23,
//     },
//     3: {
//       1: 24,
//       2: 25,
//       3: 26,
//     },
//   };
  
//   let sum = 0;
  
//   for (let key in obj) {
//       let innerObj = obj[key];
//       for (let innerKey in innerObj) {
//           sum += innerObj[innerKey];
//       }
//   }
  
//   console.log(sum);



  
  
function checkStringLength(array, number) {
    array.forEach(function(item) {
        if (item.length < number) {
            console.log('Бул текстин узундугу ${number}-тен аз: ${item}');
        } else if (item.length > number) {
            console.log('Бул текстин узундугу ${number}-тен көп: ${item}');
        } else {
            console.log('Бул текстин узундугу ${number} менен тең: ${item}');
        }
    });
}

// let strings = ["Салам", "Дүйшөмбү", "Кечек", "Күндүз", "Жума"];
let lengthToCheck = 5;

// checkStringLength(strings, lengthToCheck);





function azema(array, length) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].length < length) {
            console.log("Длина этого текста меньше " + length);
        } else if (array[i].length > length) {
            console.log("Длина этого текста больше " + length);
        } else {
            console.log("Длина этого текста rovno " + length );
        }
    }
}


let strings = ["узунnn", "орточn", "кыска", "кичин", "чоooн"];
let Input1 = 5;

azema(strings, Input1);