class AddProviderAndProviderIdToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :provider, :string, null: true
    add_column :users, :provider_id, :string, null: true
  end
end
