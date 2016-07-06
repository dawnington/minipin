class Board < ActiveRecord::Base
  validates :user_id, :name, presence: true

  after_initialize :set_defaults

  belongs_to :owner, primary_key: :id, foreign_key: :user_id, class_name: 'User'
  has_many :pinnings, dependent: :destroy
  has_many :pins, through: :pinnings

  def set_defaults
    self.private ||= false
  end

end
