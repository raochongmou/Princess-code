// lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）
// 在数组中的最后一个的索引，如果不存在则返回 -1。
// 从数组的后面向前查找，从 fromIndex 处开始。
const animals = ['Dodo','tiger','penguin','Dodo'];
// console.log(animals.lastIndexOf('Dodo'));

// var array = [2, 5, 9, 2];
// 参数indexOf(searchValue[,fromIndex])
// 规律:如果参数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消，
// 即-1表示从最后一个元素开始查找，-2表示从倒数第二个元素开始查找 ，以此类推。
// 注意：如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然
// 是从前向后查询数组。如果抵消后的索引值仍小于0，则整个数组都将会被查询。其默认值为0.
// var index = array.indexOf(5,50)//大于数组长度(length) -1
// var index = array.indexOf(5,5)//大于数组长度(length) -1
// var index = array.indexOf(5,4)//等于数组长度(length) -1
// var index = array.indexOf(5,3)//小于数组长度(length) -1
// var index = array.indexOf(5,2)//小于数组长度(length) -1
// var index = array.indexOf(5,1)//小于数组长度(length) 1
// var index = array.indexOf(5,0)//小于数组长度(length) 1
// var index = array.indexOf(5,-1)//小于数组长度(length) -1
// var index = array.indexOf(5,-2)//小于数组长度(length) -1
// var index = array.indexOf(5,-3)//小于数组长度(length) 1
// var index = array.indexOf(5,-4)//小于数组长度(length) 1
// var index = array.indexOf(5,-5)//小于数组长度(length) 1
// var index = array.indexOf(5,-50)//小于数组长度(length) 1
var array = [2, 5, 9, 2];
//arr.lastIndexOf(searchElement[,fromIndex])
// var index = array.lastIndexOf(2, 50);//3
// var index = array.lastIndexOf(2, 5);//3
// var index = array.lastIndexOf(2, 4);//3
// var index = array.lastIndexOf(2, 3);//3
// var index = array.lastIndexOf(2, 2);//0
// var index = array.lastIndexOf(2, 1);//0
// var index = array.lastIndexOf(2, 0);//0
// var index = array.lastIndexOf(2, -1);//3
// var index = array.lastIndexOf(2, -2);//0
// var index = array.lastIndexOf(2, -3); //0
// var index = array.lastIndexOf(2, -4);//0
var index = array.lastIndexOf(2, -5);//-1
// var index = array.lastIndexOf(2, -50);//-1

// indexOf(searchValue[,fromIndex])
//查找数组中是否包含searchValue，如果包含，返回第一次出现的索引，
//如果不包含，返回-1
// -searchValue 要查找的值
// -fromIndex 查找的起始位置，如果不填，默认为0
// 如果大于或等于length，返回-1

// index = array.lastIndexOf(2, 2);

console.log(index);