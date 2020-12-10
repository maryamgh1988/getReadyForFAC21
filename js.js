
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

function hideBackground(){
    let shadowBackground = document.querySelector('#temporary-background');
    shadowBackground.style.animation= 'fade2 2s';  /* I have added to js because adding
     to css trigger fading background after loading and also
      I need to change opacity to 0 in next line because if not background will come back*/
    shadowBackground.style.opacity = 0;
    document.querySelector('#welcome-message').style.display = 'none';

    if(shadowBackground.style.opacity == 0){
      /* I have added this because background doesnt fade gradually . does suddenly*/

setTimeout(()=> {shadowBackground.style['z-index'] = '-1';} , 2000);
      
    }
    /*   add settimeout here. Oli taught me that when we want to delay something it is better to add it to an eventlistener not if statement which I have done*/
    setTimeout(imageNext,4000);
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


if(myArr[0].style.display == 'flex'){
  setTimeout(imageNext,4000);
  console.log('man')
  
  }else{
    console.log('to')
    clearTimeout(TimeoutIdInnerslide);
  }


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
  console.log(TimeoutIdInnerslide)
}
 


function shownext(){
  clearTimeout(TimeoutIdInnerslide);
  imageNext()
}


document.querySelector('#next-horiz').addEventListener('click',shownext )





function  imageCarouselPrev(){
  currentInnerIndex--;
    imageCarousel();
  spanArr[currentInnerIndex-1].style.opacity='1';
  imageArr[currentInnerIndex-1].style.display='block';
  
  setTimeout(imageNext,4000)
}


function showPrev(){
  clearTimeout(TimeoutIdInnerslide);
  imageCarouselPrev();

}

document.querySelector('#prev-horiz').addEventListener('click',showPrev )