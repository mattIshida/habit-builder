class AttemptSerializer < ActiveModel::Serializer
  attributes :id, :start_time, :end_time, :success, :seq, :active, :current
  has_one :user
  has_one :challenge
end
