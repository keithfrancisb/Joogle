class AddTwoMoreIndexes < ActiveRecord::Migration[5.2]
  def change
    add_index :companies, :name
    add_index :jobs, :title
  end
end
