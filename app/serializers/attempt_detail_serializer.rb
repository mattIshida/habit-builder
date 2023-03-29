class AttemptDetailSerializer < ActiveModel::Serializer
  attributes :id, :challenge_id, :start_time, :end_time, :success, :seq, :active, :current, :deadlined, :created_at, :updated_at, :challenge, :intentions, :challenge_tips

  def challenge_tips
    object.challenge.tips
  end
end
