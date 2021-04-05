json.product do
  json.partial! "product", product: @product
  json.imgUrls @product.photos.map { |img| url_for(img) }
  json.reviewIds @product.reviews.pluck(:id)
end
