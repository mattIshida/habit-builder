class AddPointsStreakLeveltoUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :points, :integer, default: 0
    add_column :users, :streak, :integer, default: 0
    add_column :users, :level, :integer, default: 0
  end
end
