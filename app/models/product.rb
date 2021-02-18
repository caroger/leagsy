class Product < ApplicationRecord
  validates :name, :category, :price, :description, :seller_id, presence: true
  validates :category,
            inclusion: { in: %w[book, office, electronic, desk, keyboard], message: '%{value} is not a valid product' }
  validates :price, numericality: { greater_than: 0 }

  belongs_to :seller,
             foreign_key: :seller_id,
             primary_key: :id,
             class_name: 'User'
end
