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

    def feed
        ids = self.followed_users.pluck(:id)
        ids.push(self.id)
        feed_users = User.where(id: ids).map{|u| [u.id, u]}.to_h
        intentions = Intention.where(user_id: ids).order(created_at: :desc).map{|item| {type: "intention", content: item, reader: feed_users[item[:user_id]]}}
        attempts = Attempt.where(user_id: ids).order(created_at: :desc).map{|item| {type: "attempt", content: item, reader: feed_users[item[:user_id]], length: item.challenge.length}}
        tips = Tip.where(user_id: ids).order(created_at: :desc).map{|item| {type: "tip", content: item, reader: feed_users[item[:user_id]]}}
        feed = [intentions, attempts, tips].flatten.compact
        feed.sort!{|a,b| b[:content][:created_at]<=>a[:content][:created_at]}
    end
end
