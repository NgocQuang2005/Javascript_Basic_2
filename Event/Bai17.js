function getCart() {
  const data = sessionStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
}
function saveCart(cart) {
  sessionStorage.setItem("cart", JSON.stringify(cart));
}
function addToCart(product) {
  const cart = getCart();
  const existing = cart.find((p) => p.id === product.id);
  //nếu có sách trùng id thì lấy số lượng ở trong local và cộng thêm số lượng thêm vào
  if (existing) {
    existing.qty += product.qty;
  } else {
    cart.push(product);
  }
  saveCart(cart);
}
function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter((p) => p.id !== id);
  saveCart(cart);
}
function showCart() {
  console.table(getCart());
}
addToCart({ id: 1, name: "Sách Toán", qty: 2 });
addToCart({ id: 2, name: "Bút bi", qty: 1 });
addToCart({ id: 3, name: "Sách Văn", qty: 3 });
removeFromCart(2);
showCart();
