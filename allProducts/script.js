document.addEventListener("DOMContentLoaded", getData);

async function getData() {
    const categoryName = localStorage.getItem("selectedCategory");
    const categoryData = JSON.parse(localStorage.getItem("categoryData"));
    displayData(categoryData);
}

function displayData(data) {
    let mainContainer = document.getElementById('mainContainer');
    mainContainer.innerHTML = ""; // Clear previous content

    data.forEach((product) => {
        let itemContainer = document.createElement('div');
        itemContainer.className = 'itemContainer';

        let imageContainer = document.createElement('div');
        imageContainer.innerHTML = `<img src="${product.product_photo}" class='productImage'>`;

        let productDetails = document.createElement('div');
        productDetails.className = 'productDetails';
        productDetails.innerHTML = `
            <span class='title'><b>${product.product_title}</b></span><br>
            <span class='price'>PRICE: ${product.product_price}</span><br>
            <span class='rating'>RATING: ${product.product_star_rating}</span><br>
            <span class='delivery'>Delivered by: ${product.product_delivery_info}</span>
        `;

        // Button Container
        let btnContainer = document.createElement('div');
        btnContainer.className = 'btnContainer';

        // Add to Cart Button
        let addToCartButton = document.createElement('button');
        addToCartButton.className = 'addToCartBtn';
        addToCartButton.textContent = 'ADD TO CART';
        addToCartButton.addEventListener("click", function(){
            addToCart(product);
        });

        // Buy Now Button
        let buyNowButton = document.createElement('button');
        buyNowButton.className = 'buyNowBtn';
        buyNowButton.textContent = 'BUY NOW';
        buyNowButton.addEventListener("click", () => buyNow(product));

        btnContainer.appendChild(addToCartButton);
        btnContainer.appendChild(buyNowButton);

        productDetails.appendChild(btnContainer);
        itemContainer.append(imageContainer, productDetails);
        mainContainer.appendChild(itemContainer);
    });
}
// ✅ Function to Show Toast Notification
function showToast(message) {
    let toast = document.createElement("div");
    toast.className = "toast show";  // Ensure 'show' class is applied immediately
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 100); // Ensure it is removed after animation
    }, 2000);
}

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingItem = cart.find((item) => item.product_title === product.product_title);
    
    if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if already in cart
        showToast(`${product.product_title} quantity updated!`);
    } else {
        product.quantity = 1; // Set initial quantity
        cart.push(product);
        showToast(`${product.product_title} added to cart!`); // ✅ Show toast for new item
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href='../AddtoCart/cart.html'
    displayCartItems(); // Refresh cart display
}

// ✅ Display Cart Items
function displayCartItems() {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cartContainer");

    if (!cartContainer) return; // Stop if cartContainer is not found

    cartContainer.innerHTML = ""; // Clear previous content

    if (cartItems.length === 0) {
        cartContainer.innerHTML = "<h3>Your cart is empty</h3>";
        return;
    }

    cartItems.forEach((item, index) => {
        let itemDiv = document.createElement("div");
        itemDiv.className = "cartItem";
        itemDiv.innerHTML = `
            <img src="${item.product_photo}" class="cartImage">
            <div>
                <p><b>${item.product_title}</b></p>
                <p>Price: ${item.product_price}</p>
                <p>Rating: ${item.product_star_rating}</p>
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${index}, -1)">➖</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${index}, 1)">➕</button>
                    <button onclick="BuyNow" class='buynow'>BuyNow</button>
                </div>
            </div>
        `;
        cartContainer.appendChild(itemDiv);
    });
}

// ✅ Update Quantity
function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart[index]) {
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
            showToast("Item removed from cart!");
        } else {
            showToast(`Quantity updated: ${cart[index].quantity}`);
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
}

// ✅ Call displayCartItems when cart.html loads
if (window.location.pathname.includes("cart.html")) {
    document.addEventListener("DOMContentLoaded", displayCartItems);
}
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader-container");
    setTimeout(() => {
        loader.classList.add("fade-out");
        setTimeout(() => loader.style.display = "none", 500); // Remove from DOM
    }, 1000); // Show loader for at least 1 second
});




