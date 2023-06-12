let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function() {

    document.querySelector("body").addEventListener("click", function(e) {
        if(e.target.tagName != "BUTTON") {
            click = !click;
            let draw = document.querySelector("#draw");
            if(click) {
                draw.innerHTML = "Now, you can draw.";
            }
            else {
                draw.innerHTML = "You can't draw now."
            }
        }
    })

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function() {
        let size = getSize();
        createBoard(size);
    })   
})

function createBoard(size) {
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDiv = size * size;

    for (i=0; i<numDiv; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize() {
    let input = prompt("Select the size of the box.");
    let messsage = document.querySelector("#message");
    if (input === "") {
        messsage.innerHTML = "Please enter the size.";
    }
    else if (input < 0 || input > 100) {
        messsage.innerHTML = "Please enter the correct size.";
    }
    else {
        messsage.innerHTML = "Play the game.";
        return input;
    }
}

function colorDiv() {
    if(click) {
        if(color === "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else
        {
            this.style.backgroundColor = "black"
        }
    }
}
    
function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white")
}