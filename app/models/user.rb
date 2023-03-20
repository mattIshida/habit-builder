class User < ApplicationRecord
    has_secure_password
    has_many :attempts, dependent: :destroy

    def self.increment_challenge
        puts "increment running"
        self.all.each do |u|
            u.update(challenge: u.challenge+1)
        end
    end

    def generate_first_attempt
        
        initial_challenge = Challenge.find_by(set: 1, number: 0)

        now = Time.now
        start_time = now
        end_time = Time.new(now.year, now.month, now.day+1, nil, nil, nil, self.utc_offset*60)

        Attempt.create(
            user: self, 
            challenge: initial_challenge, 
            current: true, 
            active: true, 
            success: nil, 
            start_time: start_time,
            end_time: end_time
        )

    end
end
