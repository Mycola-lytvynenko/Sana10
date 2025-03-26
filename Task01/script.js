// task 1.1
const body = document.body;
body.style.fontFamily = "Arial";
const p = [...document.querySelectorAll("p")];
for (let i = 0; i < p.length; i++) {
  if (i === 0) {
    p[i].style.backgroundColor = "yellow";
    p[i].style.color = "orange";
    p[i].style.fontSize = "16px";
    p[i].style.padding = "5px";
    p[i].style.textAlign = "center";
  } else if (i === 1) {
    p[i].style.backgroundColor = "lightblue";
    p[i].style.color = "blue";
    p[i].style.fontSize = "14px";
    p[i].style.padding = "5px";
    p[i].style.textAlign = "right";
  } else {
    p[i].style.backgroundColor = "lightcoral"; // lightred doesn`t exist
    p[i].style.color = "red";
    p[i].style.fontSize = "12px";
    p[i].style.padding = "5px";
    p[i].style.textAlign = "left";
  }
}

// task 1.2
const main = document.querySelector(".main__container");
function CreateTable(row, col) {
  let table = document.createElement("table");
  for (let i = 0; i < row; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < col; j++) {
      let col = document.createElement("td");
      row.appendChild(col);
    }
    table.appendChild(row);
  }
  main.appendChild(table);
}
CreateTable(5, 5); //
function ColorTable() {
  let table = document.querySelector("table");
  const td = [...table.querySelectorAll("td")];
  for (let i = 0; i < td.length; i++) {
    if (i % 2 == 0) {
      td[i].classList.add("selected");
    }
  }
  console.log(td);
}
ColorTable(); // - also works if we change quantity of row or col in our table
