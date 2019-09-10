
var elInput = document.querySelector('.buffer__slider');
var rbutton = document.querySelector('.arrowr');
var lbutton = document.querySelector('.arrowl');
var slider = document.querySelector('.gallery');
var tape = slider.querySelector('.gallery__images');
var count = 0;
var featuerActive= false;
var icon1 = document.querySelector('.feature__icon1');
var feature1 = document.querySelector('.feature__text1');
var icon2 = document.querySelector('.feature__icon2');
var feature2 = document.querySelector('.feature__text2');
var icon3 = document.querySelector('.feature__icon3');
var feature3 = document.querySelector('.feature__text3');
var mail = document.querySelector('.nl__send');


function handleLast(){

  tape.classList.add('slider__tape--inactive');
  
}


function handleClickr(event) {
  if(count<4){
    count++;
  }
  
  if(count ==1){
    tape.classList.remove('slider__tape--inactive');
  }
  
  var mov = slider.offsetWidth * -0.78 * count;
  tape.style.transform = 'translate(' + mov + 'px, 0px)';

  
  
}



rbutton.addEventListener('click', handleClickr);

function handleClickl(event) {
  if(count>0){
    count--;
  }
  
  var mov = slider.offsetWidth * +0.78 * -count;
  tape.style.transform = 'translate(' + mov + 'px, 0px)';
  
  
}

lbutton.addEventListener('click', handleClickl);
if (elInput) {
  var label = document.querySelector('.buffer__label');
  
  function aparecer(){
    document.querySelector('.buffer__img1').style.opacity=elInput.value/100;
  }
  
  
  if (label) {
    label.innerHTML = elInput.value;
    
    elInput.addEventListener('input', function() {
      label.innerHTML = elInput.value + "%";
      aparecer();
      
      
    }, false);
  }
  
}

icon1.addEventListener("mouseenter",function(){

  (this).classList.add('feature__icon--active');
  (feature1).classList.add('feature__text--active');
  
 
})
feature1.addEventListener("mouseleave",function(){

  (icon1).classList.remove('feature__icon--active');
  (feature1).classList.remove('feature__text--active');
  
 
})
icon2.addEventListener("mouseenter",function(){
  
  (this).classList.add('feature__icon--active');
  (feature2).classList.add('feature__text--active');
  
})
feature2.addEventListener("mouseleave",function(){
  
  (icon2).classList.remove('feature__icon--active');
  (feature2).classList.remove('feature__text--active');
  
})
icon3.addEventListener("mouseenter",function(){
  
  (this).classList.add('feature__icon--active');
  (feature3).classList.add('feature__text--active');
  
})
feature3.addEventListener("mouseleave",function(){
  
  (icon3).classList.remove('feature__icon--active');
  (feature3).classList.remove('feature__text--active');
  
})
mail.addEventListener("mouseenter",function(){
  document.querySelector('.nl__sent').style.opacity=1;
  (this).style.opacity=0;
  
})
mail.addEventListener("mouseleave",function(){
  document.querySelector('.nl__sent').style.opacity=0;
  (this).style.opacity=1;
  
})
