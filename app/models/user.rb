# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  firstname       :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  attr_reader :password

  validates :firstname, :email, :password_digest, :session_token, presence: true
  validates :session_token, uniqueness: true
  validates :email, uniqueness: true

  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  has_many :merchants,
           foreign_key: :seller_id,
           class_name: :Product

  has_many :cartItems,
           foreign_key: :user_id,
           class_name: :CartItem

  has_many :itemsInCart, through: :cartItems, source: :product

  has_many :reviews, class_name: :Review, foreign_key: :reviewer_id

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user

    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    self.session_token = new_session_token while User.find_by(session_token: session_token)
    session_token
  end
end
