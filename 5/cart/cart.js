let items = {
    'carrot': 25,
    'avocado': 100
};

let cart = {
    'carrot': 0,
    'avocado': 0    
};

document.onclick = event => {  
    if (event.target.classList.contains("plus")){
        plusFunc(event.target.dataset.id);
    };
    if (event.target.classList.contains("minus")){
        minusFunc(event.target.dataset.id);
        
    };
    if (event.target.classList.contains("basket")){
        basketAlert();
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
    console.log(price);
};

renderCart();