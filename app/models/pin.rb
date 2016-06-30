class Pin < ActiveRecord::Base
  validates :image_url, presence: true

  has_many :boards, through: :pinnings

end
