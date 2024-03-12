document.addEventListener('DOMContentLoaded', ()=> {

    var cart = [];

    function addToCart(productName, unitPrice) {
        // Check if the product is already in the cart
        var existingProduct = cart.find(function(product) {
            return product.name === productName;
        });
    
        if (existingProduct) {
            // If the product is already in the cart, increase the quantity
            existingProduct.quantity += 1;
        } else {
            // If the product is not in the cart, add it
            cart.push({
                name: productName,
                price: unitPrice,
                quantity: 1
            });
        }
    
        // Update the cart display
        updateCartDisplay();
    }
    
    function updateCartDisplay() {
        var cartDiv = document.getElementById('cart');
        cartDiv.innerHTML = ''; // Clear the cart display
    
        // Add each product in the cart to the cart display
        cart.forEach(function(product) {
            var productDiv = document.createElement('div');
            productDiv.textContent = product.name + ' - ' + product.price + ' - Quantity: ' + product.quantity;
    
            var removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', function() {
                // Remove the product from the cart
                var productIndex = cart.indexOf(product);
                cart.splice(productIndex, 1);
    
                // Update the cart display
                updateCartDisplay();
            });
    
            productDiv.appendChild(removeButton);
            cartDiv.appendChild(productDiv);
        });
    }
    
    document.getElementById('add-to-cart-button').addEventListener('click', function() {
        addToCart('Product Name', 'Product Price');
    });
    

})