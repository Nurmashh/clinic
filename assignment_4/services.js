let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Therapist',
        image: '240_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg',
        price: 120000
    },
    {
        id: 2,
        name: 'Urologist',
        image: 'Dr-Bayer-NEW-WEBSITE-PART_6.jpg',
        price: 15000
    },
    {
        id: 3,
        name: 'Ophthalmologist',
        image: '5927e153f91ce228885fa91b6522d90e.jpg',
        price: 220.00
    },
    {
        id: 4,
        name: 'Therapeutic massage',
        image: 'woman-2722936_1280.jpg',
        price: 150.00
    },
    {
        id: 5,
        name: 'Laboratory analysis',
        image: '240_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
        price: 320.00
    },
    {
        id: 6,
        name: 'Psychologist',
        image: '240_F_137440378_5mMBNu4Xyxaj25zD8Ag8NQWsOkYKDeq8.jpg',
        price: 120.00
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
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
    reloadCard();
}

let shoppingContainer = document.querySelector('.card');

shoppingContainer.addEventListener('mouseenter', () => {
    // При наведении на корзину добавьте класс, который предотвратит её закрытие
    body.classList.add('prevent-close');
});

shoppingContainer.addEventListener('mouseleave', () => {
    // При уходе с корзины удаляйте класс, чтобы в будущем можно было её закрыть
    body.classList.remove('prevent-close');
});

// В обработчике для .shopping добавьте проверку наличия класса "prevent-close"
openShopping.addEventListener('click', () => {
    if (!body.classList.contains('prevent-close')) {
        body.classList.add('active');
    }
});

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});
