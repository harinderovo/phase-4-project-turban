class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :firstname, :lastname, :phone_number
  has_many :bookings
end
