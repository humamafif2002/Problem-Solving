const navbar = document.querySelector('.navbar');
const penutup = document.querySelector('.penutup');
window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
        navbar.classList.add('transisi');
        penutup.style.display = 'block';
    } else if (window.scrollY < 80) {
        penutup.style.display = 'none';
        navbar.classList.remove('transisi');
    }
});
  
window.addEventListener ('scroll',function(){
    console.log(this.scrollY);

})