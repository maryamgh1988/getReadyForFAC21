
/*.......................remove temporary background.........................................................*/
function hideBackground(){
    let shadowBackground = document.querySelector('#temporary-background');
    
    shadowBackground.style.opacity = '0';
    shadowBackground.style['z-index'] = '-1';
}

document.querySelector('#pic-part').onclick = hideBackground;

/*.......................slidepages........................................................................*/

/*next*/
var currentpageindex=0;
function nextpage(){
    let pages=document.querySelectorAll('.pages');
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

/*previous*/
function prevpage(){
    let pages=document.querySelectorAll('.pages' );
  let myArr= Array.from(pages);
  for(let i=0;i<myArr.length;i++){
      myArr[i].style.display = 'none';
  }
  currentpageindex--;
  if(currentpageindex< 0){
      currentpageindex = myArr.length-1;
  }
myArr[currentpageindex].style.display='flex';
}


document.querySelector('#prev').onclick = prevpage;



/*.......................slideimages........................................................................*/
let currentInnerIndex = 0;
function imageCarousel(){
    currentInnerIndex++;
    let spans=document.querySelectorAll('#left-part > span');
    let images=document.querySelectorAll('.images');
    let spanArr= Array.from(spans);
    let imageArr= Array.from(images);
    for(let i=0;i<spanArr.length;i++){
        spanArr[i].style.opacity = '0';
        imageArr[i].style.display = 'none';
    }
  if(currentInnerIndex > spanArr.length){
    currentInnerIndex=1;
  }
  spanArr[currentInnerIndex-1].style.opacity='1';
  imageArr[currentInnerIndex-1].style.display='block';
    
   
    setTimeout(imageCarousel,5000);
}
setTimeout(imageCarousel,2000);





