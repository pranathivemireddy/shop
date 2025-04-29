let objdata = JSON.parse(localStorage.getItem('Product'));
console.log(objdata);

let objectContainer = document.getElementById('objectcontainer');

let objectimagecontainer = document.createElement('div');
objectimagecontainer.className = 'objectimageContainer';

let objectdetailscontainer = document.createElement('div');
objectdetailscontainer.className = 'objectdetailsContainer';

objectimagecontainer.innerHTML = `<img src='${objdata.product_photo}'>`;

// ⭐ Ratings Section
let ratingscontainer = document.createElement('div');
ratingscontainer.className = 'ratingscontainer';

let star_ratings = document.createElement('span');
star_ratings.className = 'starratings';
let rating = Math.floor(objdata.product_star_rating);
let stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
star_ratings.innerText = 'Rating: ' + stars;

let num_ratings = document.createElement('span');
num_ratings.className = 'numratings';
num_ratings.innerHTML = `<span>Reviews: <b>${objdata.product_num_ratings}</b></span>`;

// ⭐ Sales Section
let salescontainer = document.createElement('div');
let sales_volume = document.createElement('span');
sales_volume.className = 'salesvolume';
sales_volume.innerHTML = `<span>Sales: <b>${objdata.sales_volume}</b></span>`;

// ⭐ Bestseller Section
let bestsellercontainer = document.createElement('div');
let best_seller = document.createElement('span');
best_seller.className = 'bestseller';
best_seller.innerText = objdata.is_best_seller ? "ShopSphere's Best Seller" : "";

// ⭐ Prime Delivery Section
let primecontainer = document.createElement('div');
let prime_delivery = document.createElement('span');
prime_delivery.className = 'primedelivery';
prime_delivery.innerText = objdata.is_prime ? "Prime Delivery Available" : "";

// ⭐ Price Section
let pricecontainer = document.createElement('div');
pricecontainer.className = 'pricecontainer';

let disprice = document.createElement('span');
disprice.innerHTML = `<span>Discounted Price: ${objdata.product_price}</span>`;

let originalprice = document.createElement('span');
originalprice.className = 'originalprice';
originalprice.innerHTML = `<span>Original Price: ${objdata.product_original_price}</span>`;

// ⭐ Delivery Info
let deliverycontainer = document.createElement('div');
let delivery_info = document.createElement('span');
delivery_info.className = 'deliverycontainer';
delivery_info.innerHTML = `<span>${objdata.product_delivery_info}</span>`;

// ✅ Append All Elements
ratingscontainer.appendChild(star_ratings);
ratingscontainer.appendChild(num_ratings);
objectdetailscontainer.appendChild(ratingscontainer);

salescontainer.appendChild(sales_volume);
objectdetailscontainer.appendChild(salescontainer);

pricecontainer.appendChild(disprice);
pricecontainer.appendChild(originalprice);
objectdetailscontainer.appendChild(pricecontainer);

primecontainer.appendChild(prime_delivery);
objectdetailscontainer.appendChild(primecontainer);

bestsellercontainer.appendChild(best_seller);
objectdetailscontainer.appendChild(bestsellercontainer);

deliverycontainer.appendChild(delivery_info);
objectdetailscontainer.appendChild(deliverycontainer);

// ⭐ Buttons (Add to Cart & Buy Now)
let buttonContainer = document.createElement('div');
buttonContainer.className = 'buttonContainer';

let addToCartBtn = document.createElement('button');
addToCartBtn.innerText = "Add to Cart";
addToCartBtn.addEventListener("click", function(){ addToCart(objdata)}); 

let buyNowBtn = document.createElement('button');
buyNowBtn.innerText = "Buy Now";
buyNowBtn.addEventListener("click", function() {
    objdata.quantity = 1; 
    localStorage.setItem("buyNowItem", JSON.stringify(objdata));
    window.location.href = "/buynow.html"; 
});

buttonContainer.appendChild(addToCartBtn);
buttonContainer.appendChild(buyNowBtn);
objectdetailscontainer.appendChild(buttonContainer);

objectimagecontainer.append(objectdetailscontainer);
objectContainer.appendChild(objectimagecontainer);

// ✅ Function to Show Toast Message
function showToast(message) {
    let toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    
    document.body.appendChild(toast);

    // Ensure it appears with animation
    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    // Hide and remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ✅ Add to Cart with Toast Messages
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingItem = cart.find((item) => item.product_title === product.product_title);
    if (existingItem) {
        existingItem.quantity += 1;
        showToast(`${product.product_title} quantity updated!`);
    } else {
        product.quantity = 1;
        cart.push(product);
        showToast(`${product.product_title} added to cart!`);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}
 //Dailog-Box
 document.getElementById("userIcon").addEventListener("click", function(event) {
    let userDialog = document.getElementById("userDialog");
    userDialog.style.display = (userDialog.style.display === "block") ? "none" : "block";
    event.stopPropagation();
});

// Close dialog when clicking outside
document.addEventListener("click", function(event) {
    let userDialog = document.getElementById("userDialog");
    if (userDialog.style.display === "block" && !event.target.closest("#user")) {
        userDialog.style.display = "none";
    }
});