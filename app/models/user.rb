class User < ApplicationRecord
    has_secure_password
    has_many :attempts, dependent: :destroy
    has_many :intentions, dependent: :destroy
    has_many :tips, dependent: :destroy
    has_many :follows, foreign_key: :follower_id, dependent: :destroy
    has_many :followeds, foreign_key: :followed_id, class_name: "Follow", dependent: :destroy
    has_many :followed_users, through: :follows, source: :followed
    has_many :followers, through: :followeds, source: :follower
    has_many :bookmarks, dependent: :destroy 

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
