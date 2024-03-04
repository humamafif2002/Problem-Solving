const navbar = document.querySelector('.navbar');
const penutup = document.querySelector('.penutup');
window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
        navbar.classList.add('transisi');
    } else if (window.scrollY < 80) {
        navbar.classList.remove('transisi');
    }
});
  
window.addEventListener ('scroll',function(){
    console.log(this.scrollY);

})