// задача 1
console.log(document.body.firstElementChild)
console.log(document.body.firstElementChild.nextElementSibling);
console.log(document.body.firstElementChild.nextElementSibling.lastElementChild);
/////////////////////////////////////////////////////////////////////////////////

// задача 2
let table = document.body.firstElementChild;
for (i = 0; i <= table.children.length; i++) {
table.rows[i].cells[i].style.backgroundColor = 'red'
}
/////////////////////////////////////////////////////////////////////////////////

// задача 3

/////////////////////////////////////////////////////////////////////////////////