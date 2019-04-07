class RemoveLevelColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :jobs, :level
  end
end
