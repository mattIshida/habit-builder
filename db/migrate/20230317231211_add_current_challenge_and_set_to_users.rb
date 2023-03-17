class AddCurrentChallengeAndSetToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :challenge, :integer, default: 1
    add_column :users, :challenge_set, :integer, default: 1
  end
end
