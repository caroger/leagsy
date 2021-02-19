# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all

user1 = User.create!(email: 'demo@rtsy.com', firstname: 'Demo User', password: 'demodemo')
user2 = User.create!(email: 'roger@rtsy.com', firstname: 'Roger', password: 'demodemo')
user3 = User.create!(email: 'david@rtsy.com', firstname: 'David', password: 'demodemo')

product1 = Product.create!(
  seller_id: user1.id,
  name: 'Keyboard 1',
  description: 'Keyboard 1 description',
  price: 19.99,
  category: 'keyboard'
)

product1.photo.attach(io: File.open('app/assets/images/products/1.png'), filename: '1.png')

product2 = Product.create!(
  seller_id: user2.id,
  name: 'Keyboard 2',
  description: 'Keyboard 2 description',
  price: 29.99,
  category: 'keyboard'
)

product2.photo.attach(io: File.open('app/assets/images/products/2.jpeg'), filename: '2.jpeg')

product3 = Product.create!(
  seller_id: user3.id,
  name: 'Keyboard 3',
  description: 'Keyboard 3 description',
  price: 39.99,
  category: 'keyboard'
)

product3.photo.attach(io: File.open('app/assets/images/products/3.jpeg'), filename: '3.jpeg')
