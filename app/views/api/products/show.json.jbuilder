json.extract! @product, :id, :name, :price, :seller_id, :description, :category

json.photoUrls @product.photos.map { |file| url_for(file) }

json.seller do
  json.partial! "api/users/user", user: @product.seller
end
# TODO: for shopping cart
# json.cart @product.buyers, :id, :name, :email
