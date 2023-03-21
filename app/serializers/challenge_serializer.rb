class ChallengeSerializer < ActiveModel::Serializer
  attributes :id, :set, :length
  has_many :tips
end
