// Select color input
var size = document.getElementById("sizePicker");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");
// Select size input
var color = document.getElementById("colorPicker");
var canvas = document.getElementById("pixelCanvas");

// When size is submitted by the user, call makeGrid()

size.addEventListener('submit', function (event) {
    event.preventDefault();
    makeGrid(height.value, width.value);
} );

function makeGrid(height, width) {
    canvas.innerHTML = null;
    for( h = 0; h < height; h++){
        let row = canvas.insertRow(h);
        for ( w = 0; w < width; w++){
            let cell = row.insertCell(w);
            cell.addEventListener('click', function(){
                if(cell.style.backgroundColor) {
                    cell.style.backgroundColor = "";
                }else {
                    cell.style.backgroundColor = color.value;
                }
            });
        }
    }
// Your code goes here!

}
