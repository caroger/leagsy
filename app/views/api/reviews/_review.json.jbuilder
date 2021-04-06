json.extract! review, :id, :rating, :body, :product_id, :reviewer_id

json.updated_at review.updated_at.strftime("%F")
