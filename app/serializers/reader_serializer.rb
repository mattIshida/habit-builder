class ReaderSerializer < ActiveModel::Serializer
  attributes :id, :username, :intentions, :tips, :attempts, :followers, :followed_users
end
