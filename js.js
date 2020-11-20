function removeTempBack(){
    let temporaryBackground = document.querySelector('#temporary-background');
    
     temporaryBackground.style.opacity = '0';
    temporaryBackground.style['z-index'] = '-1000';
}

document.querySelector('#pic-part').onclick = removeTempBack;

