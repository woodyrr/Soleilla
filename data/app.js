let subtotalel = document.querySelector('.subtotal')
//render data
const productEl = document.getElementById("main-section");
function renderProducts(){
    lotion.forEach( (item) => {
        productEl.innerHTML += `
         <section>
            <img src="${item.img}" alt="" srcset="">
            <div>
                <h3>${item.name}</h3>
                <h4>${item.price}</h4>
                <button onclick="addToCart(${item.id})">${item.status}</button>
            </div>
        </section> 
        `;
    });
}
const teaEl = document.getElementById("main-section");
function rendertea(){
    tea.forEach( (item) => {
        teaEl.innerHTML += `
         <section>
            <img src="${item.img}" alt="" srcset="">
            <div>
                <h3>${item.name}</h3>
                <h4>${item.price}</h4>
                <button onclick="addToCart(${item.id})">${item.status}</button>
            </div>
        </section> 
        `;
        
    });
}
let cartItov = document.querySelector(".cartItov")
const candleEl = document.getElementById("main-section");
function rendercandles(){
    candle.forEach( (item) => {
        candleEl.innerHTML += `
         <section>
            <img src="${item.img}" alt="" srcset="">
            <div>
                <h3>${item.name}</h3>
                <h4>${item.price}</h4>
                <button onclick="addToCart(${item.id})">${item.status}</button>
            </div>
        </section> 
        `;
    });
}

if ( document.URL.includes("candle") ) {
    rendercandles()
}
else if ( document.URL.includes("lotion") ) {
    renderProducts()
   
}
else if ( document.URL.includes("tea") ) {
    rendertea()
   
};
//render data end

//CART start
let cartbtn1 = document.querySelector("#header")
cartbtn1.innerHTML = `
<div class="flex justify-between items-center px-[4%] text-white border border-b-gray-700 border-transparent py-5 border-1">
        <div class="flex gap-6 lg:hidden pt-1">
            <button class="nav-open-btn flex flex-col gap-2 lg:hidden ">
                <span class="line duration-500 w-[36px] h-[2px]"></span>
                <span class="line duration-500 w-[30px] h-[1px]"></span>
                <span class="line duration-500 w-[36px] h-[2px] "></span>
            </button>   
            <a href="../" class="soleilla text-xl md:text-2xl hidden font-bold duration-300">Soleilla</a>
        </div>
        <div>
            <a href="../" class="soleilla text-2xl xl:text-3xl md:text-lg font-bold logo duration-300">Soleilla</a>
        </div>
        
        <div class="hidden lg:flex gap-10 font-semibold text-gray-300 2xl:text-lg">
            <div class="duration-500 hover:text-orange-400">
                <a href="../">HOME</a>
            </div>
            <div class="duration-500 hover:text-orange-400">
                <a href="../candle/candle.html">CANDLES</a>
            </div>
            <div class="duration-500 hover:text-orange-400">
                <a href="../lotion/lotion.html">LOTION</a>
            </div>
            <div class="duration-500 hover:text-orange-400">
                <a href="../tea/tea.html">TEA</a>
            </div>
        </div>
        <div class="cart-btn text-lg relative text-gray-200 ">
            <span class="nav-icon">
                <i class="fa-solid fa-cart-shopping"></i>   
            </span>
        </div>
    </div>
`;

let cartclose = document.querySelector(".cart-close")
let cartOverlay = document.querySelector(".cart-overlay")
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
let numitems = document.querySelector('.numitems')
cartbtn.addEventListener("click", cartbtn2)
function cartbtn2(){
cartOverlay.classList.toggle("active");
body.classList.toggle("overflow-hidden");
}
// cart array 
let cart = []
//add to cart
function addToCart(id){
    const lotionCartItem = lotion.find((item) => item.id === id);
    const candleCartItem = candle.find((item) => item.id === id);
    const teaCartItem = tea.find((item) => item.id === id);

    if (cart.some((item) => item.id === id)){
        alert("product is already in cart.")
    }
    else{
        if ( document.URL.includes("candle") ) {
            cart.push(candleCartItem);    
        }
        else if ( document.URL.includes("lotion") ) {
            cart.push(lotionCartItem);  

        }
        else if ( document.URL.includes("tea") ) {
            cart.push(teaCartItem);  

        }
        cartbtn.innerHTML += `
        <div class="cart-items absolute top-[-12px] right-[-9px] px-[4px]  bg-orange-400  rounded-lg text-sm">${cart.length}</div>
        `;
    }

    updateCart()
}

function updateCart(){
    renderCartItems();
    renderSubtotal();
}
function renderSubtotal(){
    let totalPrice  = 0, totalItems = 0;
    cart.forEach((item)=>{
        totalPrice += item.value * item.units;
        totalItems += item.units;
    })
    subtotalel.innerHTML = `
    <div class="flex justify-center text-lg lg:text-2xl gap-1 z-[9999]">Subtotal (${totalItems} items) : $ ${totalPrice.toFixed(2)}</div>
    `
}
function renderCartItems(){
    cartItov.innerHTML = "";
    cart.forEach((item) => {
        cartItov.innerHTML += `
        <div class="z-[9999] cartItov flex text-white justify-between pt-10 lg:pt-6 px-[6%] lg:px-[10%] duration-300" >
            <img class="w-[10%] lg:w-[20%] duration-500 hover:bg-white rounded-none" src="${item.img}" alt="${item.name}" srcset="">
            <div class="flex flex-col justify-center items-center gap-2">
                <h3 class="text-center text-sm px-6 font-semibold lg:text-base">${item.name}</h3>
                <div class="flex justify-center items-center gap-1">
                    <div>QTY:</div>
                    <button class=" px-2 lg:px-3 bg-orange-300 rounded-lg text-lg  text-black" onclick="changenumberofunits('minus', ${item.id})">-</button>
                    <div class="lg:text-2xl">${item.units}</div>
                    <button class="px-2 lg:px-3 bg-orange-300 rounded-lg text-lg text-black" onclick="changenumberofunits('plus', ${item.id})">+</button>
                </div>
            </div>
            <div class="flex justify-center items-center text-center lg:text-lg">${item.price}</div>
        </div>
         `;
    })
}
//changing units
function changenumberofunits(action, id){
    cart = cart.flatMap((item) => {
        let oldunit = item.units;
        if(item.id === id){
            if(action === "minus" && oldunit > 1 ){
                oldunit--;
                
            }
            else if(action === "plus" && oldunit < 15  ){
                oldunit++;
            }
            
            else{
                return [];
            }
            
        }
        return {
            ...item,
            units:oldunit 
        };
        
    })
    
    updateCart()
}
//CART end