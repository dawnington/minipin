class User < ActiveRecord::Base
  attr_reader :password
  validates :username, :password_digest, :session_token, :name, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  before_validation :ensure_session_token

  has_many :boards, dependent: :destroy
  has_many :pinnings, through: :boards
  has_many :pins, through: :boards

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
  end
end
