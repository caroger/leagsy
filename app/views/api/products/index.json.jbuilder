@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :name, :price, :description, :category, :avg_rating
    json.imgUrls product.photos.map { |file| url_for(file) }
  end
end
