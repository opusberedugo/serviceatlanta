let burger = document.querySelector(".burger");
let menu = document.querySelector(".options");

burger.addEventListener("click", (e)=>{
  $(menu).slideToggle(250);
})

$(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 500,
  smartSpeed: 1500,
  autoplayHoverPause: false
});