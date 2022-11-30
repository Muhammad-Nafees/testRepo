// var element;

// document.getElementById("btn").onclick = click;

// function click() {
//   document.getElementById("btn").style.background = "green";
// }
// console.log(element);

// var element;

// document.getElementById("btn").addEventListener("click", click);

// function click() {
//   document.getElementById("btn").style.background = "grey";
// }

// console.log(element);

// removeEventListener xxxxxxx

// var element;

// document.getElementById("btn").removeEventListener("click", click);

// function click() {
//   document.getElementById("btn").style.background = "cyan";
// }

// ClassLIST PROPERTIES

//1) remove
//2) add
//3) toggle
//4) contains
//5) item
//6) length

// CLASSLIST.ADD ELEMENT Xxxxxxxxxxxxxxx

// var element;
// document.getElementById("btn").addEventListener("click", oclick);

// function oclick() {
//   document.getElementById("btn").classList.add("nafi");
// }
// console.log(element);

//CLASSLIST.REMOVE() ELEMENT Xxxxxxxxxxxxxx

// var element;
// document.getElementById("btn").addEventListener("click", oclick);

// function oclick() {
//   document.getElementById("btn").classList.remove("nafi");
// }
// console.log(element);

// Classlist.toggle() Element

// var element;
// document.getElementById("btn").addEventListener("click", oclick);

// function oclick() {
//   document.getElementById("btn").classList.toggle("nafi");
// }
// console.log(element);

// CLasslist.contains()

// var element;

// document.getElementById("btn").addEventListener("click", oclick);

// function oclick() {
//   element = document.getElementById("btn").classList.contains("nafi");
// }
// console.log(element);

// classlist.length()

// var element;

// document.getElementById("btn").addEventListener("click", oclick);

// function oclick() {
//   element = document.getElementById("btn").classList.contains("  xyz");
// }
// console.log(element);

// classlist.item

// var a = document.getElementById("btn").addEventListener("click", onc);

// function onc() {
//   document.getElementById("btn").classList.item(0);
// }

// DOM TRAVERSAl METHODS

//1) parent Node
//2) parent Element
//3) Children
//4) Child Nodes
//5) first child
//6) first Elemnt Child
//7) Last Child
//8) Last Element Child
//9) next element Child
//10) next Element Sibling
//11) Previous Element Sibling
//12) Previous sibling

// CHILDREN xxxxxxxx

// var a = document.getElementById("container").children;
// console.log(a);

//  CHILDNODES xxxxxxxx
// var a = document.getElementById("container").childNodes;
// console.log(a);

// FIRSTELEMENTCHILD xxxx
// document.getElementById("para").style.backgroundColor = "red";

// var a = document.getElementById("content").firstElementChild;

// console.log(a);

// FIRstchilD xxxxxxxxxxx

// var a = document.getElementById("content").firstChild;
// console.log(a);

// LastChild xxxxxxx

// var a = document.getElementById("content").lastChild;
// console.log(a);

// NextELementSiblingS xxxxxxxx

// var a = document.getElementById("para").nextElementSibling;
// console.log(a);

// PreviousElementSibling xxxxxxxxx

// var a = document.getElementById("para").previousElementSibling;
// console.log(a);

// NextSibing xxxxxxxxxx
// previousSibing xxxxxxxxxx

// DOM CREATE METHODS

// 1) Create Element
// 2) Create TextNode
// 3) Create Comment

// CREATE ELEMENT

// var newelement = document.createElement("div");
// console.log(newelement);

// CREATE TEXTNODE

// var newelement = document.createElement("div");
// var newtext = document.createTextNode("This is Just text Node");
// var newComment = document.createComment("This is Just text Node");
// console.log(newelement);
// console.log(newtext);
// console.log(newComment);

// AppendChild
// var newelement = document.createElement("h2");
// var text = document.createTextNode("this is just nafees text");
// console.log(newelement);
// console.log(text);
// newelement.appendChild(text);
// var a = document.getElementById("content").appendChild(newelement);

// insertbefore

// var target = document.getElementById("content");
// target.insertBefore(newelement, target.childNodes[0]);

// InsertAdjacentElement
// InsertAdjacentHTMl
// InsertAdjacentTEXt

// InsertAdjacentPositionsXXXXXXXX
// 1)beforebegin
// 2)afterbegin
// 3)beforeend
// 4)afterend

// INSERTADJACENTELEMENT()

// var newelement = document.createElement("h1");
// var text = document.createTextNode("this is text");
// console.log(newelement);
// console.log(text);

// newelement.appendChild(text);

// var ner = document.getElementById("content");
// var ner1 = ner.insertAdjacentElement("afterbegin", newelement);

// INSERTADJACENTHTML()

// var a = document.getElementById("content");
// var belement = "<h2>this is Just h1 Text</h2>";
// a.insertAdjacentHTML("afterbegin", belement);
// console.log(belement);

// INSERTADJACENTEXT()xxxxx

// var a = document.getElementById("content");
// var belement = "<h1>this is Just h1 Text<h1>";
// a.insertAdjacentText("afterbegin", belement);
// console.log(belement);

// REPLACEMETHOD()

// var newelement = document.createElement("li");
// var text = document.createTextNode("apple");
// console.log(newelement);
// console.log(text);

// newelement.appendChild(text);

// var a = document.getElementById("li2");
// var oldelement = a.children[0];

// a.replaceChild(newelement, oldelement);

// console.log(b);

// REMOVe CHILD XXXXX

// var a = document.getElementById("li2");
// var oldelement = a.children[0];

// var b = a.removeChild(oldelement);
// console.log(b);

// DOM CLONE NODE() METHOD

// var local = document.getElementById("li2").children[2];
// var copy = document.cloneNode(true);

// console.log(local);
// console.log(copy);

// var a = document.getElementById("li3").appendChild(local);

// CONTAINS METHOD()

// var parentElment = document.getElementById("content");
// var second = document.getElementById("abc");

// var find = parentElment.contains(second);
// console.log(find);

// DOM hasATTRIBUTE() Method

// var first = document.getElementById("content");

// var find = first.hasAttribute("class");

// console.log(find);

// hasCHildNodes() -----XXXXXXX

// var first = document.getElementById("para");
// var find = first.hasChildNodes();

// console.log(find);

// var first = document.getElementById("li2").children[0];
// var second = document.getElementById("li3").children[0];

// var find = second.isEqualNode(first);
// console.log(find);

// let fruit1 = "apple";
// let fruit2 = "Mango";
// let myhtml = `"<h1>This is My Heading</h1>
//           <p> You Like Most  ${fruit1}, And ${fruit2} </p>;
// `;
// console.log.innerHTML = myhtml;

// var arr = [48, 88, 77, 57];

// var arr1 = arr.concat(45);
// console.log(arr1);

// var arr2 = new Array();
// arr2[0] = 10;
// arr2[1] = 20;
// arr2[2] = "nafees";
// arr2[3] = true;
// console.log(arr2);

// var obg = {
//   fname: "nafees",
//   lname: "khan",
//   company: "owner",
//   agree: "yes",
// };
// for (var ke in obg) {
//   console.log(ke + ":" + obg[ke] + typeof obg);
// }
// // console.log(obg.fname);

// var num = 85;
// var num1 = 10;
// var num2 = 1000;

// if (num === num1) {
//   console.log("Num is 85");
// } else if (num == 84) {
//   console.log("Num is declared 85");
// } else if (num2 == 100) {
//   console.log("Number is Declared as 100");
// } else {
//   console.log("num is Not 85");
// }

// let first = document
//   .getElementById("fname")
//   .addEventListener("focus", key(this));
// let second = document
//   .getElementById("lname")
//   .addEventListener("focus", key(this));
// let copy = document.getElementById("test");

// function key(element) {}
// document.getElementById("name").Value;

var samosaprice = 10;
var katchoriprice = 12;
var golgappayprice = 60;
var biryaniprice = 150;

var samosa_q = 0;
var katchori_q = 0;
var golgappay_q = 0;
var biryani_q = 0;

var samosashow = "";
var katchorishow = "";
var gappayshow = "";
var biryanishow = "";

// document.getElementById("amount").addEventListener("keyup", showbill);
var name = document.getElementById("first").addEventListener("keyup", click);
var name2 = document.getElementById("second").addEventListener("keyup", input);
var name3 = document.getElementById("samosa").addEventListener("keyup", copyy);
var name4 = document
  .getElementById("kachori")
  .addEventListener("keyup", katchor);
var name5 = document
  .getElementById("golgappay")
  .addEventListener("keyup", golgappaa);
var name6 = document
  .getElementById("biryani")
  .addEventListener("keyup", biryan);

function click() {
  // document.getElementById("first").addEventListener("keyup", click);
  // alert("hi");
  var email = document.getElementById("first").value;
  document.getElementById("copy").innerHTML = email;
  // console.log(name);
}

function input() {
  var speed = document.getElementById("second").value;
  document.getElementById("email").innerHTML = speed;
}

function copyy() {
  if (this.value == "" || this.value == 0) {
    samosashow = "";
    samosa_q = 0;
    showbill();
  } else {
    samosa_q = document.getElementById("samosa").value;
    samosashow =
      "<tr><td>Samosa</td><td> Rs:" +
      samosaprice +
      "</td><td>" +
      samosa_q +
      "</td><td>" +
      samosaprice +
      "x" +
      samosa_q +
      "=" +
      samosaprice * samosa_q +
      "</td></tr>";
    showbill();
  }
}

function katchor() {
  if (this.value == "" || this.value == 0) {
    katchorishow = "";
    katchori_q = 0;

    showbill();
  } else {
    katchori_q = document.getElementById("kachori").value;
    katchorishow =
      "<tr><td>Katchori</td><td> Rs:" +
      katchoriprice +
      "</td><td>" +
      katchori_q +
      "</td><td>" +
      katchoriprice +
      "x" +
      katchori_q +
      "=" +
      katchoriprice * katchori_q +
      "</td></tr>";
    showbill();
  }
}

function golgappaa() {
  if (this.value == "" || this.value == 0) {
    gappayshow = "";
    golgappay_q = 0;

    showbill();
  } else {
    golgappay_q = document.getElementById("golgappay").value;
    gappayshow =
      "<tr><td>Golgappay</td><td> Rs:" +
      golgappayprice +
      "</td><td>" +
      golgappay_q +
      "</td><td>" +
      golgappayprice +
      "x" +
      golgappay_q +
      "=" +
      golgappayprice * golgappay_q +
      "</td></tr>";
    showbill();
    // console.log(name5);
  }
}

function biryan() {
  if (this.value == "" || this.value == 0) {
    biryanishow = "";
    biryani_q = 0;
    showbill();
  } else {
    biryani_q = document.getElementById("biryani").value;
    biryanishow =
      "<tr><td>Biryani</td><td> Rs:" +
      biryaniprice +
      "</td><td>" +
      biryani_q +
      "</td><td>" +
      biryaniprice +
      "x" +
      biryani_q +
      "=" +
      biryaniprice * biryani_q +
      "</td></tr>";
    showbill();
    // console.log(name5);
  }
}

function showbill() {
  document.getElementById("billtable").innerHTML =
    samosashow + katchorishow + gappayshow + biryanishow;

  document.getElementById("amount").innerHTML =
    samosaprice * samosa_q +
    katchoriprice * katchori_q +
    golgappayprice * golgappay_q +
    biryaniprice * biryani_q;
}
