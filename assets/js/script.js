// grab everything we need
let price_input     = document.querySelector('[name="price"]');
let quantity_input  = document.querySelector('[name="quantity"]');
let total_cost      = document.querySelector('.total_cost');
let total_quantity  = document.querySelector('.total_quantity');

// Create the function that w'll need
function calculatePriceCost(){
    let price       = price_input.value;
    let quantity    = quantity_input.value;
    let cost        = price * quantity; 
    total_cost.innerHTML = '$'+cost;
    updateQunatityLabel();
}



function updateQunatityLabel() {
    let quantity    = quantity_input.value;
    total_quantity.innerHTML = quantity;

}

calculatePriceCost();

// add our event listeners
price_input.oninput = e => calculatePriceCost();
quantity_input.oninput = e => calculatePriceCost();