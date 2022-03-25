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
