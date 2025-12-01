
// Open modal dynamically
function openModal(img) {
  const modal = document.getElementById('itemModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalPrice = document.getElementById('modalPrice');
  const modalAddButton = document.getElementById('modalAddButton');

  const parent = img.closest('.souvenir-item');
  modalImage.src = img.src;
  modalImage.alt = img.alt;
  modalTitle.textContent = parent.querySelector('h3').textContent;
  modalDescription.textContent = parent.querySelector('p').textContent;
  modalPrice.textContent = parent.querySelectorAll('p')[1].textContent;

  modalAddButton.textContent = `Add ${modalTitle.textContent} to Cart`;
  modalAddButton.onclick = function() {
    addToCart(modalTitle.textContent);
  };

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById('itemModal').style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById('itemModal');
  if (event.target == modal) {
    closeModal();
  }
}

// ADD TO CART FUNCTION  
function addToCart(itemName) {
  const priceText = document.getElementById("modalPrice").textContent;
  const price = parseFloat(priceText.replace("Price: $", ""));

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({ name: itemName, price: price });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(itemName + " added to cart!");
}