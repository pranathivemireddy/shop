const categoryURLs = {
    Grocery:'https://ring-misty-midnight.glitch.me/grocery',
    Electronics: 'https://overjoyed-branched-mastodon.glitch.me/electronics',
    Clothing :'https://smiling-panoramic-tabletop.glitch.me/clothing',
    Beauty : "https://spot-natural-bonsai.glitch.me/beauty",
    Kitchen : "https://efficacious-bony-end.glitch.me/kitchen",
    Jewellery :"https://nosy-lying-iberis.glitch.me/jewellery",
    Mobiles : "https://vine-curse-rudbeckia.glitch.me/mobiles",
    Laptops : "https://lying-boundless-count.glitch.me/laptops",
    Footwear : "https://rustic-delicious-square.glitch.me/footwear"
    }
    //Dailog-Box
    document.getElementById("userIcon").addEventListener("click", function(event) {
        let userDialog = document.getElementById("userDialog");
        userDialog.style.display = (userDialog.style.display === "block") ? "none" : "block";
    
        // Prevent event from propagating to document click listener
        event.stopPropagation();
    });
    
    // Close dialog when clicking outside
    document.addEventListener("click", function(event) {
        let userDialog = document.getElementById("userDialog");
        if (userDialog.style.display === "block" && !event.target.closest("#user")) {
            userDialog.style.display = "none";
        }
    });
    
    async function fetchCategoriesData(categoryName) {
        const loader = document.querySelector(".loader-container");
        loader.style.display = "flex"; // Show loader before fetching
    
        const url = categoryURLs[categoryName];
        if (!url) {
            alert("Data Not Found");
            loader.style.display = "none"; // Hide loader if no data
            return;
        }
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            localStorage.setItem("selectedCategory", categoryName);
            localStorage.setItem("categoryData", JSON.stringify(data));
    
            // Simulate a short delay for smooth UX
            setTimeout(() => {
                window.location.href = "../allProducts/index.html";
            }, 500);
        } catch (error) {
            console.error("Fetch Error:", error);
        } finally {
            loader.style.display = "none"; // Hide loader after fetch
        }
    }
    
    
    //All Categories
    async function getCategories() {
        const loader = document.querySelector(".loader-container");
        try {
            loader.style.display = "block";
            let response = await fetch('https://solid-diligent-iberis.glitch.me/categories');
            if (!response.ok) {
                throw new Error('THE PAGE YOU ARE LOOKING IS UNAVAILABLE');
            }
            let result = await response.json();
            // console.log("API Data Fetched:", result); // Debugging
            displayCategories(result);
        } catch (error) {
            console.error("Fetch Error:", error);
        }
        finally {
            loader.style.display = "none"; // Hide loader after fetching
        }
    }
    function displayCategories(data) {
        let productsContainer = document.getElementById('prodcutsContainers');
        
        // Ensure it's empty before adding new content
        productsContainer.innerHTML = "";
    
        data.forEach(Obj => {
            let itemContainer = document.createElement('div');
            itemContainer.className = 'itemContainer';
    
            let imageContainer = document.createElement('div');
            imageContainer.className = 'imageContainer';
            imageContainer.innerHTML = `<img src='${Obj.categoryimage}'>`;
    
            let categoryName = document.createElement('h3');
            categoryName.className = 'categoryName';
            categoryName.textContent = `${Obj.categoryname}`;
    
            itemContainer.appendChild(imageContainer);
            imageContainer.appendChild(categoryName);
            productsContainer.appendChild(itemContainer);
            
            itemContainer.addEventListener('click', () => fetchCategoriesData(Obj.categoryname));
        });
    
        // **Hide loader after rendering**
        document.querySelector(".loader-container").style.display = "none";
    }
    
    
    //Electronics
    async function electronics(){
        const loader = document.querySelector(".loader-container");
        try {
            loader.style.display = "block";
            let response = await fetch('https://bold-windy-cephalopod.glitch.me/electronics');
            if (!response.ok) {
                throw new Error('THE PAGE YOU ARE LOOKING IS UNAVAILABLE');
            }
            let result = await response.json();
            // console.log("API Data Fetched:", result); // Debugging
            displayelectronics(result);
        } catch (error) {
            console.error("Fetch Error:", error);
        }
        finally {
            loader.style.display = "none";
        }
    }
    function displayelectronics(data) {
        let electronicsproducts = document.getElementById('electronics');
    
        if (!electronicsproducts) {
            console.error("Element with ID 'electronics' not found! Check your HTML.");
            return;
        } else {
            console.log("Element found. Appending electronics items...");
        }
    
        data.forEach(Obj => {
            let electronicsitemcontainer = document.createElement('div');
            electronicsitemcontainer.className = 'electronicsitemContainer';
    
            let electronicsimageContainer = document.createElement('div');
            electronicsimageContainer.className = 'electronicscontainer';
    
            // electronicsimageContainer.innerHTML = `<img src='${Obj.product_photo}'>
            //                                        <button class="view">View Product</button>`;
    
    
            let imageElement= document.createElement('img');
            imageElement.src = `${Obj.product_photo}`
    
            let buttonElement = document.createElement('button');
            buttonElement.textContent = 'View Product';
            buttonElement.classList.add('viewproduct');

            buttonElement.onclick = ()=>{
                viewProduct(Obj)
            }
            
            electronicsitemcontainer.append(imageElement,buttonElement);
            electronicsproducts.appendChild(electronicsitemcontainer);
        });
    }
    
    //Jewellery
    async function jewellery(){
        const loader = document.querySelector(".loader-container");
        try {
            loader.style.display = "block";
            let response = await fetch('https://coffee-curly-brow.glitch.me/products');
            if (!response.ok) {
                throw new Error('THE PAGE YOU ARE LOOKING IS UNAVAILABLE');
            }
            let result = await response.json();
            // console.log("API Data Fetched:", result); // Debugging
            displayjewellery(result);
        } catch (error) {
            console.error("Fetch Error:", error);
        }
        finally {
            loader.style.display = "none";
        }
    }
    function displayjewellery(data) {
        let jewelleryproducts = document.getElementById('jewellery');
    
        if (!jewelleryproducts) {
            console.error("Element with ID 'jewellery' not found! Check your HTML.");
            return;
        } else {
            console.log("Element found. Appending jewellery items...");
        }
    
        data.forEach(Obj => {
            let jewelleryitemcontainer = document.createElement('div');
            jewelleryitemcontainer.className = 'jewelleryitemContainer';
    
            let jewelleryimageContainer = document.createElement('div');
            jewelleryimageContainer.className = 'jewellerycontainer';
    
            let imageElement= document.createElement('img');
            imageElement.src =`${Obj.product_photo}`;
    
            let buttonElement = document.createElement('button');
            buttonElement.textContent = 'View Product';
            buttonElement.classList.add('viewproduct');
            buttonElement.onclick = ()=>{
                viewProduct(Obj)
            }
            
            jewelleryitemcontainer.append(imageElement,buttonElement);
            jewelleryproducts.appendChild(jewelleryitemcontainer);
        });
    }    
    //Grocery
    async function grocery(){
        const loader = document.querySelector(".loader-container");
        
        try {
            loader.style.display = "block";
            let response = await fetch('https://ambiguous-marvelous-shrimp.glitch.me/products');
            if (!response.ok) {
                throw new Error('THE PAGE YOU ARE LOOKING IS UNAVAILABLE');
            }
            let result = await response.json();
            displaygrocery(result);
        } catch (error) {
            console.error("Fetch Error:", error);
        }
        finally {
            loader.style.display = "none";
        }
    }
    function displaygrocery(data) {
        let groceryproducts = document.getElementById('grocery');
    
        if (!groceryproducts) {
            console.error("Element with ID 'grocery' not found! Check your HTML.");
            return;
        } else {
            console.log("Element found. Appending grocery items...");
        }
    
        data.forEach(Obj => {
            let groceryitemcontainer = document.createElement('div');
            groceryitemcontainer.className = 'groceryitemContainer';
    
            let groceryimageContainer = document.createElement('div');
            groceryimageContainer.className = 'grocerycontainer';
    
            let imageElement= document.createElement('img');
            imageElement.src =`${Obj.product_photo}`;
    
            let buttonElement = document.createElement('button');
            buttonElement.textContent = 'View Product';
            buttonElement.classList.add('viewproduct');
            buttonElement.onclick = ()=>{
                viewProduct(Obj)
            }
            
            groceryitemcontainer.append(imageElement,buttonElement);
            groceryproducts.appendChild(groceryitemcontainer);
        });
    }
    function viewProduct(obj){
        console.log('Hello',obj);
        localStorage.setItem('Product',JSON.stringify(obj));
        window.location.href = './ProductDetails/product.html'
    }
    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        window.location.href = 'cart.html';
    }
    
    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCountElement = document.getElementById('cart-count');
        if (cartCountElement) {
            cartCountElement.textContent = cart.length.toString();
        }
    }
    window.addEventListener("load", function () {
        const loader = document.querySelector(".loader-container");
        setTimeout(() => {
            loader.classList.add("fade-out");
            setTimeout(() => loader.style.display = "none", 500); // Remove from DOM
        }, 1000); // Show loader for at least 1 second
    });
    
    document.addEventListener("DOMContentLoaded",()=>{getCategories(),electronics(),jewellery(),grocery(),updateCartCount()})
    
   
    
  
    