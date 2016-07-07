class Pin < ActiveRecord::Base
  validates :board_id, :photo_id, presence: true

  belongs_to :board
  belongs_to :photo
  has_one :owner, through: :board

  def is_private?
    self.board.private
  end

end
