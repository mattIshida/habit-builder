class Attempt < ApplicationRecord
  belongs_to :user
  belongs_to :challenge
  has_many :intentions, dependent: :destroy
  has_one :tip, dependent: :destroy
  has_many :helper_tips, through: :challenge, source: :tips

  def expire_and_new 
    self.update(active: false, current: false)
    challenge = self.success ? self.challenge.next_challenge : self.challenge 
    now = Time.now
    start_time = Time.new(now.year, now.month, now.day+1, nil, nil, nil, self.user.utc_offset*60)
    end_time = Time.new(now.year, now.month, now.day+2, nil, nil, nil, self.user.utc_offset*60)
    Attempt.create(user: self.user, challenge: challenge, current: true, active: false, success: nil, start_time: start_time, end_time: end_time)
  end

  def self.expire_current_unattempted
      Attempt.where(success: nil, current: true).each do |a|
          a.update(success: false, active: false, current: false, streak: 0)
      end
  end

  def self.unlock_current
    now = Time.now
    Attempt.where("start_time <= ? AND ? <= end_time", now, now).each do |a|
        a.update(active: true, current: true)
    end
  end
  
end
