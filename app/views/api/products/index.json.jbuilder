@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :name, :price, :description, :category, :avg_rating

    # if product.photos.attached?
    #   json.photoUrl rails_blob_path(product.photos.first, disposition: "attachment")
    # end
    json.photoUrl url_for(product.photos[0])
  end
end
