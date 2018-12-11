var sliders=document.getElementsByClassName('main-slider-item');
var buttons=document.getElementsByClassName('main-slider-dot')
buttons[0].onclick=function(){
  for (var i = 1; i <buttons.length; i++) {
  if(buttons[i].classList.contains('active-dot')){
    buttons[i].classList.remove('active-dot');
    sliders[i].classList.remove('active');
    }
  }
  buttons[0].classList.add('active-dot');
  sliders[0].classList.add('active');
}
buttons[1].onclick=function(){
  for (var i = 0; i <buttons.length; i++) {
  if(buttons[i].classList.contains('active-dot')){
    buttons[i].classList.remove('active-dot');
    sliders[i].classList.remove('active');
    }
  }
  buttons[1].classList.add('active-dot');
  sliders[1].classList.add('active');
}
buttons[2].onclick=function(){
  for (var i = 0; i <buttons.length; i++) {
  if(buttons[i].classList.contains('active-dot')){
    buttons[i].classList.remove('active-dot');
    sliders[i].classList.remove('active');
    }
  }
  buttons[2].classList.add('active-dot');
  sliders[2].classList.add('active');
}
