// Accumulator (acc) (累计器)
// Current Value (cur) (当前值)
// Current Index (idx) (当前索引)
// Source Array (src) (源数组)
// 参数
// callback
// 执行数组中每个值 (如果没有提供 initialValue则第一个值除外)的函数，包含四个参数：
// accumulator
// 累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（见于下方）。

// currentValue
// 数组中正在处理的元素。
// index 可选
// 数组中正在处理的当前元素的索引。 如果提供了initialValue，则起始索引号为0，否则从索引1起始。
// array可选
// 调用reduce()的数组
// initialValue可选
// 作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一
//个元素。 在没有初始值的空数组上调用 reduce 将报错。
// 返回值
// 函数累计处理的结果
//计算数组中每个元素出现的次数
// var names = ['Alice','Kobe','Curry','Curry','James','Bruce','Alice'];

// var countNames = names.reduce(function (allName,name) {
//     if(name in allName) {
//         allName[name]++;
//     }
//     else {
//         allName[name] = 1;
//     }
//     return allName;
// },{});

// console.log(countNames);

// 按属性对object分类
var people = [
  { name: "Alice", age: 21 },
  { name: "Curry", age: 21 },
  { name: "Kobe", age: 23 },
  { name: "James", age: 24 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    // 存age的值做为键
    var key = obj[property];
    // 判断遍历时是否已存在此age的值
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

var groupPeople1 = groupBy(people, "age");
var groupPeople2 = groupBy(people, "name");
// console.log(groupPeople1);
// console.log(groupPeople2);

function group(objectArray2, property2) {
  return objectArray2.reduce(function (accumulator, currentVal) {
    var key = currentVal[property2];
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(currentVal);
    return accumulator;
  }, {});
}

var group2 = group(people, "age");
// console.log(group2);

// 数组去重
// 方法一
let myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);
console.log(myOrderedArray);

let listArray = [
  1, 2, 1, 5, 1, 9, 11, 22, 9, 5, 6, 66, 88, 22, 11, 5, 5, 78, 11,
];
let results = listArray.sort().reduce(function (pre, cur) {
  if (pre.length === 0 || pre[pre.length - 1] !== cur) {
    pre.push(cur);
  }
  return pre;
},[]);
// console.log(results);

var mapArray = [1, 2, 3].map(function (item, index, arr) {
  return item + index + arr.length;
});

// console.log(mapArray);

if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function (callback, thisArg) {
    // console.log(this);
    return this.reduce(function (mappedArray, currentValue, index, array) {
      mappedArray[index] = callback.call(thisArg, currentValue, index, array);
      return mappedArray;
    }, []);
  };
}

var mapArray1 = [1, 2, 3].mapUsingReduce(
  (currentValue, index, array) => currentValue + index + array.length
);

// console.log(mapArray1);
