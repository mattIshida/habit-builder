# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all
Follow.destroy_all
Challenge.destroy_all

puts "Seeding users..."
20.times do
    user = Faker::Internet.user('username', 'email')
    User.create(
        username: user[:username], 
        password: "Password123!",
        email: user[:email],
        image: Faker::Avatar.image,
        challenge: (1..10).to_a.sample,
        challenge_set: 1
    )
end

puts "Seeding follows..."
User.all.each do |u|
    User.all.sample(5).each do |w|
        Follow.create(follower: u, followed: w) unless u==w
    end
end

"Seeding challenges..."
(0..1000).each do |idx|
    Challenge.create(set: 1, number: idx, length: idx/7+1)
end

"Seeding attempts..."
User.all.each do |u|
    # for each user 
    n = u.challenge
    m = u.challenge

    while n >= 0 do 
        start_time = (Time.now - (m-n).days).utc
        end_time = Time.new(start_time.year, start_time.month, start_time.day+1, nil, nil, nil, u.utc_offset*60)

        challenge = Challenge.find_by(number: n, set: 1)

        Attempt.create(
            user: u,
            challenge: challenge,
            start_time: start_time,
            end_time: end_time,
            current: n == u.challenge,
            active: n == u.challenge && [true, false].sample,
            success: [true, false].sample
        )
        n -= 1
    end

    n_attempts = u.attempts.count

    n_intentions = (1..n_attempts).to_a.sample
    n_tips = (1..n_attempts).to_a.sample

    u.attempts.sample(n_intentions).each do |a|
        Intention.create(
            user: u,
            attempt: a,
            where: Faker::Lorem.words(number: 2).join(' '),
            what: Faker::Lorem.words(number: 2).join(' '),
            when: Faker::Lorem.words(number: 2).join(' '),
            note: Faker::Lorem.sentence(word_count: 7),
            success: [true, false].sample,
            created_at: a.start_time - 12.hours,
            updated_at: a.start_time - 12.hours

        )
    end

    u.attempts.where(current: false).each do |a|
        Tip.create(
            user: u,
            attempt: a,
            text: Faker::Lorem.sentence(word_count: 9),
            image: nil,
            created_at: a.start_time + 5.hours,
            updated_at: a.start_time + 5.hours
        )
    end
end





