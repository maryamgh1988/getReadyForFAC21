
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



/*.......................slidepages........................................................................*/

function mycarsoul(){
    let spans=document.querySelectorAll('#left-part > span');
    let images=document.querySelectorAll('.images');
    let myArr2= Array.from(spans);
    let myArr3= Array.from(images);
    // console.log(myArr2);
    // console.log(myArr3);
    for(let i=0;i<myArr2.length;i++){
        myArr2[i].style.display = 'none';
        console.log(myArr3[i]);
        myArr3[i].style.display = 'none';
    }
}


setTimeout(mycarsoul,2000)



