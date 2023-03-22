class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :challenge_set, :challenge, :points, :streak, :level
end
