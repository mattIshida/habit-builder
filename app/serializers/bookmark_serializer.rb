class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :bookmarkable_id, :bookmarkable_type, :pinned
  has_one :user
end
