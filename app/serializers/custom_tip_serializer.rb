class CustomTipSerializer < ActiveModel::Serializer
  attributes :id, :text, :user_id, :updated_at, :user
  # methods :challenge
  #has_one :user#, serializer: UserSerializer
  #has_one :attempt
end
