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
    User.create(
        username: Faker::Internet.username, 
        password: "Password123!",
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





