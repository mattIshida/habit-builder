class ChallengeSerializer < ActiveModel::Serializer
  attributes :id, :set, :length, :number#, :tips
  has_many :attempts
  has_many :tips, serializer: TipSerializer
end
