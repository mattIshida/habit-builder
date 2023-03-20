class Challenge < ApplicationRecord

    def next_challenge
        #self.set
        Challenge.find_by(set: self.set, number: self.number+1) || Challenge.create(set: self.set, number: self.number+1, length: self.length)
    end

end
