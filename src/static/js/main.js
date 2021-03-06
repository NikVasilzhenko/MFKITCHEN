//faq
const animationTime = 350;
function slideDown($this, animationTime) {
  let overlay = $this;
    
  if(getComputedStyle(overlay, true).display === 'none'){
    if( !(overlay.classList.contains('inAnimate')) ){
      overlay.classList.add('inAnimate');
        
      let paddingTopSize = parseInt(getComputedStyle(overlay, true).paddingTop);
      let paddingBottomSize = parseInt(getComputedStyle(overlay, true).paddingBottom);
      let marginTopSize = parseInt(getComputedStyle(overlay, true).marginTop);
      let marginBottomSize = parseInt(getComputedStyle(overlay, true).marginBottom); 

      overlay.style.paddingTop = '0';
      overlay.style.paddingBottom = '0';
      overlay.style.marginTop = '0';
      overlay.style.marginBottom = '0';
      overlay.style.display = 'block';
      overlay.style.overflow = 'hidden';
      overlay.style.height = '0';

      let scrollSize = overlay.scrollHeight + paddingTopSize + paddingBottomSize;

      overlay.style.transition = 'all ' + animationTime + 'ms ease-in-out';
      overlay.style.height = scrollSize + "px";
      overlay.style.paddingTop = paddingTopSize + "px";
      overlay.style.paddingBottom = paddingBottomSize + "px";
      overlay.style.marginTop = marginTopSize + "px";
      overlay.style.marginBottom = marginBottomSize + "px";
      setTimeout(
        (function(){
          overlay.style.overflow = '';
          overlay.style.height = '';
          overlay.style.paddingTop = '';
          overlay.style.paddingBottom = '';
          overlay.style.marginTop = '';
          overlay.style.marginBottom = '';
          overlay.classList.remove('inAnimate');
        }), animationTime
      )
    }
  }
}
function slideUp($this, animationTime) {
  let overlay = $this;
    
  if(getComputedStyle(overlay, true).display !== 'none'){
      
    if( !(overlay.classList.contains('inAnimate')) ){
      overlay.classList.add('inAnimate');

      let paddingTopSize = parseInt(getComputedStyle(overlay, true).paddingTop);
      let paddingBottomSize = parseInt(getComputedStyle(overlay, true).paddingBottom); 
      let marginTopSize = parseInt(getComputedStyle(overlay, true).marginTop);
      let marginBottomSize = parseInt(getComputedStyle(overlay, true).marginBottom);
      let containerHeight = overlay.clientHeight; 

      overlay.style.height = containerHeight + 'px';
      overlay.style.overflow = 'hidden';      
      overlay.style.paddingTop = paddingTopSize + 'px';
      overlay.style.paddingBottom = paddingBottomSize + 'px';
      overlay.style.marginTop = marginTopSize + 'px';
      overlay.style.marginBottom = marginBottomSize + 'px';
      overlay.style.transition = 'all ' + animationTime + 'ms ease-in-out';

      setTimeout(
        (function(){
          overlay.style.paddingTop = 0;
          overlay.style.paddingBottom = 0;
          overlay.style.marginTop = 0;
          overlay.style.marginBottom = 0;
          overlay.style.height = 0;
        }), 100
      )      
      setTimeout(
        (function(){
          overlay.style.overflow = '';
          overlay.style.height = '';
          overlay.style.paddingTop = '';
          overlay.style.paddingBottom = '';
          overlay.style.marginTop = '';
          overlay.style.marginBottom = '';
          overlay.style.display = 'none';
          overlay.classList.remove('inAnimate');
        }), animationTime
      )
    }
  }
}
function slideToggle($this, animationTime){
  let overlay = $this;
  if(getComputedStyle(overlay, true).display !== 'none'){
    slideUp($this, animationTime);
  } else{
    slideDown($this, animationTime);
  }
}
function accordion($this){
  if($this.classList.contains('open')){
    $this.classList.toggle('open');
    let hideContent = $this.nextElementSibling;
    slideToggle(hideContent, animationTime);
  } else{
    let openItem = document.querySelector('.faq-accordion-item__btn.open');
    if(openItem){
      openItem.classList.remove('open');
      slideToggle(openItem.nextElementSibling, animationTime);
    }
    $this.classList.toggle('open');
    let hideContent = $this.nextElementSibling;
    slideToggle(hideContent, animationTime);
  }
}

//calc tabs
function calcTabSelect($this, slideIndex){
  calcMains.slideTo(slideIndex);
  document.querySelector('.calc-tab.active').classList.remove('active');
  $this.classList.add('active');
}

//food tabs
function selectItem($this, slideIndex){
  foodSlider.slideTo(slideIndex);
  document.querySelector('.calc-gallery__item.active').classList.remove('active');
  $this.classList.add('active');
}

//button click effect
var animateButton = function(e) {

  var btn = e.target.parentElement;
  
  btn.preventDefault;
  //reset animation
  btn.classList.remove('animate');
  
  btn.classList.add('animate');
  setTimeout(function(){
    btn.classList.remove('animate');
  },750);
};

var bubblyButtons = document.getElementsByClassName("js-bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}

//scroll animation
if(window.innerWidth > 800){
  let step = 300;
  //init
  const controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  });
  //pin
  new ScrollMagic.Scene({
    triggerElement: '#js-sec-scroll-1',
    duration: (step * 8),
    triggerHook: 0
  }).setPin('#js-sec-scroll-1').addTo(controller);

  //show title
  new ScrollMagic.Scene({
    triggerElement: "#js-sec-scroll-1",
    offset: 0
  }).setClassToggle('.for-whom__title', 'show') .addTo(controller);

  //show 1-st card
  new ScrollMagic.Scene({
    triggerElement: "#js-sec-scroll-1",
    offset: (step*2)
  }).setClassToggle('.for-whom-item--1', 'show') .addTo(controller);

  //show 2-st card
  new ScrollMagic.Scene({
    triggerElement: "#js-sec-scroll-1",
    offset: (step*4)
  }).setClassToggle('.for-whom-item--2', 'show') .addTo(controller);

  //show 3-st card
  new ScrollMagic.Scene({
    triggerElement: "#js-sec-scroll-1",
    offset: (step*6)
  }).setClassToggle('.for-whom-item--3', 'show') .addTo(controller);

}

//input type number
function catalogItemCounter(field){
  let allItems = document.querySelectorAll(field);
  for(i = 0; i < allItems.length; i++){
    let inputNum = allItems[i].querySelector('.js-number-input'),
        inputMin = inputNum.getAttribute('min');
    allItems[i].querySelector('.js-number-minus').addEventListener('click', function(){
      if(inputNum.value <= inputMin){
        inputNum.value = inputMin;
      } else{
        inputNum.value = Number(inputNum.value) - 1;
      }
    });
    allItems[i].querySelector('.js-number-plus').addEventListener('click', function(){
      inputNum.value = Number(inputNum.value) + 1;
    });
  }
}
    
catalogItemCounter('.js-number');

//styled select
var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("js-styled-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
	c = document.createElement("DIV");
	c.innerHTML = selElmnt.options[j].innerHTML;
	c.addEventListener("click", function(e) {
		var y, i, k, s, h;
		s = this.parentNode.parentNode.getElementsByTagName("select")[0];
		h = this.parentNode.previousSibling;
		for (i = 0; i < s.length; i++) {
		  if (s.options[i].innerHTML == this.innerHTML) {
			s.selectedIndex = i;
			h.innerHTML = this.innerHTML;
			y = this.parentNode.getElementsByClassName("same-as-selected");
			for (k = 0; k < y.length; k++) {
			  y[k].removeAttribute("class");
			}
			this.setAttribute("class", "same-as-selected");
			break;
		  }
		}
		h.click();
	});
	b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
	e.stopPropagation();
	closeAllSelect(this);
	this.nextSibling.classList.toggle("select-hide");
	this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
	if (elmnt == y[i]) {
	  arrNo.push(i)
	} else {
	  y[i].classList.remove("select-arrow-active");
	}
  }
  for (i = 0; i < x.length; i++) {
	if (arrNo.indexOf(i)) {
	  x[i].classList.add("select-hide");
	}
  }
}
document.addEventListener("click", closeAllSelect);

//calc mob popup
function openCalcPopup(){
  document.getElementById('js-calc-mob-popup').classList.toggle('open');
}

//show drop
function showDrop($this){
  if($this.value.length >= 4){
    $this.nextElementSibling.classList.add('open');
  } else{
    $this.nextElementSibling.classList.remove('open');
  }
}

//open popup
function showPopup(){
  document.getElementById('js-food-map').classList.add('open');
}
function hidePopup(){
  document.getElementById('js-food-map').classList.add('close');
  function delPopupClasses(){
    document.getElementById('js-food-map').classList.remove('open');
    document.getElementById('js-food-map').classList.remove('close');
  }
  setTimeout(delPopupClasses, 250);
}
