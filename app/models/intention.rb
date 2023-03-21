class Intention < ApplicationRecord
  belongs_to :user
  belongs_to :attempt, dependent: :destroy
  has_many :bookmarks, as: :bookmarkable, dependent: :destroy
end
