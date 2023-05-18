const newArray = [
  [{ wch: 4 }, { wch: 6 }, { wch: 8 }, { wch: 8 }, { wch: 6 }, { wch: 10 }],
  [{ wch: 20 }, { wch: 3 }, { wch: 7 }, { wch: 9 }, { wch: 1 }, { wch: 12 }],
  [
    { wch: 14 },
    { wch: 16 },
    { wch: 18 },
    { wch: 18 },
    { wch: 26 },
    { wch: 10 }
  ],
  [
    { wch: 24 },
    { wch: 16 },
    { wch: 18 },
    { wch: 28 },
    { wch: 26 },
    { wch: 15 }
  ],
  [{ wch: 24 }, { wch: 36 }, { wch: 7 }, { wch: 9 }, { wch: 23 }, { wch: 22 }],
  [{ wch: 10 }, { wch: 12 }, { wch: 15 }, { wch: 19 }, { wch: 6 }, { wch: 11 }],
  [
    { wch: 17 },
    { wch: 16 },
    { wch: 18 },
    { wch: 18 },
    { wch: 16 },
    { wch: 10 }
  ],
  [{ wch: 17 }, { wch: 3 }, { wch: 5 }, { wch: 15 }, { wch: 9 }, { wch: 21 }]
];
// var newArray = arr[0].map(function(col, i) {
//   return arr.map(function(row) {
//     return row[i];
//   });
// });
// console.log("newArray", newArray);
let result = newArray[0];
for (let i = 1; i < newArray.length; i++) {
  for (let j = 0; j < newArray[i].length; j++) {
    if (result[j]["wch"] < newArray[i][j]["wch"]) {
      result[j]["wch"] = newArray[i][j]["wch"];
    }
  }
}

console.log("result", result);
