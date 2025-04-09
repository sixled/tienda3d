
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(id, name, price) {
  const cart = getCart();
  const index = cart.findIndex(item => item.id === id);
  if (index !== -1) {
    cart[index].qty += 1;
  } else {
    cart.push({ id, name, price, qty: 1 });
  }
  saveCart(cart);
  alert("Producto agregado al carrito");
}

function displayCart() {
  const cart = getCart();
  const container = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");
  let totalPrice = 0;
  container.innerHTML = "";
  cart.forEach(item => {
    const line = document.createElement("div");
    line.innerText = `${item.name} x ${item.qty} = $${item.qty * item.price}`;
    container.appendChild(line);
    totalPrice += item.qty * item.price;
  });
  total.innerText = totalPrice;
}

if (window.location.pathname.includes("cart")) {
  displayCart();
}
