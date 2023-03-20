class CreateIntentions < ActiveRecord::Migration[7.0]
  def change
    create_table :intentions do |t|
      t.string :where
      t.string :what
      t.string :when
      t.string :image
      t.text :note
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :attempt, null: false, foreign_key: true
      t.datetime :time
      t.boolean :success

      t.timestamps
    end
  end
end
