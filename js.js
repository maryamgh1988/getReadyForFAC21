
let currentmessIndex = 0;
let welcometimeId;
function welcomeMessage(){
  currentmessIndex++;
  let welcomes = document.querySelectorAll('#welcome-message span');
  let welcomArr = Array.from(welcomes);
  for(let i=0;i<welcomArr.length; i++){
    welcomArr[i].style.opacity = 0;
  }
  welcomArr[currentmessIndex - 1].style.opacity = 1;
  welcometimeId = setTimeout(welcomeMessage,1000);
  if(currentmessIndex ==welcomArr.length){
    clearTimeout(welcometimeId);
  }
  if(document.querySelector('#click-me').style.opacity == 1){
    setTimeout(() => {document.querySelector('#click-me').style.animation= "fadeClick 1s infinite"}, 500);
  }
}
setTimeout(welcomeMessage,1000);

/*.......................remove temporary background.........................................................*/
let hidId;
function hideBackground(){
    let shadowBackground = document.querySelector('#temporary-background');
    shadowBackground.style.animation= 'fade2 1s';  /* I have added to js because adding
     to css trigger fading background after loading and also
      I need to change opacity to 0 in next line because if not background will come back*/
    shadowBackground.style.opacity = 0;
    document.querySelector('#welcome-message').style.display = 'none';

    if(shadowBackground.style.opacity == 0){
      /* I have added this because background doesnt fade gradually . does suddenly*/

setTimeout(()=> {shadowBackground.style['z-index'] = '-1';} , 1000);
      
    }


    /*   add settimeout here. Oli taught me that when we want to delay something it is better to add it to an eventlistener not if statement which I have done*/
    hidId = setTimeout(imageNext,1000);
    console.log(hidId + 'hid')
}

document.querySelector('#pic-part').onclick = hideBackground;

/*.......................slidepages........................................................................*/
let pages;
let myArr;
function partOfFunction(event){
  pages=document.querySelectorAll('.pages' );
  myArr= Array.from(pages);
  for(let i=0;i<myArr.length;i++){
      myArr[i].style.display = 'none';
  }





  if(event.target.className == "contact-span"){
    partOfFunction();
    document.querySelector('#page3').style.display= 'flex';
  } else if(event.target.className == 'fac'){
    partOfFunction();
    document.querySelector('#page2').style.display= 'grid';
    if(!startId){
      startId = setTimeout(showGridItems,500);   
     }
  } else if(event.target.className == 'life-journey'){
    partOfFunction();
    document.querySelector('#page1').style.display= 'flex';
  }







if(myArr[0].style.display == 'flex'){
 setTimeout(imageNext,4000);
 
  document.querySelector('#horizental-arrow').style.opacity= 1;
  }else{
    clearTimeout(TimeoutIdInnerslide);
    document.querySelector('#horizental-arrow').style.opacity= 0;
  }
}
/*next*/

var currentpageindex=0;
let startId;
function nextpage(){
  partOfFunction()

  currentpageindex++;
  if(currentpageindex>= myArr.length){
      currentpageindex = 0;
  }
  if(currentpageindex == 1){
    myArr[currentpageindex].style.display='grid';
    /* settimeout for showing boxes in page 2  */
    if(!startId){
      startId = setTimeout(showGridItems,500);   
     }
}else{
  myArr[currentpageindex].style.display='flex';
}

}


document.querySelector('#next').onclick = nextpage;

/*previous*/
function prevpage(){
  
  partOfFunction();

  currentpageindex--;
  if(currentpageindex< 0){
      currentpageindex = myArr.length-1;
  }
  if(currentpageindex == 1){
    myArr[currentpageindex].style.display='grid';

    /* I wanted to make it start from beginning but I have given up. I dont have enough time. and if I click prev and next button timeout jump together .I will fix later. now it is fine */
if(!startId){
  startId = setTimeout(showGridItems,500);
}
}else{
  myArr[currentpageindex].style.display='flex';
}

}


document.querySelector('#prev').onclick = prevpage;

/* ????????????????????????????????????????????????????????   */
// function jumpTopage(event){
// if(event.target.className == "contact-span"){
//   partOfFunction();
//   document.querySelector('#page3').style.display= 'flex';
// } else if(event.target.className == 'fac'){
//   partOfFunction();
//   document.querySelector('#page2').style.display= 'grid';
//   if(!startId){
//     startId = setTimeout(showGridItems,500);   
//    }
// } else if(event.target.className == 'life-journey'){
//   partOfFunction();
//   document.querySelector('#page1').style.display= 'flex';
// }
// }

document.querySelector('.contact-span').onclick = jumpTopage;
document.querySelector('.life-journey').onclick = jumpTopage;
document.querySelector('.fac').onclick = jumpTopage;


/* ????????????????????????????????????????????????????????   */

/*.......................slideimages........................................................................*/


  let TimeoutIdInnerslide;
let spans;
let images;
let spanArr;
let imageArr
let currentInnerIndex = 0;
function imageCarousel(){
  spans=document.querySelectorAll('#left-part > span');
  images=document.querySelectorAll('.images');
  spanArr= Array.from(spans);
  imageArr= Array.from(images);
  if(currentInnerIndex==1){
    document.querySelector('#horizental-arrow').style.opacity= 1;
  }
  for(let i=0;i<spanArr.length;i++){
      spanArr[i].style.opacity = '0';
      imageArr[i].style.display = 'none';
  }
if(currentInnerIndex > spanArr.length){
  currentInnerIndex=1;
}
if(currentInnerIndex<1){
  currentInnerIndex = spanArr.length;
}

}

function imageNext(){
    currentInnerIndex++;
    imageCarousel();
  spanArr[currentInnerIndex-1].style.opacity='1';
  imageArr[currentInnerIndex-1].style.display='block';   
  TimeoutIdInnerslide = setTimeout(imageNext,4000);
}
 


function shownext(){
  clearTimeout(TimeoutIdInnerslide);
  imageNext()
}


document.querySelector('#next-horiz').addEventListener('click',shownext )





function  imagePrev(){
  currentInnerIndex--;
    imageCarousel();
  spanArr[currentInnerIndex-1].style.opacity='1';
  imageArr[currentInnerIndex-1].style.display='block';
  
  TimeoutIdInnerslide = setTimeout(imageNext,4000)
  
}


function showPrev(){
  clearTimeout(TimeoutIdInnerslide);
  imagePrev();

}

document.querySelector('#prev-horiz').addEventListener('click',showPrev );


/*.......................page2........................................................................*/
let gridItems ;
let gridItemsArray;
let textArray = [];
let showedIndex = 0;
function showGridItems(){
  
  
gridItems = document.querySelectorAll('.grid-item');
gridItemsArray = Array.from(gridItems);
gridItemsArray.sort((a,b) => {return b.textContent.length - a.textContent.length})

gridItemsArray[showedIndex].style.opacity = 1;
gridItemsArray[showedIndex].style.animation= "show 0.3s "
if(showedIndex<gridItemsArray.length-1){
  /*   -1 because of next ++ */
  showedIndex++;
}
setTimeout(showGridItems,500);
}


function showItems(){

}

