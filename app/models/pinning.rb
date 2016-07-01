class Pinning < ActiveRecord::Base
  validates :board_id, :pin_id, presence: true

  belongs_to :board
  belongs_to :pin
  has_one :owner, through: :board

end
