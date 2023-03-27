# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_03_27_190920) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attempts", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "challenge_id", null: false
    t.datetime "start_time"
    t.datetime "end_time"
    t.boolean "success"
    t.integer "seq"
    t.boolean "active"
    t.boolean "current"
    t.boolean "deadlined"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["challenge_id"], name: "index_attempts_on_challenge_id"
    t.index ["user_id"], name: "index_attempts_on_user_id"
  end

  create_table "bookmarks", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.integer "bookmarkable_id"
    t.string "bookmarkable_type"
    t.boolean "pinned"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_bookmarks_on_user_id"
  end

  create_table "challenges", force: :cascade do |t|
    t.integer "set"
    t.integer "number"
    t.integer "length"
    t.string "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "follows", force: :cascade do |t|
    t.integer "follower_id"
    t.integer "followed_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "intentions", force: :cascade do |t|
    t.string "where"
    t.string "what"
    t.string "when"
    t.string "image"
    t.text "note"
    t.bigint "user_id", null: false
    t.bigint "attempt_id", null: false
    t.datetime "time"
    t.boolean "success"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["attempt_id"], name: "index_intentions_on_attempt_id"
    t.index ["user_id"], name: "index_intentions_on_user_id"
  end

  create_table "tips", force: :cascade do |t|
    t.string "text"
    t.string "image"
    t.bigint "user_id", null: false
    t.bigint "attempt_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["attempt_id"], name: "index_tips_on_attempt_id"
    t.index ["user_id"], name: "index_tips_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "challenge", default: 1
    t.integer "challenge_set", default: 1
    t.integer "tier", default: 0
    t.integer "utc_offset", default: -300
    t.integer "points", default: 0
    t.integer "streak", default: 0
    t.integer "level", default: 0
    t.string "provider"
    t.string "provider_id"
    t.string "email"
  end

  add_foreign_key "attempts", "challenges"
  add_foreign_key "attempts", "users"
  add_foreign_key "bookmarks", "users"
  add_foreign_key "intentions", "attempts"
  add_foreign_key "intentions", "users"
  add_foreign_key "tips", "attempts"
  add_foreign_key "tips", "users"
end
