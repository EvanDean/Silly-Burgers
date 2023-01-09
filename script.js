// BURGER SLIDESHOW HOME PAGE

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// CUSTOM BURGER MENU

// SELECTS BUN IMAGE 

/*const bunImages = {
  "plainBun" : "C:\Users\Admin\Documents\Coding\Projects\Silly Burgers\images\custom\buns\top\plainBunTop.jpg", // Plain bun Top
  "plainBun" : "C:\Users\Admin\Documents\Coding\Projects\Silly Burgers\images\custom\buns\bottom\plainBunBottom.jpg", // Plain Bun Bottom
  "brownBun" : "C:\Users\Admin\Documents\Coding\Projects\Silly Burgers\images\custom\buns\top\brownBunTop.jpg", // Brown Bun Top
  "brownBun" : "C:\Users\Admin\Documents\Coding\Projects\Silly Burgers\images\custom\buns\bottom\brownBunBottom.png", // Brown Bun Bottom
  "ciabattaBun" : "C:\Users\Admin\Documents\Coding\Projects\Silly Burgers\images\custom\buns\top\ciabattaBunTop.png", // Ciabatta Bun Top
  "ciabattaBun" : "C:\Users\Admin\Documents\Coding\Projects\Silly Burgers\images\custom\buns\bottom\ciabattaBunBottom.png", //CiabattaBottom
  "cupcakeBun" : "C:\Users\Admin\Documents\Coding\Projects\Silly Burgers\images\custom\buns\top\cupcakeBunTop.jpg", // CupCake Bun Top
  "cupcakeBun" : "C:\Users\Admin\Documents\Coding\Projects\Silly Burgers\images\custom\buns\bottom\cupcakeBunBottom.jpg"// CupCake Bottom 
};

function updateBunImage() {
  let topBun = document.getElementsByClassName('topBuns');
  let bottomBun = document.getElementsByClassName('bottomBuns');
  
  topBun.src = bunImages[document.getElementsByClassName('bun').value];
  bottomBun.src = bunImages[document.getElementsByClassName('bun').value];

  topBun.style.display = "block";
  bottomBun.style.display = "block";
}*/





plainTop.style.display = 'none';
brownTop.style.display = 'none';
ciabattaTop.style.display = 'none';
cupcakeTop.style.display = 'none';

plainBun.onclick = function() {
  plainBunTop.style.display = "block";
}

