json.extract! product, :id, :name, :price, :description, :category, :avg_rating, :review_count
# json.imgUrls product.photos.map { |img| img.service_url } //for aws
json.imgUrls product.photos.map { |img| "#{url_for(img)}" }
json.seller product.seller.first_name
