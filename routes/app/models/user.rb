class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true

    has_many :artworks, 
    dependent: :destroy,
    foreign_key: :artist_id
end
