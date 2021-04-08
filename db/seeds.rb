require "faker"
require "open-uri"

User.destroy_all
Product.destroy_all
Review.destroy_all

# Create 5 random users
cat_list = %w[office electronic keyboard book chair]
User.create!(email: "demo@rtsy.com",
      firstname: "Demo User",
      password: "demodemo"
)
5.times do
  # create a user
  usr = User.create(
   email: Faker::Internet.email,
   firstname: Faker::Name.first_name,
   password: "password"
 )
  # user will sell 1 product
  Product.create(
       name: Faker::Commerce.product_name,
       price: Faker::Commerce.price,
       category: cat_list.pop,
       description: Faker::Lorem.paragraph,
       seller: usr
  )
end

Product.all.each_with_index do |p, i|
  (1..5).each do |j|
    file = open("https://rtsy-seeds.s3-us-west-1.amazonaws.com/rtsy/#{i + 1}-#{j}.jpg")
    p.photos.attach(io: file, filename: "#{i + 1}-#{j}.jpg}")
  end
end

# Seed reviews
20.times do
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
