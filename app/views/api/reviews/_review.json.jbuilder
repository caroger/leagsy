json.extract! review, :id, :rating, :body, :product_id, :reviewer_id
json.avgRating review.product.avg_rating
json.updated_at review.updated_at.strftime("%F")
