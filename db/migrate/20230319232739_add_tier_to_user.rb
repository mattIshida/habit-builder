class AddTierToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :tier, :integer, default: 0
  end
end
