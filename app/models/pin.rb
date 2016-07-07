class Pin < ActiveRecord::Base
  validates :board_id, :photo_id, presence: true

  belongs_to :board
  belongs_to :photo
  has_one :owner, through: :board
  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings

  def is_private?
    self.board.private
  end

  def tag_list
    self.tags.join(', ')
  end

  def tag_list=(tags_string)
    tag_names = tags_string.split(', ').map(&:downcase).uniq
    new_or_found_tags = tag_names.collect { |name| Tag.find_or_create_by(name: name) }
    self.tags = new_or_found_tags
  end

end
