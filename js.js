
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
}
setTimeout(welcomeMessage,1000);

/*.......................remove temporary background.........................................................*/
function hideBackground(){
    let shadowBackground = document.querySelector('#temporary-background');
    shadowBackground.style.animation= 'fade2 2s';  /* I have added to js because adding
     to css trigger fading background after loading and also
      I need to change opacity to 0 in next line because if not background will come back*/
    shadowBackground.style.opacity = '0';
    if(shadowBackground.style.opacity == '0'){

setTimeout(()=> {shadowBackground.style['z-index'] = '-1';} , 2000)
      
    }
   
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

//when you press the next or previous buttons your old timeouts do not cancel so now you have switched slides, the old timeout will still trigger and then you've also set a new one so it will trigger as well all way within the range of time that you would like.

// Instead of creating a timeout for each button click i would suggest using intervals and keeping track of it outside any functions.

// When the user presses a forward or back button cancel that interval and create a new one so that you don't run into the issue you are having now where you basically have like 10 loops spamming your carousel at the same time.

let TimeoutId;
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
  TimeoutId = setTimeout(imageNext,4000);
}
 setTimeout(imageNext,3000);



function shownext(){
  clearTimeout(TimeoutId);
  imageNext()
}


document.querySelector('#next-horiz').addEventListener('click',shownext )


function  imageCarouselPrev(){
  currentInnerIndex--;
    imageCarousel();
  spanArr[currentInnerIndex-1].style.opacity='1';
  imageArr[currentInnerIndex-1].style.display='block';
  TimeoutId = setTimeout(imageNext,2000);
    
}


function showPrev(){
  clearTimeout(TimeoutId);
  imageCarouselPrev();

}

document.querySelector('#prev-horiz').addEventListener('click',showPrev )