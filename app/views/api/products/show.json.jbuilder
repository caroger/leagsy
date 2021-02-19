json.extract! @product, :id, :name, :price, :seller_id, :description, :category
# TODO: uncomment for AWS
json.photoUrl url_for(@product.photo)

json.seller do
  json.partial! 'api/users/user', user: @product.seller
end
# TODO: for shopping cart
# json.cart @product.buyers, :id, :name, :email
