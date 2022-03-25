const container = document.querySelector('#drawingArea')
const xDiv = document.createElement('div');
const yDiv = document.createElement('div');
for (i = 1; i <= 16; i++){
    const xDiv = document.createElement('div');
    xDiv.classList.add('xblock');
    xDiv.textContent = "";
    drawingArea.appendChild(xDiv);
    for (x = 1 ;x <= 16; x++){
        const yDiv = document.createElement('div');
        yDiv.classList.add('yblock');
        yDiv.textContent="";
        xDiv.appendChild(yDiv);
    }
}
function createGrid(num = 16){
    for (i = 1; i <= num; i++){
        const xDiv = document.createElement('div');
        xDiv.classList.add('xblock');
        xDiv.textContent = "";
        container.appendChild(xDiv);
        for (x = 1 ;x <= num; x++){
            const yDiv = document.createElement('div');
            yDiv.classList.add('yblock');
            yDiv.textContent="";
            xDiv.appendChild(yDiv);
        }
    }
    const yblock = document.querySelectorAll('.yblock'); //queries the grids

    yblock.forEach(yblock => yblock.addEventListener('mouseover', function(e){ //when hovering over the blocks they change a specific color
        console.log(e.target);
        //yblock.style.cssText ='background: red'; 
        changeColor(yblock);
}));
}

const yblock = document.querySelectorAll('.yblock'); //queries the grids

yblock.forEach(yblock => yblock.addEventListener('mouseover', function(e){ //when hovering over the blocks they change a specific color
    console.log(e.target);
    //yblock.style.cssText ='background: red'; 
    changeColor(yblock);
}));

const reset = document.querySelector('#reset');
reset.addEventListener('click', function(e){
    yblock.forEach(resetColor);
    console.log(e.target);
    const removeVarx = document.querySelectorAll('.xblock');
    removeVarx.forEach(removeGrid);
    const removeVary = document.querySelectorAll('.yblock');
    removeVary.forEach(removeGrid);
    let size = prompt("Enter Grid size: ");
    createGrid(size);
    

});
function resetColor(block){
    block.style.cssText='background: white';
}
function changeColor(block){
    block.style.cssText='background: red';
}
function removeGrid(block){
    block.remove();
}
/*
Reference code for mousedown and mouse

let state = false;
const yblock = document.querySelectorAll('.yblock'); //queries the grids
yblock.forEach(yblock => yblock.addEventListener('mousedown', function(e){
    state = true;
}));

yblock.forEach(yblock => yblock.addEventListener('mouseup', function(e){
    state = false;
}));

yblock.forEach(yblock => yblock.addEventListener('mouseover', function(e){ //when hovering over the blocks they change a specific color
    console.log(e.target);
    //yblock.style.cssText ='background: red'; 
    if (state === true){
        changeColor(yblock);
    }
    else if(state === false){
        return;
    }
}));*/