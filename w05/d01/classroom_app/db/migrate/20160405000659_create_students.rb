class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :name
      t.string :mood
      t.integer :age
      t.text :bio

      t.timestamps null: false
    end
  end
end
