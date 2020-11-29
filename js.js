function hideBackground(){
    let shadowBackground = document.querySelector('#temporary-background');
    
    shadowBackground.style.opacity = '0';
    shadowBackground.style['z-index'] = '-1';
}

document.querySelector('#pic-part').onclick = hideBackground;



var currentpageindex=0;
function nextpage(){
    let pages=document.querySelectorAll('.text-part > div' );
  let myArr= Array.from(pages);
  for(let i=0;i<myArr.length;i++){
      myArr[i].style.display = 'none';
  }
  currentpageindex++;
  if(currentpageindex>= myArr.length){
      currentpageindex = 0;
  }
myArr[currentpageindex].style.display='flex';
}


document.querySelector('#next').onclick = nextpage;
