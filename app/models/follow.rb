class Follow < ActiveRecord::Base
  validates :follower_id, :followee_id, presence: true
  validates :follower_id, uniqueness: { scope: :followee_id, message: 'Already followed/following' }

  belongs_to :follower, class_name: 'User'
  belongs_to :followee, class_name: 'User'
end
