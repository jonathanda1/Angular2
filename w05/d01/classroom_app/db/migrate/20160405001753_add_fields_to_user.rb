class AddFieldsToUser < ActiveRecord::Migration
  def change
    add_column :students, :favorite_language, :string
    change_column :students, :mood, :text
  end
end
