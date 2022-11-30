var result = document.getElementById("result");
var li = document.querySelectorAll("li");
// var button = document.getElementById("buttons");
// var equals = document.getElementById("equal");

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener(
    "click",
    function () {
      // alert(this.innerHTML);
      if (li[i].innerHTML == "=") {
        result.innerHTML = eval(result.innerHTML);
      } else if (this.innerHTML == "C") {
        result.innerHTML = "";
      } else {
        result.innerHTML = result.innerHTML + this.innerHTML;
      }
    }

    // console.log(this.innerHTML);
  );
}

// var a = "5";
// if (a == 5) {
//   alert("true");
// } else {
//   alert("flase");
// }

// var date = new Date(prompt("enter Your age", "02,Oct,2002 "));
// var dobmili = date.getTime();
// // console.log(dobmili);

// var today = new Date();
// var todaymili = today.getTime();

// var diff = todaymili - dobmili;
// var accuage = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));

// console.log(date);
// console.log(dobmili);
// console.log(today);
// console.log(todaymili);
// console.log(diff);
// console.log(accuage);

// var result = func(4, "+", 5);
// var result = func(4, "+", 4);
// var result1 = func(2, "-", 9);
// var result2 = func(7, "*", 5);
// var result3 = func(7, "/", 5);

// function func(num1, opr, num2) {
//   if (opr === "+") {
//     return num1 + num2;
//   } else if (opr === "-") {
//     return num1 - num2;
//   } else if (opr === "*") {
//     return num1 * num2;
//   } else if (opr === "/") {
//     return num1 / num2;
//   }
// }

// console.log(result);
// console.log(result1);
// console.log(result2);
// console.log(result3);


