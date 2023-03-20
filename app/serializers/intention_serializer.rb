class IntentionSerializer < ActiveModel::Serializer
  attributes :id, :where, :what, :when, :image, :note, :time, :success
  has_one :user
  has_one :attempt
end
