class Photo < ActiveRecord::Base
  validates :image_url, presence: true
  has_many :pins, dependent: :destroy
end
