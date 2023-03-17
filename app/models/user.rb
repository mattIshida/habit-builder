class User < ApplicationRecord
    has_secure_password

    def self.increment_challenge
        puts "increment running"
        self.all.each do |u|
            u.update(challenge: u.challenge+1)
        end
    end
end
