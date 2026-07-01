
const products = [
  {
    name: "Cozy Cotton Pajama Set",
    description: "Soft and breathable cotton pajamas for a comfortable night's sleep.",
    image: "images/Screenshot 2026-05-29 210518.png",
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

wishlistAddBtn.addEventListener("click", () => {
  const itemText = wishlistInput.value.trim();

  
  if (itemText === "") {
    return;
  }


  const listItem = document.createElement("li");
  listItem.classList.add("wishlist-item");

  
  const itemName = document.createElement("span");
  itemName.textContent = itemText;

  
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("wishlist-remove-btn");

  
  removeBtn.addEventListener("click", () => {
    listItem.remove();
  });

  
  listItem.appendChild(itemName);
  listItem.appendChild(removeBtn);
  wishlistList.appendChild(listItem);

  
  wishlistInput.value = "";
});