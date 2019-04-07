class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :name, null: false, unique: true
      t.string :size
      t.text :desc 
      
      t.timestamps
    end
  end


end
