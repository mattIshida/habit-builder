class Challenge < ApplicationRecord
    has_many :attempts, dependent: :destroy
    has_many :tips, through: :attempts

    def next_challenge
        #self.set
        Challenge.find_by(set: self.set, number: self.number+1) || Challenge.create(set: self.set, number: self.number+1, length: self.length)
    end

end
