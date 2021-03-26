class CreateCartItems < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_items, id: false do |t|
      t.bigint :buyer_id
      t.bigint :product_id
      t.integer :quantity, null: false, default: 1

      t.timestamps
    end

    add_index :cart_items, :buyer_id
    add_index :cart_items, :product_id
  end
end
