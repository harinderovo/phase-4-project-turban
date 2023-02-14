class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :firstname, :lastname, :phone_number
end
