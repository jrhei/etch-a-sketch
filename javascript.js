const container = document.querySelector('#drawingArea')

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
const yblock = document.querySelectorAll('.yblock'); //queries the grids
yblock.forEach(yblock => yblock.addEventListener('mouseover', function(e){ //when hovering over the blocks they change a specific color
    console.log(e.target);
    yblock.style.cssText ='background: red'; 
}));