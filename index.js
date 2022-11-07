var swiper = new Swiper(".bg-slider-thumbs", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 0,
});
var swiper2 = new Swiper(".bg-slider", {
  loop: true,
  spaceBetween: 0,
  thumbs: {
      swiper: swiper,
  },

  //nav bar effects
});
window.addEventListener('scroll',function(){
  const header = this.document.querySelector('header');
  header.classList.toggle('sticky',window.scrollY>1)
});

//nav menu bar toggle
const menubtn = querySelector('.nav-menu-btn');
const closebtn = querySelector('.nav-close-btn');
const navigation = querySelector('.navigation');

menubtn.addEventListener('click',()=>{
  navigation.classList.add("active");
})
closebtn.addEventListener('click',()=>{
  navigation.classList.remove("active")
})