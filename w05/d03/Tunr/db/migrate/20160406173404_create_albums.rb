class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :title
      t.text :poster
      t.float :price
      t.references :artist, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
