# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  reviewer_id :integer
#  product_id  :integer
#  rating      :integer
#  body        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
  validates_inclusion_of :rating, in: 1..5, on: :create, message: "value between 1-5 is required"

  validates :reviewer_id, uniqueness: { scope: :product_id, message: "can only leave one review per product" }

  belongs_to :reviewer, class_name: :User, foreign_key: :reviewer_id
  belongs_to :product, class_name: :Product, foreign_key: :product_id
end
