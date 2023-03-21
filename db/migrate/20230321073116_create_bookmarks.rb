class CreateBookmarks < ActiveRecord::Migration[7.0]
  def change
    create_table :bookmarks do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :bookmarkable_id
      t.string :bookmarkable_type
      t.boolean :pinned

      t.timestamps
    end
  end
end
