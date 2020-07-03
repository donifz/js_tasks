// JavaScript Practical Tasks

// Задача #1

// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   };
// };

// ответ: выведет ошибку проаущенна закрывающая скобка setTimeout

//**************************

// Задача #2

/*
Write a JavaScript program to display the current day and time in the following format.  
Sample Output : 
Today is : Friday. 
Current time is : 4 PM : 50 : 22
*/

function today(date) {
  let weeks = [
    "Monday",
    "Tuesday",
    "Wendsday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return weeks[date - 1];
}

let date = new Date();

console.log("Today is : " + today(date.getDay()));
console.log("Current time is : " + date.toLocaleTimeString());

/* ***************************************************
Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output : 34223 
*/
let x = 32243;

function reverse(arg) {
  return parseInt(arg.toString().split("").reverse().join(""));
}

console.log(reverse(x));

/* ***********************************************  

Write a JavaScript program to calculate the factorial of a number. In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. 
For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 	


 */

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));

/* **************************************************
 Write a JavaScript program that
accept two integers and display the larger.

*/

function bigger(a, b) {
  return Math.max(a, b);
}

console.log(bigger(3, 8));

/* ***********************************************************

Write a simple JavaScript program to join all elements of the following array into a string. 
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output : 
"Red,Green,White,Black"
"Red+Green+White+Black"


*/
let myColor = ["Red", "Green", "White", "Black"];

function join(arr) {
  return arr.join(",") + " " + arr.join("+");
}

console.log(join(myColor));

/* *************************************
Write a JavaScript function to get the month name from a particular date. 
Test Data :
console.log(month_name(new Date("10/11/2009"))); 
console.log(month_name(new Date("11/13/2014")));
Output :
"October" 
"November" 
 */

function month_name(date) {
  let mounth = [
    "January",

    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return mounth[date.getMonth()];
}

console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));

/* *******************************************

Write a JavaScript program
to test the first character of a string is uppercase or not

*/

function checToUpper(word) {
  let upper = /^[A-Z]/;
  return upper.test(word[0]);
}

console.log(checToUpper("Dooron"));
console.log(checToUpper("dooron"));

/* Write a JavaScript program to draw a smile*/

function smile(div) {
  smile = document.querySelector(div);
  let head = document.createElement("div");
  let eye = document.createElement("div");
  let eye2 = document.createElement("div");
  let mouth = document.createElement("div");
  head.style =
    "width:200px; height:200px; background-color:yellow; border-radius:50%; position:relative";
  eye.style =
    "width:70px; height:60px; position:absolute; background:black; top:30%; left:10%; right:50%; border-radius:10% 10% 45% 45%";
  eye2.style =
    "width:70px; height:60px; position:absolute; background:black; top:30%; right:10%; ; border-radius:10% 10% 45% 45%";
  mouth.style =
    "width:100px; height:20px; position:absolute; background:#a30e15; top:70%; left:25% ; border-radius:0% 0% 50% 50%";
  head.appendChild(eye);
  head.appendChild(eye2);
  head.appendChild(mouth);
  smile.appendChild(head);
}
smile(".smail");
/* ***************

Задача №4-1

Необходимо поочередно обратиться к каждому тэгу в нужном порядке,
 и вывести их содержимое в консоль, чтобы получилась осмысленная скороговорка.

Вывод в консоли:
В недрах тундры, выдры в гетрах
Тырят в вёдра ядра кедров!
Выдрав с выдры в тундре гетры
Вытру выдрой ядра кедров
Вытру гетрой выдре морду
Ядра в вёдра, выдру в тундру!


 */
function task4_1(word, btn) {
  words = document.querySelector(word);
  press = document.querySelector(btn);
  let wordArr = [];

  words.childNodes.forEach((item) => {
    wordArr.push(item.textContent);
  });
  let resArr = [
    wordArr[5],
    wordArr[9],
    wordArr[3],
    wordArr[11],
    wordArr[7],
    wordArr[1],
  ];
  press.addEventListener("click", function () {
    resArr.forEach((item) => console.log(item));
  });
}
task4_1(".task4-1", ".btn-task4-1");

/* ************ Задача №4-2

На странице есть верстка

<div class="element">Element 1</div>
<div class="element">Element 2</div>
<div class="element">Element 3</div>
<div class="element">Element 4</div>
<div class="element">Element 5</div>
<div class="element">Element 6</div>

С помощью JS необходимо первым трем  элементам 
задать красный цвет текста, а остальным трем - зеленый.


*/

function task4_2(el, btn) {
  elements = document.querySelectorAll(el);
  press = document.querySelector(btn);

  press.addEventListener("click", function () {
    elements.forEach((item, i) => {
      if (i < 3) {
        item.style.color = "red";
      } else {
        item.style.color = "green";
      }
    });
  });
}

task4_2(".element", ".btn-task4-2");

/* Задача №4-3 ****************

*/

function task4_3(ol, btn) {
  toDo = document.querySelector(ol);
  press = document.querySelector(btn);

  let tasks = [
    "Buy lemonade",
    "Make toasts",
    "Repair car",
    "Play games",
    "Pet a cat",
  ];

  press.addEventListener("click", function () {
    console.log(toDo);
    tasks.forEach((item) => {
      let list = document.createElement("li");
      list.textContent = item;
      toDo.appendChild(list);
    });
  });
}

task4_3("#todo-list", ".btn-task4-3");

/* Задача №4-4 ****************

*/

function task4_4(text, btn) {
  article = document.querySelector(text);
  press = document.querySelector(btn);
  let p = article.getElementsByTagName("p");
  press.addEventListener("click", function () {
    for (let key of p) {
      let hr = document.createElement("hr");
      key.insertAdjacentElement("afterend", hr);
    }
  });
}

task4_4(".task4-4>article", ".btn-task4-4");

/* Задача №4-5 ****************

*/
function task4_5(text, btn) {
  cartItems = document.querySelector(text);
  press = document.querySelector(btn);
  let items = cartItems.querySelectorAll(".item");
  let newitem = document.createElement("div");
  let span = document.createElement("span");
  span.textContent = " x 4";
  span.classList.add("qty");
  newitem.classList.add("item");
  newitem.textContent = "Canned Fish";
  newitem.append(span);
  press.addEventListener("click", function () {
    items.forEach((it, i) => {
      if (it.textContent.includes("Cola")) {
        it.remove();
      }
      if (it.textContent.includes("Chocolate")) {
        it.parentNode.replaceChild(newitem, it);
        cartItems.appendChild(newitem);
      }
    });
  });
}

task4_5("#cart-items", ".btn-task4-5");

/* Задача №4-6 ****************

*/
function task4_6(ul, btn) {
  ulList = document.querySelector(ul);
  press = document.querySelector(btn);

  press.addEventListener("click", function () {
    let task = prompt("");
    if (!task == "") {
      let list = document.createElement("li");
      list.textContent = task;
      ulList.insertAdjacentElement("afterbegin", list);
    }
  });
}
task4_6(".todo-list", ".btn-task4-6");
/* */
