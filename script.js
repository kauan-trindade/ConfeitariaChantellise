let slideIndex = 0;

  function mostrarSlide(index) {
    const slides = document.querySelector(".slides");
    const totalSlides = slides.children.length;
    if (index >= totalSlides) slideIndex = 0;
    if (index < 0) slideIndex = totalSlides - 1;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  function mudarSlide(n) {
    slideIndex += n;
    mostrarSlide(slideIndex);
  }

  // Auto-slide a cada 5 segundos
  setInterval(() => {
    slideIndex++;
    mostrarSlide(slideIndex);
  }, 5000);

  mostrarSlide(slideIndex);

// Carrinho de compras
const cartButton = document.getElementById("cart-button");
const cartDropdown = document.getElementById("cart-dropdown");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const clearCartButton = document.getElementById("clear-cart");

let cart = [];

// Exibe ou oculta o dropdown do carrinho
cartButton.addEventListener("click", () => {
  cartDropdown.classList.toggle("hidden");
});

// Adiciona um item ao carrinho
function addToCart(itemName, itemPrice) {
  cart.push({ name: itemName, price: itemPrice });
  updateCart();
}

// Atualiza o carrinho
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    const removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.addEventListener("click", () => removeFromCart(index));
    li.appendChild(removeButton);
    cartItems.appendChild(li);
    total += item.price;
  });
  cartCount.textContent = cart.length;
  const totalElement = document.createElement("p");
  totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
  cartItems.appendChild(totalElement);
}

// Remove um item do carrinho
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Limpa o carrinho
clearCartButton.addEventListener("click", () => {
  cart = [];
  updateCart();
});

// Adiciona botões "Adicionar ao Carrinho" para cada produto
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.parentElement.querySelector("h3").textContent;
    const price = parseFloat(button.getAttribute("data-price"));
    addToCart(name, price);
  });
});


