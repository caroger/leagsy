@cart_items.each do |cart_item|
  json.set! cart_item.id do
    json.partial! "api/cart_items/cart_item", cart_item: cart_item
    json.product cart_item.product
    json.imgUrl url_for(cart_item.product.photos.first)
  end
end
