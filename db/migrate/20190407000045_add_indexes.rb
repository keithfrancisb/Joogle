class AddIndexes < ActiveRecord::Migration[5.2]
  def change
      add_index :locations, :name
      add_index :industries, :name
      add_index :categories, :name
  end
end
