function hideBackground(){
    let shadowBackground = document.querySelector('#temporary-background');
    
    shadowBackground.style.opacity = '0';
    shadowBackground.style['z-index'] = '-1';
}

document.querySelector('#pic-part').onclick = hideBackground;



var currentpage=1;
function nextpage(){
    let pages=document.querySelectorAll('.text-part > div' );
    

}


document.querySelector('#next').onclick = nextpage;
