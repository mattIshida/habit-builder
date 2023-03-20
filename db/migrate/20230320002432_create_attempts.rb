class CreateAttempts < ActiveRecord::Migration[7.0]
  def change
    create_table :attempts do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :challenge, null: false, foreign_key: true
      t.datetime :start_time
      t.datetime :end_time
      t.boolean :success
      t.integer :seq
      t.boolean :active
      t.boolean :current
      t.boolean :deadlined

      t.timestamps
    end
  end
end
