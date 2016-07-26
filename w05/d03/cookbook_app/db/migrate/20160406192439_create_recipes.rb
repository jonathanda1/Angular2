class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :name
      t.text :instructions
      t.integer :servings
      t.references :course, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
