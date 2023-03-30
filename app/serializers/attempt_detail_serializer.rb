class AttemptDetailSerializer < ActiveModel::Serializer
  attributes :id, :challenge_id, :start_time, :end_time, :success, :seq, :active, :current, :deadlined, :created_at, :updated_at, :intentions, :challenge_tips

  belongs_to :challenge#, serializer: CustomChallengeSerializer
  has_one :user
  has_many :helper_tips, serializer: CustomTipSerializer

  def challenge_tips
    object.challenge.tips
  end
end
