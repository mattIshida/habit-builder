class AddUtcOffsetToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :utc_offset, :integer, default: -300
  end
end
