<script>
function toggleMenu() {
  const menu = document.getElementById("menuBox");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}
</script>


<script>
let cartCount = 0;
const cart = document.getElementById('cart');
const cartCounter = document.getElementById('cart-count');

cart.addEventListener('click', ()=>{
  window.location.href = 'checkout.html';
});

function addToCart() {
  cartCount++;
  cartCounter.textContent = cartCount;
}
</script>
