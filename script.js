const grid = document.querySelector('.grid');
const resetButton = document.querySelector('.resetButton');
const slider = document.querySelector('.slider');
const sliderChoice = document.getElementById('gridNumber')
const colorButtons = document.querySelectorAll('.colorButton');
colorButtons.forEach(colorButton => colorButton.addEventListener('click', chooseColor));
var colorChoice = 'black';


//Active
colorButtons.forEach(colorButton => colorButton.addEventListener('click', buttonActive))

function buttonActive(e){
    for (i = 0; i < colorButtons.length; i++) {
        if (colorButtons[i].classList.contains('active')) 
        colorButtons[i].classList.remove('active');
    } 
    this.classList.add('active')
};

//Grid
function createGrid(){
    for (i = 0; i < sliderToGridSize(); i++) {
        var board = document.createElement('div');
        board.className = 'board';
        grid.appendChild(board);
        grid.style.gridTemplateColumns = `repeat(${slider.value}, auto)`
    }  
        var gridBoxes = grid.querySelectorAll('div')
        gridBoxes.forEach(gridBox => gridBox.addEventListener('mouseover', giveColor));
}

createGrid();

function deleteGrid(){
        grid.replaceChildren()
        grid.className = "grid";
}


//Coloring 

function giveColor(){
    switch (colorChoice){ 
        case 'rainbow':
            this.style.background = generateRandomColor();
            break;
        case 'black':
            this.style.background = "black";
            break;
        case 'white':
            this.style.background = "white";
            break;
        case 'grey':
            //figure out how to add opacity by 10% each hover
        default: 
            this.style.background = colorChoice;
            break;
    }   
}


//Color choice

function chooseColor(e){
    switch(e.target.dataset.color) {
        case 'black':
            colorChoice = 'black';
            break;
        case 'rainbow':
            colorChoice = 'rainbow';
            break;     
        case 'white':
            colorChoice = 'white'
            break;
        case 'grey':
            colorChoice = 'grey'
            break;
        default: 'black'
            colorChoice = 'black';
            break;
    }
}


//Reset

function resetGrid() {
    let gridBoxes = grid.querySelectorAll('div');
    for (i = 0; i < gridBoxes.length; i++) {
        gridBoxes[i].style.background = 'grey'
    }
}

resetButton.addEventListener('click', resetGrid)

//Slider 

var initialGridName = slider.value.concat('x', slider.value)
sliderChoice.textContent = initialGridName;

slider.oninput = function(){
    var gridName = this.value.concat('x', this.value)
    sliderChoice.textContent = gridName;
    deleteGrid();
    createGrid();
    resetGrid();
}


//Grid size

function sliderToGridSize() {
    return slider.value * slider.value; 
}

// Random Color

function generateRandomColor() {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;  
    }
