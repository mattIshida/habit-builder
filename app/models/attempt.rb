class Attempt < ApplicationRecord
  belongs_to :user
  belongs_to :challenge

  def expire_and_new 
    self.update(active: false, current: false)
    if self.success
      Attempt.create(user: self.user, challenge: self.next_challenge, current: true)
    else 
      Attempt.create(user: self.user, challenge: self.challenge, current: true)
    end
  end

  def self.expire_current_unattempted
      Attempt.where(success: nil, current: true).each do |a|
          a.update(success: false, active: false, current: false)
      end
  end

  def self.unlock_current
    now = Time.now
    Attempt.where("start_time <= ? AND ? <= end_time", now, now).each do |a|
        a.update(active: true, current: true)
    end
  end
  
end
