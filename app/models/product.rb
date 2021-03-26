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
            inclusion: { in: %w[office electronic keyboard book chair], message: '%<value>s is not a valid product' }
  validates :price, numericality: { greater_than: 0 }

  has_one_attached :photo

  belongs_to :seller,
             primary_key: :id,
             foreign_key: :seller_id,
             class_name: :User

  has_many :reviews, class_name: :Review, foreign_key: :product_id
end
