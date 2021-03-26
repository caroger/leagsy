require 'faker'

User.destroy_all
Product.destroy_all
Review.destroy_all

# Create 5 random users
5.times do
  User.create!(
    email: Faker::Internet.email,
    firstname: Faker::Name.first_name,
    password: 'password'
  )
end

# Create 10 products for each category

%w[office electronic keyboard book chair].each do |cat|
  6.times do
    Product.create!(
      name: Faker::Commerce.product_name,
      price: Faker::Commerce.price,
      category: cat,
      description: Faker::Lorem.paragraph,
      seller: User.all.sample
    )
  end
end

# Seed reviews
100.times do
  Review.create(
    product: Product.all.sample,
    reviewer: User.all.sample,
    rating: rand(1..5),
    body: Faker::Lorem.paragraph(sentence_count: 4)
  )
end

# Seed 3 cartItems for each user

User.all.each do |usr|
  3.times do
    CartItem.create(
      product: Product.all.sample,
      buyer: usr
    )
  end
end
