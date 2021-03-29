json.extract! product, :id, :name, :price, :description,  :category, :avg_rating
json.picture_urls product.photos.map { |file| url_for(file) }
