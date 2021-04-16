json.extract! product, :id, :name, :price, :description, :category, :avg_rating, :review_count
json.imgUrls product.photos.map { |img| img.service_url }
json.seller product.seller.firstname
