require "open-uri"
require "faker"

User.destroy_all
Product.destroy_all
Review.destroy_all

# Create Users
user_list = [
  [ email: "demo1@rtsy.com", first_name: "League Figure Maker", password: "123456" ],
  [ email: "demo2@rtsy.com", first_name: "League Plush Maker", password: "123456" ],
  [ email: "demo3@rtsy.com", first_name: "League Hats Maker", password: "123456" ],
  [ email: "demo4@rtsy.com", first_name: "League Jewelry Maker", password: "123456" ],
  [ email: "demo5@rtsy.com", first_name: "League Artist", password: "123456" ],
  [ email: "demo@rtsy.com", first_name: "Demo User", password: "123456" ]]

user_list.each do |u|
  User.create(u)
end

# Create Product by Category
figure_seller = User.first
figures_list = [
  { name: "Cho'Gath Team Mini", description: "Limited Edition Cho'Gath will feast upon the world and feed the souls to the Void.", category: "figures", price: 12, seller: figure_seller },
  { name: "Battle Principal Yuumi Team Mini", description: "The newest principal of durandal God-Weapon Academy arrives as our newest Limited Edition Team Mini. As a powerful channeler of magic, she uses the academic registry book as a focus object to generate apocalyptic levels of energy... often while perched on a terrified student's head.", category: "figures", price: 12, seller: figure_seller },
  { name: "Battle Academia Team Minis Set", description: "The best of Durandal Academy are here! Battle Academia Ezreal, Jayce, Katarina and Lux, plus Battle Professor Graves is here to teach you a lesson as our newest set of Team Minis.", category: "figures", price: 40, seller: figure_seller },
  { name: "K/DA ALL OUT Seraphine Figure", description: "K/DA's newest collaborator is Seraphine, a vibrant young producer and songwriter. Music is a way for her to connect with others and herself--and alongside K/DA, she's determined to reach new heights. Earnest and open-hearted, Seraphine's dream is to unite the world through her art.
  \n\n K/DA Seraphine takes to the stage as Special Edition #2 in the Series 4 figure line.", category: "figures", price: 30, seller: figure_seller },
  { name: "Warring Kingdoms Jarvan IV Figure", description: "'By my will, this shall be finished.' \n\nWarring Kingdoms Jarvan IV brings a cataclysm to the Series 4 line as Special Edition #04 to celebrate the Lunar New Year.", category: "figures", price: 30, seller: figure_seller },
  { name: "Corki Corgi Figure", description: "'That just goes to show you you're nothin' but a Whiskey Delta!'
    \n\nCorgi Corki flies into the Series 4 line as Limited Edition #06 to celebrate this year's April Fools. Atop his trusty corgi, Corki is ready to start making his special delivery across Runeterra. This figure is a Limited Edition variant that comes with its own custom Series 4 Limited Edition box, usable in-game League of Legends Summoner Icon, and will not be restocked once sold out.", category: "figures", price: 35, seller: figure_seller },
  # [name: "", description: "", category: "figures", price: 40, seller: figure_seller],
]
figures_list.each_with_index do |figure, idx|
  prod = Product.create(figure)

  (1..4).each do |j|
    file_name = "F#{idx + 1}-#{j}.png"
    file_path = open("https://rtsy-seeds.s3-us-west-1.amazonaws.com/rtsy/Figures/#{file_name}")
    prod.photos.attach(io: file_path, filename: file_name)
  end
end

plush_seller = User.second
plushes_list = [
    { name: "Sweetheart Tibbers Plush", description: "Have you met Sweetheart Tibbers?", category: "plush", price: 30, seller: plush_seller },
    { name: "Elder Dragon Plush", description: "The ruler of skies flies in as the softest dragon in Runeterra.", category: "plush", price: 27.5, seller: plush_seller },
    { name: "Moo Cow Alistar Plush", description: "Alistar, the Minotaur is ready to lock horns in the softest of cuddles.", category: "plush", price: 30, seller: plush_seller },
    { name: "Corki Corgi Plush", description: "The Daring Bombardier rides in on his trusty corgi, ready to do battle with the nefarious cats.", category: "plush", price: 35, seller: plush_seller },
    { name: "Featherknight Plush", description: "The legendary Featherknight enters the fray, leading the rest of the Pengu into battle.", category: "plush", price: 27.5, seller: plush_seller },
    { name: "Willump Plush", description: "A mythical yeti - Willump is here to carry you and Nunu to the most awesome of adventures that only best friends can have.", category: "plush", price: 27.5, seller: plush_seller },
]

plushes_list.each_with_index do |plush, idx|
  prod = Product.create(plush)
  (1..4).each do |j|
    file_name = "P#{idx + 1}-#{j}.png"
    file_path = open("https://rtsy-seeds.s3-us-west-1.amazonaws.com/rtsy/Plush/#{file_name}")
    prod.photos.attach(io: file_path, filename: file_name)
  end
end


# # Seed reviews
if ENV["reviews"]
  User.all.each do |user|
    Product.all.each do |product|
      Review.create(
        product: product,
        reviewer: user,
        rating: rand(1..5),
        body: Faker::Lorem.paragraph(sentence_count: 4))
    end
  end
end

# # Seed 3 cartItems for each user
# User.all.each do |usr|
#   3.times do
#     CartItem.create(
#       product: Product.all.sample,
#       buyer: usr
#     )
#   end
# end
