class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.string :title, null: false
      t.string :level
      t.string :desc
      t.integer :company_id, null: false

      t.timestamps
    end
  end
end
