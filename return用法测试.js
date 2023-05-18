// function add(a, b) {
//   if (1 < 2) {
//     var c = a + b;
//     console.log(c);
//     return true;
//   }
//   console.log("112");
// }

// add(1, 2);
window.onload = () => {
  var btn = document.getElementsByTagName("button")[0];
  var isDisBtn = true;
  if(1<2) {
    btn.disabled = isDisBtn;
    return false;
  } 
//   else {
//       return true;
//   }
  console.log("123");
  //   console.log(btn.disabled);
  //   console.log(isDisBtn);
  //   function btnClick() {
  //     console.log("isDisBtn");
  //   }
  //   btn.onclick = function() {
  //     console.log("isDisBtn");
  //   }
  btn.addEventListener("click", function () {
    console.log("isDisBtn888");
  });
};
