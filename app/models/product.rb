class Product < ApplicationRecord
  validates :name, :category, :price, :description, :seller_id, presence: true
  validates :category,
            inclusion: { in: %w[office electronic keyboard book chair], message: '%{value} is not a valid product' }
  validates :price, numericality: { greater_than: 0 }

  has_one_attached :photo

  belongs_to :seller,
             primary_key: :id,
             foreign_key: :seller_id,
             class_name: :User

  has_many :reviews,
           primary_key: :id,
           foreign_key: :product_id,
           class_name: :Review
end
