export const fetchProducts = () =>
  $.ajax({
    method: "GET",
    url: "api/products",
  });

export const fetchProduct = (productId) =>
  $.ajax({
    method: "GET",
    url: `api/products/${productId}`,
  });
