document.addEventListener("DOMContentLoaded", function() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  displayCart();

  function displayCart() {
    const cartList = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    cartList.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} — $${item.price.toFixed(2)}`;
      cartList.appendChild(li);

      total += item.price;
    });

    totalPrice.textContent = `Total: $${total.toFixed(2)}`;
  }

  window.clearCart = function() {
    cart = [];
    localStorage.removeItem("cart");
    displayCart();
  };
});