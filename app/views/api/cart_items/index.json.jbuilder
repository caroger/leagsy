@cart_items.each do |item, idx|
  json.set! idx do
    json.extract! item, :product_id, :quantity
  end
end
