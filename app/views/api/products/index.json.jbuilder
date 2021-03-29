@products.each do |product|
  json.set! product.id do
    json.partial! "/api/products/product", product: product
    json.photoUrl url_for(product.photos.first)
    json.seller do
      json.partial! "api/users/user", user: product.seller
    end
  end
end
