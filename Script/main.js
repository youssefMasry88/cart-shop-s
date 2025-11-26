const shopCategoriesTabs = document.querySelector(".shop-categories");
const productPopup = document.querySelector(".product-popup");
const productPopupClose = document.querySelector(".product-popup-close");
const inputSearch = document.querySelector(".shop-header-search input");
const searchProductContainer = document.querySelector(
  ".shop-header-search-container"
);
const cartCount = document.querySelector(".header-items-cart span");
const wishlistCount = document.querySelector(".header-items-wishlist span");
const cartPopupIcon = document.querySelector(".header-items-cart");
const cartPopupContainer = document.querySelector(".cart-item-content");
const total = document.querySelector(".total");
const shopContainer = document.querySelector(".shop-container-items");
const sportsProducts = [
  {
    id: 1,
    productImage: "https://example.com/products/football-shoes.jpg",
    title: "Nike Phantom GX Elite FG",
    description:
      "High-performance football boots designed for speed and precision on firm ground.",
    oldPrice: 220,
    newPrice: 180,
    rate: 5,
    category: "Football",
  },
  {
    id: 2,
    productImage: "https://example.com/products/basketball.jpg",
    title: "Spalding NBA Official Basketball",
    description:
      "Premium leather basketball approved for indoor professional play.",
    oldPrice: 100,
    newPrice: 85,
    rate: 4,
    category: "Basketball",
  },
  {
    id: 3,
    productImage: "https://example.com/products/running-shoes.jpg",
    title: "Adidas Ultraboost 23",
    description:
      "Ultra-comfortable running shoes built for long-distance performance.",
    newPrice: 160,
    rate: 5,
    category: "Running",
  },
  {
    id: 4,
    productImage: "https://example.com/products/tennis-racket.jpg",
    title: "Wilson Pro Staff v14",
    description:
      "Lightweight and powerful tennis racket designed for precision and control.",
    oldPrice: 280,
    newPrice: 230,
    rate: 5,
    category: "Tennis",
  },
  {
    id: 5,
    productImage: "https://example.com/products/gym-gloves.jpg",
    title: "Reebok Training Gloves",
    description:
      "Durable gym gloves with wrist support for heavy lifting and comfort.",
    newPrice: 35,
    rate: 4,
    category: "Fitness",
  },
  {
    id: 6,
    productImage: "https://example.com/products/swimming-goggles.jpg",
    title: "Speedo Aquapulse Pro Goggles",
    description:
      "Anti-fog, UV-protected goggles with panoramic vision for competitive swimming.",
    newPrice: 45,
    rate: 5,
    category: "Swimming",
  },
  {
    id: 7,
    productImage: "https://example.com/products/yoga-mat.jpg",
    title: "Manduka PRO Yoga Mat",
    description:
      "High-density yoga mat with excellent cushioning and durability.",
    oldPrice: 130,
    newPrice: 110,
    rate: 5,
    category: "Yoga",
  },
  {
    id: 8,
    productImage: "https://example.com/products/dumbbells.jpg",
    title: "Bowflex SelectTech Dumbbells",
    description:
      "Adjustable dumbbells ranging from 5 to 52.5 lbs for full-body workouts.",
    oldPrice: 420,
    newPrice: 350,
    rate: 5,
    category: "Gym Equipment",
  },
  {
    id: 9,
    productImage: "https://example.com/products/cycling-helmet.jpg",
    title: "Giro Aether MIPS Helmet",
    description:
      "Lightweight and aerodynamic helmet with MIPS protection for cyclists.",
    newPrice: 270,
    rate: 4,
    category: "Cycling",
  },
  {
    id: 10,
    productImage: "https://example.com/products/boxing-gloves.jpg",
    title: "Everlast Pro Boxing Gloves",
    description:
      "Professional-grade boxing gloves with ergonomic fit and superior padding.",
    oldPrice: 120,
    newPrice: 95,
    rate: 4,
    category: "Boxing",
  },
  {
    id: 11,
    productImage: "https://example.com/products/sports-watch.jpg",
    title: "Garmin Forerunner 965",
    description:
      "Advanced GPS sports watch with heart-rate monitor and training metrics.",
    newPrice: 500,
    rate: 5,
    category: "Running",
  },
  {
    id: 12,
    productImage: "https://example.com/products/ski-jacket.jpg",
    title: "The North Face Summit Jacket",
    description:
      "Waterproof and insulated ski jacket built for cold-weather adventures.",
    oldPrice: 380,
    newPrice: 320,
    rate: 5,
    category: "Skiing",
  },
  {
    id: 13,
    productImage: "https://example.com/products/badminton-racket.jpg",
    title: "Yonex Astrox 99 Pro",
    description:
      "Powerful badminton racket engineered for explosive smashes and agility.",
    newPrice: 210,
    rate: 4,
    category: "Badminton",
  },
  {
    id: 14,
    productImage: "https://example.com/products/football.jpg",
    title: "Adidas UEFA Pro Football",
    description:
      "Official match ball used in UEFA tournaments, thermally bonded for accuracy.",
    oldPrice: 180,
    newPrice: 150,
    rate: 5,
    category: "Football",
  },
  {
    id: 15,
    productImage: "https://example.com/products/gym-bag.jpg",
    title: "Puma Training Duffel Bag",
    description:
      "Spacious gym bag with multiple compartments for easy gear organization.",
    newPrice: 60,
    rate: 4,
    category: "Fitness",
  },
  {
    id: 16,
    productImage: "https://example.com/products/surfboard.jpg",
    title: "Quiksilver Pro Surfboard",
    description:
      "High-performance surfboard designed for advanced wave riding.",
    oldPrice: 650,
    newPrice: 580,
    rate: 5,
    category: "Surfing",
  },
  {
    id: 17,
    productImage: "https://example.com/products/golf-clubs.jpg",
    title: "Callaway Rogue ST Max Irons",
    description:
      "Premium golf clubs engineered for distance, accuracy, and forgiveness.",
    oldPrice: 1300,
    newPrice: 1150,
    rate: 5,
    category: "Golf",
  },
  {
    id: 18,
    productImage: "https://example.com/products/baseball-bat.jpg",
    title: "Louisville Slugger Meta Bat",
    description:
      "BBCOR-certified baseball bat crafted for maximum swing speed and control.",
    newPrice: 450,
    rate: 4,
    category: "Baseball",
  },
  {
    id: 19,
    productImage: "https://example.com/products/climbing-shoes.jpg",
    title: "La Sportiva Solution Climbing Shoes",
    description:
      "Aggressive climbing shoes built for bouldering and overhang routes.",
    oldPrice: 220,
    newPrice: 195,
    rate: 5,
    category: "Climbing",
  },
  {
    id: 20,
    productImage: "https://example.com/products/paddle-board.jpg",
    title: "Red Paddle Co Ride SUP",
    description:
      "All-around inflatable paddle board with great balance and portability.",
    newPrice: 999,
    rate: 5,
    category: "Water Sports",
  },
];

function renderCard(product) {
  return `<div class="shop-card p-4 rounded-3xl bg-white group">
                <div class="shop-card-image w-full h-[40vh] bg-red-500 rounded-3xl relative overflow-hidden">
                    <div class="shop-card-image-overlay absolute top-0 left-0 w-full h-full bg-linear-to-b">
                        <div class="absolute top-1/2 -translate-y-1/2 -right-10 flex flex-col gap-4 group-hover:right-4 duration-300">
                            <div class="shop-card-image-overlay-icon w-10 h-10 bg-white cursor-pointer rounded-full flex items-center justify-center showProductIcon" onclick="showPopUp(${
                              product.id
                            })">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-eye"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
                            </div>
                            <div class="shop-card-image-overlay-icon w-10 h-10 bg-white cursor-pointer rounded-full flex items-center justify-center" onclick="addToWishlist(${
                              product.id
                            })">
                            
                              <div class="shop-card-image-overlay-icon w-10 h-10 bg-white cursor-pointer rounded-full flex items-center justify-center wishlist-icon" data-id="${product.id}">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-heart">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z"/>
    </svg>
</div>
                            </div>
                            <div class="shop-card-image-overlay-icon w-10 h-10 bg-white cursor-pointer rounded-full flex items-center justify-center">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M423.3 440.7c0 25.3-20.3 45.6-45.6 45.6s-45.8-20.3-45.8-45.6 20.6-45.8 45.8-45.8c25.4 0 45.6 20.5 45.6 45.8zm-253.9-45.8c-25.3 0-45.6 20.6-45.6 45.8s20.3 45.6 45.6 45.6 45.8-20.3 45.8-45.6-20.5-45.8-45.8-45.8zm291.7-270C158.9 124.9 81.9 112.1 0 25.7c34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <img src="https://img.freepik.com/free-photo/man-jumping-while-doing-parkour_52683-108607.jpg?t=st=1760801452~exp=1760805052~hmac=d3fe24cfc41b08fb98ddae6a2b175b4c16c5bc44bfbcb9808f6020688e9acbcc&w=1480" alt="" class="w-full h-full object-cover">
                </div>
                <div class="shop-card-content mt-4">
                    <span class="text-black/60">${product.category}</span>
                    <div class="flex items-center gap-4 justify-between mb-4">
                        <a href="./product.html?id=${
                          product.id
                        }" class="text-2xl capitalize">${product.title}</a>
                        <div class="shop-card-content-rate flex items-center gap-2">
                            ${Array.from({ length: 5 })
                              .map(
                                (_, index) => `
                            <svg class="${
                              product.rate >= index + 1
                                ? "text-red-500"
                                : "text-gray-300"
                            }" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="20" width="20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                    </path>
                                </svg>`
                              )
                              .join("")}
                        </div>
                    </div>
                    <p class="text-black/60">${product.description}</p>
                    <div class="shop-card-content-price flex items-center gap-2 mt-2">
                        ${
                          product.oldPrice
                            ? `<del class="text-black/60">$${product.oldPrice}</del> <span class="text-xl font-bold">$${product.newPrice}</span>`
                            : `<span class="text-xl font-bold">$${product.newPrice}</span>`
                        }
                    </div>
                    <button onclick="addToCart(${
                      product.id
                    })" class="py-2 px-3 bg-red-500 text-white rounded-3xl mt-4 " data-id="${
    product.id
  }">Add to cart</button>
                </div>
            </div>`;
}

function renderPopup(product) {
  return `<div class="product-popup-close w-12 h-12 rounded-full flex items-center justify-center bg-white absolute top-4 right-4 cursor-pointer" onclick="closePopup()">X</div>
                <div class="product-popup-container min-w-[300px] min-h-[300px] bg-white rounded-3xl p-8 flex gap-8">
                    <div class="product-image w-[30vw] bg-red-500 h-[40vh] rounded-3xl overflow-hidden">
                        <img src="https://img.freepik.com/free-photo/man-jumping-while-doing-parkour_52683-108607.jpg?t=st=1760801452~exp=1760805052~hmac=d3fe24cfc41b08fb98ddae6a2b175b4c16c5bc44bfbcb9808f6020688e9acbcc&w=1480" alt="" class="w-full h-full object-cover">
                    </div>
                    <div class="product-image-content max-w-[500px] pt-8">
                        <h2 class="text-2xl mb-2">${product.title}</h2>
                        <p class="text-black/50 mb-4">${product.description}</p>
                        <div class="flex items-center gap-2 mb-4">
                            ${
                              product.oldPrice
                                ? `<del class="text-black/60">$${product.oldPrice}</del> <span class="text-xl font-bold">$${product.newPrice}</span>`
                                : `<span class="text-xl font-bold">$${product.newPrice}</span>`
                            }
                        </div>
                        <button onclick="addToCart(${
                          product.id
                        })" class="py-2 px-4 bg-red-500 text-white rounded-3xl">Add to cart</button>
                    </div>
                </div>`;
}

function showProducts(cat = "all") {
  shopContainer.innerHTML = "";
  const filtered =
    cat.toLowerCase() == "all"
      ? sportsProducts
      : sportsProducts.filter(
          (product) => product.category.toLowerCase() == cat.toLowerCase()
        );
  shopContainer.innerHTML = filtered.map(renderCard).join("");
}

function getAllCategories() {
  const getCategories = sportsProducts.map((product) => product.category);
  const unqiueCategories = [...new Set(getCategories)];
  const categoriesItems = unqiueCategories.map((item) => ({
    label: item,
    value: item,
  }));
  const allCategoriesItems = [
    {
      label: "All Products",
      value: "all",
    },
    ...categoriesItems,
  ];
  allCategoriesItems.forEach((item, index) => {
    shopCategoriesTabs  .innerHTML += `<option value="${item.value}" class="cursor-pointer capitalize">${item.label}</option>`;
  });
}

function showPopUp(product_id) {
  productPopup.innerHTML = "";
  const filterProductPopup = sportsProducts.filter(
    (product) => product.id == product_id
  );
  productPopup.innerHTML = filterProductPopup.map(renderPopup).join("");
  productPopup.classList.add("showPopup");
}

function closePopup() {
  productPopup.classList.remove("showPopup");
}

function searchProduct(val) {
  searchProductContainer.innerHTML = "";
  // title & description & category
  if (val.length > 0) {
    searchProductContainer.classList.add("show");
  } else {
    searchProductContainer.classList.remove("show");
  }
  const searchProduct = sportsProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(val.toLowerCase()) ||
      product.description.toLowerCase().includes(val.toLowerCase()) ||
      product.category.toLowerCase().includes(val.toLowerCase())
  );
  searchProductContainer.innerHTML = searchProduct
    .map(
      (
        data
      ) => `<div class="item-search not-last:border-b border-black/10 p-4 flex items-center font-[500] uppercase cursor-pointer hover:bg-gray-100" onclick="showPopUp(${data.id})">
                                        ${data.title}
                                    </div>`
    )
    .join("");
}

//////////////////////////////////////////////////////
function getLocalStorage(key) {
  const cart = localStorage.getItem(key);
  const store = cart ? JSON.parse(cart) : [];
  return store;
}

function saveLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

//////////////////////////////////////////////////////
function addToCart(productId) {
  const product = sportsProducts.find((product) => product.id == productId);
  if (!product) return;
  const cart = getLocalStorage("cart");
  const existing = cart.find((item) => item.id == productId);
  if (existing) {
    existing.q += 1;
  } else {
    cart.push({ ...product, q: 1 });
  }
  saveLocalStorage("cart", cart);
  updateCart();
  renderCartPopup();
  updateTotalPrice();
}
// -----------------------------------------------------------------------
function addToWishlist(productId) {
  const product = sportsProducts.find((product) => product.id == productId);
  if (!product) return;

  const wishlist = getLocalStorage("wishlist");
  const existing = wishlist.find((item) => item.id == productId);
  const icon = document.querySelector(`.wishlist-icon[data-id="${productId}"] svg`);

  if (!existing) {
    wishlist.push(product);
    saveLocalStorage("wishlist", wishlist);
    icon.classList.add("text-red-500");
  } else {
    
    const index = wishlist.findIndex(item => item.id == productId);
    wishlist.splice(index, 1);
    saveLocalStorage("wishlist", wishlist);
    icon.classList.remove("text-red-500");
  }

  updateWishlist();
}


//////////////////////////////////////////////////////
function updateCart() {
  const cart = getLocalStorage("cart");
  cartCount.textContent = cart.reduce((total, item) => total + item.q, 0);
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++

function updateWishlist() {
  const wishlist = getLocalStorage("wishlist");
  wishlistCount.textContent = wishlist.length;
}

function renderCartPopup() {
  const cart = getLocalStorage("cart");
  cartPopupContainer.innerHTML = cart
    .map(
      (item) =>
        `<div class="item flex gap-4 not-last:border-b border-black/10 pb-4 mb-4">
                    <div class="item-image w-[100px] h-[100px] rounded-2xl overflow-hidden">
                        <img src="https://img.freepik.com/free-photo/man-jumping-while-doing-parkour_52683-108607.jpg?t=st=1760801452~exp=1760805052~hmac=d3fe24cfc41b08fb98ddae6a2b175b4c16c5bc44bfbcb9808f6020688e9acbcc&w=1480" alt="cart-item" class="w-full h-full object-cover">
                    </div>
                    <div class="item-details flex-1">
                        <h2 class="font-bold">${item.title}</h2>
                        <div class="flex justify-between mt-2">
                            <span>Qty: ${item.q}</span>
                            <span>$${(item.newPrice * item.q).toFixed(2)}</span>
                        </div>
                        <div class="flex gap-2 mt-2">
                            <button class="text-xs bg-gray-200 px-2 rounded" onclick="updateQuantity(${
                              item.id
                            }, -1)">-</button>
                            <button class="text-xs bg-gray-200 px-2 rounded" onclick="updateQuantity(${
                              item.id   
                            }, 1)">+</button>
                            <button class="text-xs bg-red-500 text-white px-2 rounded ml-auto" onclick="removeFromCart(${
                              item.id
                            })">Remove</button>
                        </div>
                    </div>
                </div>`
    )
    .join("");
}

function updateQuantity(productId, change) {
  const cart = getLocalStorage("cart");
  const item = cart.find((item) => item.id == productId);
  if (item) {
    item.q += change;
    if (item.q <= 0) {
      removeFromCart(productId);
      return;
    }
    saveLocalStorage("cart", cart);
    updateCart();
    renderCartPopup();
    updateTotalPrice();
  }
}

function removeFromCart(productId) {
  let cart = getLocalStorage("cart");
  cart = cart.filter((item) => item.id != productId);
  saveLocalStorage("cart", cart);
  updateCart();
  renderCartPopup();
  updateTotalPrice();
}

function updateTotalPrice() {
  const cart = getLocalStorage("cart");
  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.q * item.newPrice;
  }, 0);
  total.textContent = `$${totalPrice.toFixed(2)}`;
}

getAllCategories();
showProducts("all");
updateCart();
updateWishlist();
renderCartPopup();
updateTotalPrice();

shopCategoriesTabs.addEventListener("change", (e) => {
  showProducts(e.target.value);
});

inputSearch.addEventListener("input", (e) => {
  searchProduct(e.target.value);
});

cartPopupIcon.addEventListener("click", () => {
  document.querySelector(".cart_popup").classList.add("showPopupCart");
});

document.querySelector(".close-cart").addEventListener("click", () => {
  document.querySelector(".cart_popup").classList.remove("showPopupCart");
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("product-popup")) {
    closePopup();
  }
  if (e.target.classList.contains("cart_popup")) {
    document.querySelector(".cart_popup").classList.remove("showPopupCart");
  }
});
setTimeout(() => {
  loadingPage.classList.add("hide");
}, 1000);
