class Artwork < ApplicationRecord
    validates :image_url, :artist_id, presence: true
    validates :title, presence: true, uniqueness: {scope: :artist_id, message: "artist can not have multiple artworks with same title"}

    belongs_to :user,
    foreign_key: :artist_id
    # class_name: :User

end
