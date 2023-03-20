class CreateChallenges < ActiveRecord::Migration[7.0]
  def change
    create_table :challenges do |t|
      t.integer :set
      t.integer :number
      t.integer :length
      t.string :content

      t.timestamps
    end
  end
end
