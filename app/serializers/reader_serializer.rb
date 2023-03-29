class ReaderSerializer < ActiveModel::Serializer
  attributes :id, :username, :intentions, :tips, :followers, :followed_users, :follows, :points, :streak, :level, :email, :image, :tier , :current_challenge

  has_many :attempts, serializer: AttemptSerializer

  def current_challenge
      attempt = object.attempts.find_by(current: true).challenge
  end
end
