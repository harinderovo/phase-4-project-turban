class BookingSerializer < ActiveModel::Serializer
  attributes :id, :datetime, :location, :status, :price
  has_one :user
  has_one :event
end
