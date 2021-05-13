// Task 1
var num_1 = prompt("please type number from 0 to 999: ")
if (num_1 > 999){
    alert("your number " + num_1 + " bigger than 999");
}
else{
    var units = num_1 %10
    num_1 = Math.floor(num_1 / 10);
    if (num_1 >= 1){
        var dozens = num_1 %10
        num_1 = Math.floor(num_1 / 10);
        if(num_1 >= 1){
            var hundreds = num_1 %10
            alert("hundreds: " + hundreds + "dozens: " + dozens + "units: " + units)
        }
        else{
            alert("dozens: " + dozens + "units: " + units)
        }
    }
    else{
        alert("units: " + units)
    }
}

//Task 2
let cart = {
    "soap": 25 ,
    "paint": 35,
    "cloth": 200
};




function countBasketPrice(user_cart){
    var price = 0;
    for(var i in user_cart){
        price = price + user_cart[i];
    }
    return(price); 
}

alert(countBasketPrice(cart))





