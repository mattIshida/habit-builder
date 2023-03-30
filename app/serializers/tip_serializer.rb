class TipSerializer < ActiveModel::Serializer
  attributes :id, :text, :image# :user
  # methods :challenge
  has_one :user#, serializer: UserSerializer
  #has_one :attempt
end
