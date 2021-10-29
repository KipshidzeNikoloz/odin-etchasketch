const container = document.querySelector('.container');
const resetButton = document.querySelector('.resetButton');
const slider = document.querySelector('.slider');
const sliderChoice = document.getElementById('gridNumber')





for (i = 0; i < 16; i++) {
    var board = document.createElement('div');
    board.className = 'board';
    container.appendChild(board);
}



container.addEventListener('mouseover', function (e) {
      e.target.classList.add("hovered")
}, false);  



//Slider 

sliderChoice.textContent = valueToGridNumber(slider.value); 

slider.oninput = function() {
    sliderChoice.textContent = valueToGridNumber(this.value);
}

function valueToGridNumber(num) {
    const valueGridNumber = ['1x1', '2x2', '3x3', '4x4', '5x5', '6x6', '7x7', '8x8', '9x9', '10x10']
    return valueGridNumber[num-1];
}

//Reset

resetButton.addEventListener('click', function(e) {
    const resetBoard = document.querySelectorAll('.board.hovered');
    for (i = 0; i < resetBoard.length; i++) {
        resetBoard[i].classList.remove("hovered")
    }
})

//Grid change

    // timeout function 
    // setTimeout(function(){
    //    e.target.style.background = "grey";
    // }, 500);