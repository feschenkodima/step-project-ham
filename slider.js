let sliderContent = document.querySelectorAll(
  ".people-say__item--slider .slider-img-btn"
);


for (let i = 0; i <= sliderContent.length - 1; i++) {
  const elSlide = sliderContent[i];
  elSlide.addEventListener("click", slideClickHandler);
}


function slideClickHandler() {
  document.querySelector(".slider-img-btn.active").classList.remove("active");
  event.target.classList.add("active");
  document.querySelector(".people-say__content--item.active").classList.remove("active");
  event.target.classList.add("active");
  let currentSlideIndex = event.target.dataset.index;
  document.getElementById("slide-" + currentSlideIndex).classList.add("active");

  let sliderBtn = document.querySelectorAll('.slider-btn')
  
  sliderBtn.forEach(function (direction){
      direction.addEventListener('click', function(){
        // let currentSlide = document.querySelector(".slider-img-btn.active").dataset.index;
        if('prev' === this.dataset.direction && 1 < currentSlideIndex){
          currentSlideIndex--
        }
    
        if('next' === this.dataset.direction && 4 > currentSlideIndex){
          currentSlideIndex++
        }
      })
    })
  }
// let sliderBtn = document.querySelectorAll('.slider-btn')

// sliderBtn.forEach(function (direction){
//   direction.addEventListener('click', function(){
//     let currentSlide = document.querySelector(".slider-img-btn.active").dataset.index;
//     if('prev' === this.dataset.direction && 1 < currentSlideIndex){
//       currentSlideIndex--
//     }

//     if('next' === this.dataset.direction && 4 > currentSlideIndex){
//       currentSlideIndex++
//     }
//     slideClickHandler();
//   })
// })