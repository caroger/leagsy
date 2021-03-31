@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :name, :price, :description, :category, :avg_rating
    json.photoUrl url_for(product.photos.first)
  end
end
