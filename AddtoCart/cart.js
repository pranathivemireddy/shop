// let cart = JSON.parse(localStorage.getItem("cart")) || [];
// let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

// async function fetchData() {
//   try {
//     let response = await fetch(
//       "https://ambiguous-marvelous-shrimp.glitch.me/products"
//     );
//     let data = await response.json();
//     localStorage.setItem("data", JSON.stringify(data));
//     console.log(data);
//     displayData(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     container.innerHTML = "<p>Failed to load data. Please try again later.</p>";
//   }
// }

// function displayData(data) {
//   container.innerHTML = "";

//   if (data.length === 0) {
//     container.innerHTML = "<p>No data available</p>";
//   } else {
//     data.forEach((obj) => {
//       let div2 = document.createElement("div");
//       div2.classList.add("course-card");
//       let item = document.createElement("div");
//       item.innerHTML = `
//                 <img src="${obj.product_photo}" alt="${obj.product_title}">
//                 <p><strong>${obj.product_title}</strong></p>
//                 <p>${obj.product_price}</p>
//                 <p>Price: ${obj.product_original_price}</p>
//                 // <p>Category: ${obj.category}</p>
//             `;
//       div2.appendChild(item);
//       container.appendChild(div2);

//       // Add event listener to the "Cart" button
//       const addToCartButton = div2.querySelector(".mycor-btn");
//       addToCartButton.addEventListener("click", () => {
//         addToCart(obj); // Add the course to the cart
//       });

//       // Add event listener to the "Favourites" button
//       const addToFavouritesButton = div2.querySelector(".heart-btn");
//       addToFavouritesButton.addEventListener("click", () => {
//         addToFavourites(obj, addToFavouritesButton);
//       });

//       // Update the heart icon if the course is already in favourites
//       if (favourites.some((item) => item.product_title === obj.product_title)) {
//         addToFavouritesButton.innerHTML = '<i class="fas fa-heart"></i>'; // Filled heart
//         addToFavouritesButton.classList.add("active");
//       }
//     });
//   }
// }

// // Function to add a course to the cart
// function addToCart(course) {
//   const confirmAdd = confirm(`Add "${course.product_title}" to cart?`);
//   if (confirmAdd) {
//     if (!cart.some((item) => item.product_title ===course.product_title)) {
//       cart.push(course);
//       localStorage.setItem("cart", JSON.stringify(cart));
//       alert(`${course.product_title} added to cart!`);
//     } else {
//       alert(`${course.product_title} is already in the cart!`);
//     }
//   } else {
//     alert("Action canceled.");
//   }
// }

// // Function to remove a course from the cart
// function removeFromCart(index) {
//   cart.splice(index, 1);
//   localStorage.setItem("cart", JSON.stringify(cart));
// }
// // favourite buttons
// // function addToFavourites(course, button) {
// //   const confirmAdd = confirm(`Add "${course.product_title}" to favourites?`);
// //   if (confirmAdd) {
// //     const index = favourites.findIndex((item) => item.product_title === course.product_title);

// //     if (index === -1) {
// //       // Add to favourites
// //       favourites.push(course);
// //       button.innerHTML = '<i class="fas fa-heart"></i>'; // Filled heart
// //       button.classList.add("active");
// //       alert(`${course.product_title} added to favourites!`);
// //     } else {
// //       // Remove from favourites
// //       favourites.splice(index, 1);
// //       button.innerHTML = '<i class="far fa-heart"></i>'; // Outline heart
// //       button.classList.remove("active");
// //       alert(`${course.product_title} removed from favourites!`);
// //     }

// //     localStorage.setItem("favourites", JSON.stringify(favourites));
// //   } else {
// //     alert("Action canceled.");
// //   }
// // }
// fetchData(); // Initial data fetch
