class Tip < ApplicationRecord
  belongs_to :user
  belongs_to :attempt
  # has_many :challenges, through: attempts
  has_many :bookmarks, as: :bookmarkable, dependent: :destroy

  def challenge
    self.attempt.challenge
  end
end
