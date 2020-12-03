
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
let currentindex = 0;
function mycarsoul(){
    currentindex++;
    let spans=document.querySelectorAll('#left-part > span');
    let images=document.querySelectorAll('.images');
    let myArr2= Array.from(spans);
    let myArr3= Array.from(images);
    for(let i=0;i<myArr2.length;i++){
        myArr2[i].style.display = 'none';
        myArr3[i].style.display = 'none';
    }
  if(currentindex > myArr2.length){
    currentindex=1;
  }
    myArr2[currentindex-1].style.display='block';
    myArr3[currentindex-1].style.display='block';
    
   
    setTimeout(mycarsoul,2000);
}
setTimeout(mycarsoul,2000);





