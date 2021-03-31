json.product do
  json.extract! @product, :id, :name, :price, :description, :category, :avg_rating
end

json.imgUrls @product.photos.map { |file| url_for(file) }

@product.reviews.includes(:reviewer).each do |review|
  json.reviews do
    json.set! review.id do
      json.extract! review, :id, :rating, :body, :product_id, :reviewer_id
    end
  end
  json.reviewers do
    json.set! review.reviewer.id do
      json.extract! review.reviewer, :id, :firstname, :email
    end
  end
end
