function hideBackground(){
    let shadowBackground = document.querySelector('#shadow-background');
    
    shadowBackground.style.opacity = '1';
    shadowBackground.style['z-index'] = '0';
}

document.querySelector('#pic-part').onclick = hideBackground;

