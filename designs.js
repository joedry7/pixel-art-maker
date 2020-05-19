// Declares variable for color
const color = document.getElementById('colorPicker');

// Declares variables for table size
const tableSize = document.getElementById('sizePicker');
const table = document.getElementById('pixelCanvas');
const x = document.getElementById('inputWidth');
const y = document.getElementById('inputHeight');

function makeGrid(x, y) {
    table.innerHTML = ''; // Reset the grid
    var x = document.getElementById('inputHeight').value;
    var y = document.getElementById('inputWidth').value;
    for (var i = 1; i <= x; ++i) {
        let rows = document.createElement('tr'); // Creates rows
        for (var j = 1; j <= y; ++j) {
            let blocks = document.createElement('td'); // Creates blocks
            rows.appendChild(blocks); // Adds blocks to rows
            table.appendChild(rows); // Adds rows to grid
            blocks.addEventListener('click', function(event) {
                blocks.style.backgroundColor = color.value; // Fills in the blocks with the color value
            })
        }
    }
}

tableSize.addEventListener('submit', function(event) {
    event.preventDefault(); // Stops the submit button from refreshing the page
    const x = document.getElementById('inputWidth').value;
    const y = document.getElementById('inputHeight').value;
    const table = document.getElementById('pixelCanvas');
    makeGrid(x, y);
})