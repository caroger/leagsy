# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  category    :string           not null
#  price       :decimal(, )      not null
#  description :text             not null
#  seller_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord
  validates :name, :category, :price, :description, :seller_id, presence: true
  validates :category,
            inclusion: { in: %w[office electronic keyboard book chair], message: "%<value>s is not a valid product" }
  validates :price, numericality: { greater_than: 0 }

  has_many_attached :photos
  belongs_to :seller,
             primary_key: :id,
             foreign_key: :seller_id,
             class_name: :User

  has_many :cartItems, class_name: :CartItem, foreign_key: :product_id

  has_many :buyers, through: :cartItems, source: :buyer

  has_many :reviews, class_name: :Review, foreign_key: :product_id

  def review_count
    reviews.size
  end

  def avg_rating
    return 0 unless reviews.size.positive?
    reviews.average(:rating).round(1).to_f
  end
end
