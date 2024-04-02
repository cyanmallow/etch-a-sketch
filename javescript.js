
function createGrid(){
    const gridContainer = document.getElementById("grid-container");

    for (let i=0; i<16; i++){
        for (let j=0; j<16; j++){
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("square");
            gridContainer.appendChild(squareDiv);
        }
    }
}


// Add hover effect
function addHoverEffect(){
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.classList.add('blue');
        })
    });
}

document.addEventListener("DOMContentLoaded", () => {
    createGrid();
    addHoverEffect();

    const resetBtn = document.getElementById('reset-btn');
    resetBtn.addEventListener("click", resetColors);
});

// Add reset colors
function resetColors(){
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.classList.remove("blue");
    });
}