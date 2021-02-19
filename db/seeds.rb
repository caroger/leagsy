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

product2 = Product.create!(
  seller_id: user2.id,
  name: 'Keyboard 2',
  description: 'Keyboard 2 description',
  price: 29.99,
  category: 'keyboard'
)

product3 = Product.create!(
  seller_id: user3.id,
  name: 'desk 1',
  description: 'desk 1 description',
  price: 199.99,
  category: 'office'
)

product4 = Product.create!(
  seller_id: user1.id,
  name: 'chair 1',
  description: 'chair 1 description',
  price: 99.99,
  category: 'office'
)

product5 = Product.create!(
  seller_id: user2.id,
  name: 'phone 1',
  description: 'phone 1 description',
  price: 199.99,
  category: 'electronic'
)
