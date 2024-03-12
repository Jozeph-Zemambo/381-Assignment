document.addEventListener('DOMContentLoaded', () => {
    var cart = [];

    function addToCart(productName, unitPrice) {
        var existingProduct = cart.find(function(product) {
            return product.name === productName;
        });

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({
                name: productName,
                price: unitPrice,
                quantity: 1
            });
        }

        updateCartDisplay();
    }

    function updateCartDisplay() {
        var cartDiv = document.getElementById('cart');
        cartDiv.innerHTML = '';

        cart.forEach(function(product) {
            var productDiv = document.createElement('div');
            productDiv.textContent = product.name + ' - ' + product.price + ' - ' + product.quantity;

            var removeButton = document.createElement('button');
            removeButton.style.backgroundColor = "#333";
            removeButton.style.color = "white";
            removeButton.style.padding = "10px";
            removeButton.style.margin = "10px"
            removeButton.textContent = 'Remove';
            removeButton.style.borderRadius = "10px"
            removeButton.addEventListener("mouseover", () => { removeButton.style.backgroundColor = "#ff0000"; })
            removeButton.addEventListener("mouseout", () => { removeButton.style.backgroundColor = "#333"; })
            removeButton.addEventListener('click', function() {
                if (product.quantity > 1) {
                    product.quantity -= 1;
                } else {
                    var productIndex = cart.indexOf(product);
                    cart.splice(productIndex, 1);
                }

                updateCartDisplay();
            });

            productDiv.appendChild(removeButton);
            cartDiv.appendChild(productDiv);
        });
    }

    var addToCartButtons = document.getElementsByClassName('atcb');

    Array.from(addToCartButtons).forEach(function(button) {
        button.addEventListener('click', function() {
            var productName = button.getAttribute('data-name');
            var productPrice = button.getAttribute('data-price');
            alert(`Added ${productName} to the cart`)
            addToCart(productName, productPrice);
        });
    });

});
