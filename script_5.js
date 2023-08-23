// let inputs = document.querySelectorAll('input');
// const inputsArray = Array.from(inputs);
// for (const input of inputsArray) {
//   console.log(input);
// }
// let qS = document.querySelector('[data-js ="querySelector"]');
//  console.log(qS);
//  qS.addEventListener("click", ()=>{
//  alert('Hello');
//  });
//  qS.addEventListener("contextmenu", (e)=>{
//     alert('Hello TO!');
//     e.preventDefault();
//     });
// let form = document.getElementById("form");
// console.log(qS.hasChildNodes());
// console.log(form.hasChildNodes());
// qS.style.background = 'yellow';
// let name = document.querySelector('[name="email"]');

// setTimeout(()=>{alert('Hello!');}, 1000)
let newEl = document.createElement("span");
newEl.innerHTML = "<h1>Some text</h1>";
let child = document.getElementById("childElement");
let parentDiv = child.parentNode;
parentDiv.insertBefore(newEl, child);