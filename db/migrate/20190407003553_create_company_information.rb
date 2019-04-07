class CreateCompanyInformation < ActiveRecord::Migration[5.2]
  def change
    create_table :company_informations do |t|
      t.integer :company_id
      t.references :infoable, polymorphic: true, index: true
      t.timestamps
    end
  end
end
