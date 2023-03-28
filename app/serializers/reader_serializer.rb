class ReaderSerializer < ActiveModel::Serializer
  attributes :id, :username, :intentions, :tips, :attempts, :followers, :followed_users, :points, :streak, :level, :email, :image, :tier , :current_challenge

  def current_challenge
      attempt = object.attempts.find_by(current: true).challenge
  end
end
