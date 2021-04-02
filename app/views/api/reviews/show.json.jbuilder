json.review do
  json.partial! "/api/reviews/review", review: @review
end

json.author do
  json.partial! "/api/users/user", user: @review.reviewer
end

json.average_rating @review.product.average_rating
