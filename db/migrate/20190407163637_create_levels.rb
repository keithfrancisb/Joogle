class CreateLevels < ActiveRecord::Migration[5.2]
  def change
    create_table :levels do |t|
      t.string :level, null: false, unique: true
      t.timestamps
    end
  end
end
