class Product < ApplicationRecord
  validates :name, :category, :price, :description, :seller_id, presence: true
  validates :category,
            inclusion: { in: %w[book, office, electronic, desk, keyboard], message: '%{value} is not a valid product' }
  validates :price, numericality: { greater_than: 0 }

  belongs_to :seller,
             primary_key: :id,
             foreign_key: :seller_id,
             class_name: :User
end
