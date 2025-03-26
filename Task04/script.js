const tables = [...document.querySelectorAll(".table")];

function CreateTable(el, row, col) {
    let table = document.createElement("table");
    for (let i = 0; i < row; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < col; j++) {
            let col = document.createElement("td");
            row.appendChild(col);
        }
        table.appendChild(row);
    }
    el.appendChild(table);
}

CreateTable(tables[0], 3, 3);
CreateTable(tables[1], 4, 4);
CreateTable(tables[2], 5, 5);

function ColorTable() {
    for (let i = 0; i < tables.length; i++) {
        const td = [...tables[i].querySelectorAll("td")];
        for (let i = 0; i < td.length; i++) {
            if (i % 2 == 1) {
                td[i].classList.add("selected");
            }
        }
    }
}
ColorTable();
