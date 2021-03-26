# == Schema Information
#
# Table name: cart_items
#
#  buyer_id   :bigint
#  product_id :bigint
#  quantity   :integer          default(1), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CartItem < ApplicationRecord
  validates :user_id, :product_id, :quantity, presence: true

  belongs_to :product,
             foreign_key: :product_id,
             class_name: :Product

  belongs_to :customer,
             foreign_key: :user_id,
             class_name: :User
end
