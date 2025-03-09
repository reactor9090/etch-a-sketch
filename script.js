
let GRIDSIDE = 600;
let rows = 16;
let cols = 16;        

const sketchArea = document.querySelector('#sketchArea');

sketchArea.style.width = `${GRIDSIDE}px`;
sketchArea.style.height = `${GRIDSIDE}px`;    

function createGrid () {
    for (let i = 0; i < (rows * cols); i++ ) {
        const gridCell = document.createElement('div');


        gridCell.style.width = `${(GRIDSIDE / cols) - 2}px`;
        gridCell.style.height = `${(GRIDSIDE / rows) -2}px`;    
        gridCell.classList.add('cell');

        sketchArea.appendChild(gridCell);
     
        
        gridCell.addEventListener('mouseover', () => {
            if (isRandom === false) {
                gridCell.style.backgroundColor = 'gray';
            } else if (isRandom === true) {
                gridCell.style.backgroundColor = getRandomColor();
            }
            
        }) 
    }   
}
createGrid();

const setGridCells = document.querySelector('#setGridCells');
const message = document.querySelector('#message');

setGridCells.addEventListener('click', function () {
    const promptResult = prompt("enter the number of cells");    
    if (promptResult === null) {
        message.textContent = "Enter a number between 2 and 100";
        return;
    } else if (promptResult <= 1 || promptResult >= 100) {
        message.textContent = "Enter a number between 2 and 100";
        return;
    } else if (promptResult > 1 && promptResult < 100) {
        cols = promptResult;
        rows = promptResult;
        sketchArea.textContent = "";
        createGrid();
    }
});


function getRandomColor () {
    for (let i = 0; i < 10; i++) {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        return randomColor;
    }
}

const randomBtn = document.querySelector('#random-btn');

let isRandom = false; 

randomBtn.addEventListener('click' , function () {
    sketchArea.textContent = "";
    isRandom = true;    
    createGrid();
})

const clearBtn = document.querySelector('#reset-btn');

clearBtn.addEventListener('click' , function () {
    sketchArea.textContent = "";
    createGrid();
})

const grayBtn = document.querySelector('#gray-btn');

grayBtn.addEventListener('click' , function () {
    sketchArea.textContent = "";
    isRandom = false;
    createGrid();
})
