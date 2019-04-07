class CreateJobInformation < ActiveRecord::Migration[5.2]
  def change
    create_table :job_informations do |t|
      t.integer :job_id
      t.references :infoable, polymorphic: true, index: true
      t.timestamps
    end
  end
end
