# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts '🍪 Seeding events...'

Event.create(
  [
    { name: 'Baby Shower' },
    { name: 'Wedding' },
    { name: 'Wedding Reception' },
    { name: 'Engagement' },
    { name: 'Photoshoot' },
    { name: 'Bar-mitzvah' },
    { name: 'Birthday Party' },
  ],
)

puts '🍪 Seeding users...'
User.create(
  [
    { firstname: 'Keith', lastname: 'Ma', email: 'keithma@gmail.com', password_digest: 'keithm@', phone_number: '951-256-0735' },
    { firstname: 'Jason', lastname: 'Tran', email: 'tranjason@gmail.com', password_digest: 'tran69', phone_number: '951-561-7832' },
    { firstname: 'William', lastname: 'German', email: 'wilson@gmail.com', password_digest: 'germanpassword', phone_number: '951-451-2371' },
    { firstname: 'Ian', lastname: 'Holsteen', email: 'djian@gmail.com', password_digest: 'yourfavdj', phone_number: '951-222-0101' },
    { firstname: 'Adrian', lastname: 'Barba', email: 'abarba123@gmail.com', password_digest: 'adbarb765', phone_number: '909-813-7041' },
    { firstname: 'Robert', lastname: 'Lee', email: 'golfislife@gmail.com', password_digest: 'tigerwoods14', phone_number: '718-902-1602' },
    { firstname: 'John', lastname: 'Josef', email: 'jojo@gmail.com', password_digest: 'tobifobi', phone_number: '951-666-3401' },
  ],
)

puts '🍪 Seeding bookings...'
Event.all.each do |event|
  rand(2..4).times do
    # get a random sweet
    user = User.all.sample

    Booking.create!(
      user_id: user.id,
      event_id: event.id,
      price: rand(2..10) * 50
    )
  end
end

puts '🍪 Done seeding!'
