fetch('candles.json')
.then(function(response){
    return response.json();
})
.then(function(data){
    for(let i = 0; i < data.length; i++){
        let mainsec = document.getElementById('main-section')
        const newsec = document.createElement('section');
        const newdiv = document.createElement('div');
        const newimg = document.createElement('img');
        const newh3 = document.createElement('h3');
        const newh4 = document.createElement('h4');
        const newbtn = document.createElement('button');
        newh3.innerText = data[i].name;
        newh4.innerText = data[i].price;
        newbtn.innerText = data[i].status;
        newimg.src = data[i].img;
        newdiv.append(newh3);
        newdiv.append(newh4);
        newdiv.append(newbtn);
        newsec.append(newimg);
        newsec.append(newdiv);
        mainsec.append(newsec);
    }
})
.catch(function(err){
    console.log(err);
});

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