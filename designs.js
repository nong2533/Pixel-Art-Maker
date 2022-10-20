// Select size input
var size = document.getElementById("sizePicker");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");
// Select color input
var color = document.getElementById("colorPicker");
var canvas = document.getElementById("pixelCanvas");

// When size is submitted by the user, call makeGrid()

size.addEventListener('submit', function (event) {
    event.preventDefault();
    makeGrid(height.value, width.value);
} );
/** Create a grid of squares 
 * int width - number of squares representing the width of the grid
 * int height - number of squares representing the height of the grid
*/
function makeGrid(height, width) {
    /** innerHTML - reset every cell in the table
     * when clicked is 'submit' again
     */
    canvas.innerHTML = null;
    /** make the grid in rows */
    for( h = 0; h < height; h++){
        let row = canvas.insertRow(h);
        /**make the cell in colunm */
        for ( w = 0; w < width; w++){
            let cell = row.insertCell(w);
            /** When clicked is cell by the user , 
             * change to selected color
             * and when clicked again reset color from cell   */
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
