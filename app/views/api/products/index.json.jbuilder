@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :description, :name, :price, :seller_id, :category
    # TODO: uncomment for active record
    # json.photoUrl url_for(product.photo)
    json.seller do
      json.partial! 'api/users/user', user: product.seller
    end
  end
end
