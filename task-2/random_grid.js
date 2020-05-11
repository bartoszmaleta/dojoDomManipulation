function switchCellColor() {
    // event handlers and other code here 
    const cells = document.getElementsByClassName("cell");
    setInterval(function () {
        let random = Math.floor(Math.random() * (cells.length));
        cells[random].classList.add("active");
        setTimeout(()=>setActive(cells,random), 500)
        // cells[random].className -= " active";
        // delete cells[random].className;
    }, 500);
}

function setActive(cells,random) {
    cells[random].classList.remove("active");
}

function generateGrid(width,height) {
    let container = document.querySelector('.container');

    for (let i = 0; i < height; i++) {
        let row = document.createElement('div');
        for (let j = 1; j <= width; j++) {
            let cell = document.createElement('div');
            cell.className = "cell";
            cell.textContent = (i * height) + j;
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

generateGrid(10,10);
switchCellColor();