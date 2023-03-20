class AttemptSerializer < ActiveModel::Serializer
  attributes :id, :start, :end, :success, :seq
  has_one :user
  has_one :challenge
end
