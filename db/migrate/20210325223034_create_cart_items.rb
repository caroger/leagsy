class CreateCartItems < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_items do |t|
      t.bigint :user_id
      t.bigint :product_id
      t.integer :quantity, null: false, default: 1

      t.timestamps
    end

    add_index :cart_items, [:user_id, :product_id], unique: true
  end
end
