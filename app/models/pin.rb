class Pin < ActiveRecord::Base
  validates :image_url, presence: true

  has_many :pinnings, dependent: :destroy
  has_many :boards, through: :pinnings

end
