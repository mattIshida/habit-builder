class CreateTips < ActiveRecord::Migration[7.0]
  def change
    create_table :tips do |t|
      t.string :text
      t.string :image
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :attempt, null: false, foreign_key: true

      t.timestamps
    end
  end
end
