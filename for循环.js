// const names = ["kobe",2,true,"james"];

// names.forEach(item => {
//     console.log(this);
// })

// function Person(name) {
//     console.log(this);//Person{}
//     this.name = name;
//     console.log(this);//Person{name:"Why"}
// }
// var p = new Person("Why");

// console.log(p);
// 显示绑定优先级高于隐式绑定
// function foo() {
//     console.log(this);
// }
// var obj1 = {
//     name: "aa",
//     foo: foo
// }
// var obj2 = {
//     name: "bb",
//     foo: foo
// }

// obj1.foo();//this==>obj1
// obj2.foo();//this==>obj2

// obj1.foo.bind(obj2);
// new绑定高于隐式绑定
// function foo() {
//     console.log(this);
// }
// var obj = {
//     name: "obj",
//     foo: foo,
// }

// new obj.foo();//foo{}
// new绑定高于bind绑定
// function foo() {
//     console.log(this);
// }

// var obj = {
//     name: "obj",
//     foo: foo
// }
// var obj1 = {
//     name: "obj1",
//     foo: foo
// }
// obj.foo.bind(obj1);

// new obj.foo();

// 优先级总结:new绑定 > 显示绑定 > 隐式绑定 > 默认绑定(浏览器window,node=object)
// console.log(this);
// function foo() {
//     console.log(this);
// }
// foo();
// setTimeout(function() {

// })
// var obj = {
//     getData: () => {
//         console.log(this);
//     }
//   }
  
// obj.getData();
// var name = 'window'
// var person1 = {
//   name: 'person1',
//   foo1: function () {
//     console.log(this.name)
//   },
//   foo2: () => console.log(this.name),
//   foo3: function () {
//     return function () {
//       console.log(this.name)
//     }
//   },
//   foo4: function () {
//     return () => {
//       console.log(this.name)
//     }
//   }
// }

// var person2 = { name: 'person2' }

// person1.foo1(); 
// person1.foo1.call(person2); 

// person1.foo2();
// person1.foo2.call(person2);

// person1.foo3()();
// person1.foo3.call(person2)();
// person1.foo3().call(person2);

// person1.foo4()();
// person1.foo4.call(person2)();
// person1.foo4().call(person2);

// var name = "window";

// function fn() {
//     var name = "fn";
//     console.log(name);
// }
// fn();

// export {}

// let a = "104,502,205.00";
// let b = Number(a.replace(/,/g, ""));
// console.log(b);
var removeDuplicates = function(nums) {
    let numsArr = [];
    for(var i=0; i<nums.length; i++) {
        if(numsArr.indexOf(nums[i]) === -1) {
            numsArr.push(nums[i]);
        }
    }
    return numsArr;
};
console.log(removeDuplicates([1,1,2]));