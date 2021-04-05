json.review do
  json.partial! "/api/reviews/review", review: @review
  json.reviewer @review.reviewer.firstname
end
