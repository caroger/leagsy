@products.each do |product|
  json.set! product.id do
    json.partial! "product", product: product
    json.imgUrl url_for(product.photos.first)
  end
end
