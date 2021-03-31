@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :rating, :body, :product_id, :reviewer_id
  end
end
