@products.each do |product|
  json.set! product.id do
    json.partial! "product", product: product
    json.reviewIds product.reviews.pluck(:id)
  end
end
