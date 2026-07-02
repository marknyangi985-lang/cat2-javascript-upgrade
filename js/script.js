
const products = [
  {
    name: "Cozy Cotton Pajama Set",
    description: "Soft and breathable cotton pajamas for a comfortable night's sleep.",
    image: "images/Screenshot 2026-05-29 210507.png",
    price: "800sh"
  },
  {
    name: "Silk Pajama Set",
    description: "Luxurious silk pajamas that feel amazing against your skin. Make every night a special occasion! Treat yourself to the ultimate comfort.",
    image: "images/Screenshot 2026-05-29 210728.png",
    price: "800sh"
  },
  {
    name: "Lingerie",
    description: "Luxury that makes you feel confident and elegant. You and your partner will love these exquisite pieces.",
    image: "images/Screenshot 2026-05-29 211003.png",
    price: "800sh"
  },
  {
    name: "Personalized Packages",
    description: "Personalize your pajama set with custom embroidery or choose from our special gift packages. Perfect for gifting or treating yourself! Gender options available.",
    image: "images/Screenshot 2026-05-29 211524.png",
    price: "900sh"
  }
];


const productList = document.querySelector("#product-list");


products.forEach(product => {
  const item = document.createElement("div");
  item.classList.add("product-item");

  item.innerHTML = `
    <h5>${product.name}</h5>
    <p>${product.description}</p>
    <img src="${product.image}" alt="${product.name}">
    <p>Price: ${product.price}</p>
  `;

  productList.appendChild(item);
});



const wishlistInput = document.querySelector("#wishlist-input");
const wishlistAddBtn = document.querySelector("#wishlist-add-btn");
const wishlistList = document.querySelector("#wishlist-list");

let wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
  
  function saveWishlist() {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }

  function createWishlistItem(itemText) {
    const listItem = document.createElement("li");
    listItem.classList.add("wishlist-item");

    const itemName = document.createElement("span");
    itemName.textContent = itemText;
   

  
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("wishlist-remove-btn");

  
  removeBtn.addEventListener("click", () => {
    const index = wishlistItems.indexOf(itemText);
    if (index > -1) {
      wishlistItems.splice(index, 1);
      saveWishlist();
    }
    listItem.remove();
  });

  
  listItem.appendChild(itemName);
  listItem.appendChild(removeBtn);
  return listItem;
  }
  
 wishlistItems.forEach(itemText => {
  wishlistList.appendChild(createWishlistItem(itemText));

 });

wishlistAddBtn.addEventListener("click", () => {
  const itemText = wishlistInput.value.trim();

  if (itemText === "") {
    return ;
  }

    wishlistItems.push(itemText);
    saveWishlist();

    wishlistList.appendChild(createWishlistItem(itemText));

    wishlistInput.value = "";
  
});



const signupForm = document.querySelector("#signup-form");
const signupFeedback = document.querySelector("#signup-feedback");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

const nameValue = document.querySelector("#signup-name").value.trim();
const emailValue = document.querySelector("#signup-email").value.trim();


const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (nameValue === "" || emailValue === "") {
  signupFeedback.textContent = "Please enter both your name and email.";
  signupFeedback.style.color = "red";
  return;
}


  
  if (!emailPattern.test(emailValue)) {
    signupFeedback.textContent = "Please enter a valid email address.";
    signupFeedback.style.color = "red";
    return;
  }

  signupFeedback.textContent = "Successful sign up. Thank you!";
  signupFeedback.style.color = "green";

  signupForm.reset();
}); 



