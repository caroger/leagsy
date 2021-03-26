# == Schema Information
#
# Table name: cart_items
#
#  user_id    :bigint
#  product_id :bigint
#  quantity   :integer          default(1), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class CartItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
