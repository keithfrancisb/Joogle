class CreateIndustries < ActiveRecord::Migration[5.2]
  def change
    create_table :industries do |t|
      t.string :name, null: false, unique: true
      t.timestamps
    end
  end

  # add_index :industries, :name
end
