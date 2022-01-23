const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navigation-items');

  burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
    //burger animation
    burger.classList.toggle('toggle');
  });

}
navSlide();


var timer;

var slideIndex = 1;
var slideIndex1 = 1;
showSlides(slideIndex, slideIndex1);

function plusSlides(n) {
  showSlides(slideIndex += n, slideIndex1 += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n, slideIndex1 = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var slides1 = document.getElementsByClassName("mySlides1")
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length && n > slides1.length) {slideIndex = 1, slideIndex1 = 1}
  if (n < 1) {slideIndex = slides.length, slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

  slides[slideIndex-1].style.display = "block";
  slides1[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " active";
  clearTimeout(timer);
  timer = setTimeout(() => plusSlides(1), 3000);

}


var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
      },3000);
  }
}


function prikaziSlike() {
  document.getElementsByClassName("galleryWithImages")[0].style.display = "block";
  document.getElementsByClassName("ImagesForPhone")[0].style.display = "none";
  document.getElementsByClassName("linkDoSlika")[0].style.display = "none";
  document.getElementsByClassName("linkDoSlika1")[0].style.display = "block";
}

function smanjiSlike(){
  document.getElementsByClassName("galleryWithImages")[0].style.display = "none";
  document.getElementsByClassName("ImagesForPhone")[0].style.display = "block";
  document.getElementsByClassName("linkDoSlika1")[0].style.display = "none";
  document.getElementsByClassName("linkDoSlika")[0].style.display = "block";
}
