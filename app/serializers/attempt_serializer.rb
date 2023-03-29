class AttemptSerializer < ActiveModel::Serializer
  attributes :id, :start_time, :end_time, :success, :seq, :active, :current, :updated_at, :created_at, :challenge
  has_one :user
  has_one :challenge
  has_many :intentions
end
