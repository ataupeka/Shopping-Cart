let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');


openShopping.addEventListener('click', ()=>{
body.classList.add('active');

})

closeShopping.addEventListener( 'click', ()=> {
body.classList.remove('active');


})


let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: '1.jpg',
        price: 18.00,
    },

    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: '2.jpg',
        price: 25.00,
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: '3.jpg',
        price: 28.00,
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: '4.jpg',
        price: 32.00,
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: '5.jpg',
        price: 35.00,
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: '6.jpg',
        price: 27.00,
    },

];

let listCards = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="images/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price"><span>$ </span>${value.price.toLocaleString()}</div>
        <button onclick="addToCart(${key})">ORDER</button>
      

        `;

      
list.appendChild(newDiv);
  })

}

initApp();

function addToCart(key){
if(listCards[key] == null){
    listCards[key] = products[key];
    listCards[key].quantity = 1;
}
reloadCart();

}

function reloadCart(){
listCart.innerHTML = '';
let count = 0;
let totalPrice = 0;
listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;


    if(value != null){
        let newDiv = document.createElement('li');
        newDiv.innerHTML = `
        <div><img src="images/${value.image}"/></div>
        <div>${value.name}</div>
        <div>${value.price}</div>
        <div>${value.quantity}</div>
        <div>
        <button onClick="changeQuantity(${key}, ${value.quantity - 1})"> - </button>
        <div class="count">${value.quantity}</div>
        <button onClick="changeQuantity(${key}, ${value.quantity + 1})"> + </button>
      

        </div>

        `;

        listCart.appendChild(newDiv);
    }


})


total.innerText = totalPrice.toLocaleString();
quantity.innerText = count;


}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;


    }
    reloadCart();
    }
