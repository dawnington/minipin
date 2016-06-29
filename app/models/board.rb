class Board < ActiveRecord::Base
  validates :user_id, :name, presence: true

  belongs_to :owner, primary_key: :id, foreign_key: :user_id, class_name: 'User'
  has_many :pins, through: :pinnings

end
