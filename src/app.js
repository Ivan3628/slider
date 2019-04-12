let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0; //represents what slide we re on

/*
function reset() -clears all images
 - each time we change a slide we want to clear all the images, set them all to display-none
*/
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

//Initialize slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

//Show previous slide
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
  //current - whatever the current image is
  //current-- decreasing by one
}

//Show next slide
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

//Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
    /*if we re at the first image when we click left arrow we want to go to the last image so we are setting the current to the max number of images*/
  }
  slideLeft();
});

//Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
    /*when we get to the last image when we click the button we want to go to the first image*/
  }
  slideRight();
});

startSlide();
