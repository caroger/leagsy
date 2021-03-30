json.extract! @product, :id, :name, :price, :description, :category, :avg_rating
json.picture_urls @product.photos.map { |file| url_for(file) }
json.reviews do
  @product.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :rating, :body, :product_id, :reviewer_id
      json.reviewerName review.reviewer.firstname
    end
  end
end
