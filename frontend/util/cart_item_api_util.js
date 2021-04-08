export const fetchCartItems = () =>
  $.ajax({
    method: "GET",
    url: `api/cart_items`,
  });

export const createCartItem = (cartItem) =>
  $.ajax({
    method: "PUT",
    url: `api/cart_items`,
    data: { cartItem },
  });
