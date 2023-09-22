// let cartclose = document.querySelector(".cart-close")
// let cartOverlay = document.querySelector(".cart-overlay")
// let body = document.querySelector('.body')
// let overlay1 = document.querySelector('.overlay-1')

// let openBtn = document.querySelector('.nav-open-btn')

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
   
};
//render data

//CART start
// let cartbtn = document.querySelector('.cart-btn')
let cartbtn1 = document.querySelector("#header")
cartbtn1.innerHTML = `
<div class="flex justify-between items-center px-[4%] text-white border border-b-gray-700 border-transparent py-5 border-1">
        <div class="flex gap-6 lg:hidden pt-1">
            <button class="nav-open-btn flex flex-col gap-2 lg:hidden ">
                <span class="line duration-500 w-[36px] h-[2px]"></span>
                <span class="line duration-500 w-[30px] h-[1px]"></span>
                <span class="line duration-500 w-[36px] h-[2px] "></span>
            </button>   
            <a href="../" class="soleilla text-xl md:text-2xl font-bold hidden font-bold duration-300">Soleilla</a>
        </div>
        <div>
            <a href="../" class="soleilla text-2xl xl:text-3xl md:text-lg font-bold logo duration-300">Soleilla</a>
        </div>
        
        <div class="hidden lg:flex gap-10 font-semibold text-gray-300 2xl:text-lg">
            <div class="duration-500 hover:text-orange-400">
                <a href="../">HOME</a>
            </div>
            <div class="duration-500 hover:text-orange-400">
                <a href="">CANDLES</a>
            </div>
            <div class="duration-500 hover:text-orange-400">
                <a href="lotion/lotion.html">LOTION</a>
            </div>
            <div class="duration-500 hover:text-orange-400">
                <a href="">TEA</a>
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
// cartOverlay.innerHTML = `
// <div class="flex gap-2 bottom-0 text-black fixed ">
// <div>Subtotal(${cart.length} items:)</div>
// <div></div>
// </div>
// `

}


//here is where the test ends

// cart array 
let cart = []
//add to cart

function addToCart(id){
    const lotionCartItem = lotion.find((item) => item.id === id);
    const candleCartItem = candle.find((item) => item.id === id);

    if (cart.some((item) => item.id === id)){
        alert("product is already in cart.")
        //option to increment instaed of alert.
        // changenumberofunits("plus", id)
    }
    else{
        if ( document.URL.includes("candle") ) {
            cart.push(candleCartItem);    
        }
        else if ( document.URL.includes("lotion") ) {
            cart.push(lotionCartItem);  

        }
        cartbtn.innerHTML += `
        <div class="cart-items absolute top-[-12px] right-[-9px] px-[4px]  bg-orange-400  rounded-lg text-sm">${cart.length}</div>
        `;
        
        // numitems.innerHTML = cart.length
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
    <div class="flex justify-center texl-2xl gap-1 z-[9999]">Subtotal (${totalItems} items) : $ ${totalPrice.toFixed(2)}</div>
    `
}
function renderCartItems(){
    cartItov.innerHTML = "";
    cart.forEach((item) => {
        cartItov.innerHTML += `
        <div class="z-[9999] cartItov flex justify-between pt-10 px-[2%]" >
            <div>${cart.indexOf(item) + 1}</div>
            <img class="w-[15%]" src="${item.img}" alt="${item.name}" srcset="">
            <div class="flex flex-col gap-2">
                <h3 class="text-center text-sm px-6 font-semibold">${item.name}</h3>
                <div class="flex justify-center gap-1">
                    <div>QTY:</div>
                    <button class="px-4 bg-orange-200 rounded-full text-lg" onclick="changenumberofunits('minus', ${item.id})">-</button>
                    <div>${item.units}</div>
                    <button class="px-4 bg-orange-200 rounded-full text-lg" onclick="changenumberofunits('plus', ${item.id})">+</button>
                </div>
            </div>
            <div class="flex justify-center items-center text-center ">${item.price}</div>
        </div>
        
         `;
         
    })
    // onclick="removeitem(id)"
}
//remove item from cart

// function removeitem(id){
//     cart = cart.filter((item) => item.id !== id);
//     updateCart();
// }

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

//same header

//     cartbtn1.innerHTML = `
//     <div class="flex justify-between items-center px-[4%] text-white border border-b-gray-700 border-transparent py-5 border-1">
//             <div class="flex gap-6 lg:hidden pt-1">
//                 <button class="nav-open-btn flex flex-col gap-2 lg:hidden ">
//                     <span class="line duration-500 w-[36px] h-[2px]"></span>
//                     <span class="line duration-500 w-[30px] h-[1px]"></span>
//                     <span class="line duration-500 w-[36px] h-[2px] "></span>
//                 </button>   
//                 <a href="../" class="soleilla text-xl md:text-2xl font-bold hidden font-bold duration-300">Soleilla</a>
//             </div>
//             <div>
//                 <a href="../" class="soleilla text-2xl xl:text-3xl md:text-lg font-bold logo duration-300">Soleilla</a>
//             </div>
            
//             <div class="hidden lg:flex gap-10 font-semibold text-gray-300 2xl:text-lg">
//                 <div class="duration-500 hover:text-orange-400">
//                     <a href="../">HOME</a>
//                 </div>
//                 <div class="duration-500 hover:text-orange-400">
//                     <a href="">CANDLES</a>
//                 </div>
//                 <div class="duration-500 hover:text-orange-400">
//                     <a href="lotion/lotion.html">LOTION</a>
//                 </div>
//                 <div class="duration-500 hover:text-orange-400">
//                     <a href="">TEA</a>
//                 </div>
//             </div>
//             <div class="cart-btn text-lg relative text-gray-200 ">
//                 <span class="nav-icon">
//                     <i class="fa-solid fa-cart-shopping"></i>   
//                 </span>
//                 <div class="cart-items absolute top-[-12px] right-[-9px] px-[4px]  bg-orange-400  rounded-lg text-sm">${cart.length}</div>
                
//             </div>
//         </div>
//     `;

// let cartclose = document.querySelector(".cart-close")
// let cartOverlay = document.querySelector(".cart-overlay")
// let body = document.querySelector('.body')
// let overlay1 = document.querySelector('.overlay-1')
// let cartbtn = document.querySelector('.cart-btn')
// let openBtn = document.querySelector('.nav-open-btn')
// openBtn.addEventListener("click", mobileMenu);
// function mobileMenu() {
// openBtn.classList.toggle("active");
// cartbtn.classList.toggle("active");
// overlay1.classList.toggle("active");
// body.classList.toggle("overflow-hidden");
// }

// cartbtn.addEventListener("click", cartbtn2)
// function cartbtn2(){
//     cartOverlay.classList.toggle("active");
//     body.classList.toggle("overflow-hidden");
    
// }
// function rendercart(item){
    
// }
// rendercart()   
  
//same header



