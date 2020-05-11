const moves = {
    '97': moveLeft,
    '115': moveDown,
    '119': moveUp,
    '100': moveRight
};

function moveLeft(position) {
    let x = position[0];
    let y = position[1];
    if (position[1] === '0') {
        alert('!!!');
    } else {
        let newID = x + (parseInt(y - 1).toString());
        let newSquare = document.getElementById(newID);
        newSquare.setAttribute('class', 'square');
        let oldSquare = document.getElementById(position);
        oldSquare.setAttribute('class', 'squares');
    }
}

function moveDown(position) {
    let x = position[0];
    let y = position[1];
    if (position[0] === '9') {
        alert('!!!');
    } else {
        let newID = (parseInt(x) + 1).toString() + y;
        let newSquare = document.getElementById(newID);
        newSquare.setAttribute('class', 'square');
        let oldSquare = document.getElementById(position);
        oldSquare.setAttribute('class', 'squares');
    }
}

function moveUp(position) {
    let x = position[0];
    let y = position[1];
    if (position[0] === '0') {
        alert('!!!');
    } else {
        let newID = (parseInt(x) - 1).toString() + y;
        let newSquare = document.getElementById(newID);
        newSquare.setAttribute('class', 'square');
        let oldSquare = document.getElementById(position);
        oldSquare.setAttribute('class', 'squares');
    }
}

function moveRight(position) {
    let x = position[0];
    let y = position[1];
    if (position[1] === '9') {
        alert('!!!');
    } else {
        let newID = x + (parseInt(y) + 1).toString();
        let newSquare = document.getElementById(newID);
        newSquare.setAttribute('class', 'square');
        let oldSquare = document.getElementById(position);
        oldSquare.setAttribute('class', 'squares');
    }
}

function createSquares(count) {
    const container = document.querySelector(".container");

    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            let square = document.createElement("div");
            square.className = "squares";
            square.id = i.toString() + j.toString();
            // cell.textContent = (`${j}${i}`);
            container.appendChild(square);
        }
    }
}

function fillSquares() {
    const squares = document.querySelectorAll(".squares");
    squares.forEach(square => {
        square.addEventListener("click", activateSquare)  
        });
}

function removeSquares() {
    const squares = document.querySelectorAll(".squares");
    squares.forEach(square => {
        square.removeEventListener("click", activateSquare);
    });
}

function activateSquare() {
    this.setAttribute('class', 'square');
    removeSquares();
}

function game() {
    document.addEventListener('keyup', (e) => {
        let position
        switch (e.code) {
            case "ArrowUp":
                position = document.querySelector('.square');
                moves[119](position.id);
                break;
            case "ArrowDown":
                position = document.querySelector('.square');
                moves[115](position.id);
                break;
            case "ArrowLeft":
                position = document.querySelector('.square');
                moves[97](position.id);
                break;
            case "ArrowRight":
                position = document.querySelector('.square');
                moves[100](position.id);
                break;
        }
    })
};

createSquares(10);
fillSquares();
game();