class TipSerializer < ActiveModel::Serializer
  attributes :id, :text, :image
  methods :challenge
  has_one :user
  has_one :attempt
end
