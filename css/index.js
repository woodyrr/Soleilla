let body = document.querySelector('.body')
let overlay1 = document.querySelector('.overlay-1')
let cartbtn = document.querySelector('.cart-btn')
let openBtn = document.querySelector('.nav-open-btn')
openBtn.addEventListener("click", mobileMenu);
function mobileMenu() {
    openBtn.classList.toggle("active");
    cartbtn.classList.toggle("active");
    overlay1.classList.toggle("active");
    body.classList.toggle("overflow-hidden");
}