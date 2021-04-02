json.product do
  json.extract! @product, :id, :name, :price, :description, :category, :avg_rating
end
