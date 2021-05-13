let items = {
    'carrot': 25,
    'avocado': 100
};

let cart = {
    'carrot': 0,
    'avocado': 0    
};
const cartElement = document.querySelector('#cart_in');
const butoneElement = document.querySelector('nextbutton1');
const cartcloseElement = document.querySelector('closecart_in');
const addressElement = document.querySelector('#address');
const addcloseElement = document.querySelector('closeadress');
const buttwoElement = document.querySelector('nextbutton2');
const commentElement = document.querySelector('#comment');
const commcloseElement = document.querySelector('closecomment');

document.onclick = event => {  
    if (event.target.classList.contains("plus")){
        plusFunc(event.target.dataset.id);
    };
    if (event.target.classList.contains("minus")){
        minusFunc(event.target.dataset.id);
        
    };
    if (event.target.classList.contains("basket")){
        cartElement.style.display = 'block';
        cartItems();
        basketAlert();
    };
    if (event.target.classList.contains("closecart_in")){
        cartElement.style.display = 'none';
    };
    if (event.target.classList.contains("nextbutton1")){
        cartElement.style.display = 'none';
        addressElement.style.display = 'block';
        addResspanel(); 
    };
    if (event.target.classList.contains("closeaddress")){
        addressElement.style.display = 'none';
    };
    if (event.target.classList.contains("nextbutton2")){
        addressElement.style.display = 'none';
        commentElement.style.display = 'block';
        commentPanel(); 
    };
    if (event.target.classList.contains("closecomment")){
        commentElement.style.display = 'none';
    };
};
// plus
const plusFunc = (id) => {
    cart[id]++;
    renderCart();
};

//minus
const minusFunc = (id) => {
    if(cart[id] - 1 == 0){
        deleteFunc(id);
        "button".opacity = 0;

        return true
    };
    cart[id]--;
    renderCart();
};

const renderCart = () => {
    console.log(cart)
};

//delete
const deleteFunc = id => {
    delete cart[id];
    renderCart();
};


const basketAlert = () => {
    var price = 0
    for(var i in cart){
            price = price + (cart[i] * items[i])
    };
    document.getElementById('cart_text').innerHTML = (price + " rub");
};

const cartItems = () => {
    cart_items = "cart is: ";
    for(key in cart){
        cart_items = (cart_items + "\n " + key + " : " + cart[key])
    };
    document.getElementById('cart_items').innerHTML = cart_items;
}

const addResspanel = () => {
    document.getElementById('addresspanel').innerHTML = ("Address is: Moscow, church of army, chaos altar");
};

const commentPanel = () => {
    document.getElementById('commentpanel').innerHTML = ("There must be a comment. But where it is?");
}

renderCart();