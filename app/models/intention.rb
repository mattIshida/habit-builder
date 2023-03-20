class Intention < ApplicationRecord
  belongs_to :user
  belongs_to :attempt
end
