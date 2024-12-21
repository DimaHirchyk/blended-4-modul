//index

// task 1
/* const input = document.querySelector("#input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  input.value = "Привіт";
});
*/

// task 2

// const btn = document.querySelector("button");
// const input = document.querySelector("#input");

// btn.addEventListener("click", () => {
//   alert(input.value);
// });

// task 3

// const button = document.querySelector("button");
// const firstInput = document.querySelector("#first-input");
// const secondInput = document.querySelector("#second-input");

// button.addEventListener("click", () => {
//   // const tempValue = firstInput.value;
//   // firstInput.value = secondInput.value;
//   // secondInput.value = tempValue;
//   [firstInput.value, secondInput.value] = [secondInput.value, firstInput.value];
// });

// task 4

// const allParagraph = document.querySelectorAll("p");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   allParagraph.forEach((el, ind) => (el.textContent = ind + 1));
// });

// task 5

// const input = document.querySelector("#test");
// const output = document.querySelector("#result");
// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   if (isNaN(input.value)) {
//     return alert("Ввели не число");
//   }
//   output.value = input.value ** 2;
// });

// task 6
// const tittle = document.querySelector("h1");
// const list = document.createElement("ul");
// let input = prompt("Введіть пункт");
// while (input !== null) {
//   const item = document.createElement("li");
//   item.textContent = input;
//   list.appendChild(item);
//   input = prompt("Введіть пункт");
// }
// tittle.after(list);
