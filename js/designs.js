// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const gridHeight = document.querySelector('#inputHeight');
const gridWidth = document.querySelector('#inputWidth');
const submit = document.querySelector('#submitBtn');
const pickColor = document.querySelector('#colorPicker');
const canvas = document.querySelector('#pixelCanvas');
let color = false 
// had to use let for color const variable will casue an uncaught typeerror

/*
height set to use input on gridHeight for rows
width set to use input on gridWidth for columns
for loop set to height to create rows
rows are appended to canvas to build outline of grid
nested for loop set to width to create columns inside the rows
columns are appended to rows to create grid
*/

function makeGrid(height, width) {
    height = gridHeight.value;
    width = gridWidth.value;
    for (let a = 0; a < height; a++) {
        const tr = document.createElement('tr');
        tr.classList.add('row');
        canvas.appendChild(tr);
        for (let b = 0; b < width; b++) {
            const td = document.createElement('td');
            td.classList.add('column');
            tr.appendChild(td);
    td.addEventListener('mouseover', function() {
        if (!color) return
        td.style.backgroundColor = pickColor.value;
    }) // allows to color mutiple squares intead of one at a time
    td.addEventListener('mousedown', function() {
        td.style.backgroundColor = pickColor.value;
    }) // allows to color one at a time
}}
// Your code goes here!

}submit.addEventListener('click', function(setGrid) {
    $('tr').remove(); // removes empty rows that don't have columns
     setGrid.preventDefault(); // prevents the grid from resetting
     makeGrid(gridHeight, gridWidth);
})
canvas.addEventListener('mousedown', function() {
    color = true;
}) // turns mutiple color on
canvas.addEventListener('mouseup', function(){
    color = false;
}) // turns mutiple color off

/* resource used https://www.youtube.com/watch?v=wZZyhrJxZRU on 4/17/22
   resource used https://www.youtube.com/watch?v=OtSiwcq67j4 on 4/18/22
   w3 schools was reviewed for a few things for css, javascript and jquery link below
   resource used https://www.w3schools.com/jquery/default.asp on 4/19/22
   resourse used for multi line comments listed below used on 4/24/22
   https://www.w3schools.com/js/js_comments.asp */