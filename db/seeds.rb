# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all

users = User.create([
                      { email: 'demo@rtsy.com', firstname: 'Demo User', password: 'demodemo' },
                      { email: 'roger@rtsy.com', firstname: 'Roger', password: 'demodemo' },
                      { email: 'david@rtsy.com', firstname: 'David', password: 'demodemo' }
                    ])

products = Product.create([
                            {
                              seller: users[0],
                              name: Faker::Lorem.word,
                              description: Faker::Lorem.sentence(word_count: 3),
                              price: 19.99,
                              category: 'keyboard'
                            },
                            {
                              seller: users[1],
                              name: Faker::Lorem.word,
                              description: Faker::Lorem.sentence(word_count: 3),
                              price: 19.99,
                              category: 'keyboard'
                            },
                            {
                              seller: users[0],
                              name: Faker::Lorem.word,
                              description: Faker::Lorem.sentence(word_count: 3),
                              price: 19.99,
                              category: 'keyboard'
                            },
                            {
                              seller: users[2],
                              name: Faker::Lorem.word,
                              description: Faker::Lorem.sentence(word_count: 3),
                              price: 19.99,
                              category: 'keyboard'
                            },
                            {
                              seller: users[0],
                              name: Faker::Lorem.word,
                              description: Faker::Lorem.sentence(word_count: 3),
                              price: 19.99,
                              category: 'keyboard'
                            },
                            {
                              seller: users[1],
                              name: Faker::Lorem.word,
                              description: Faker::Lorem.sentence(word_count: 3),
                              price: 19.99,
                              category: 'keyboard'
                            },
                            {
                              seller: users[2],
                              name: Faker::Lorem.word,
                              description: Faker::Lorem.sentence(word_count: 3),
                              price: 19.99,
                              category: 'keyboard'
                            }
                          ])
