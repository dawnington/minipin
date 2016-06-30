class Pinning < ActiveRecord::Base
  validates :board_id, :pin_id, presence: true
  validates :board_id, uniqueness: { scope: :pin_id }

  belongs_to :board
  belongs_to :pin
  has_one :owner, through: :board

end
