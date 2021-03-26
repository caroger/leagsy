class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :reviewer_id
      t.integer :product_id
      t.integer :rating
      t.string :body
      t.belongs_to :product, foreign_key: true
      t.belongs_to :user, foreign_key: true
      t.timestamps
    end
  end
end
