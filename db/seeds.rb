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

puts '🍪 Seeding photos...'

# Photo.create(
#   [
#     { imageURL: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmiro.medium.com%2Fmax%2F1400%2F1*UKPtdEj9PpvHXfexp2MJtA.png&imgrefurl=https%3A%2F%2Fjodhsingh.medium.com%2Fa-visual-history-of-the-sikh-turban-ca294b58953b&tbnid=RKmwF7SqW_ga7M&vet=12ahUKEwik1aigk5v9AhUHoYQIHcgbBQkQMyhUegUIARCwAQ..i&docid=ELJQGgtM0CqazM&w=875&h=583&q=sikh%20turbans&ved=2ahUKEwik1aigk5v9AhUHoYQIHcgbBQkQMyhUegUIARCwAQ'}
#     { imageURL: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fkarissawrightproductions.com%2Fwp-content%2Fuploads%2F2019%2F08%2FSikh-Turban-Headwrap-Elk-Grove-Wedding-1024x768.jpg&imgrefurl=https%3A%2F%2Fkarissawrightproductions.com%2Findian-sikh-wedding-grooms-getting-ready-elk-grove%2F&tbnid=qMHgTpIhyW8SwM&vet=10CHAQMyj-AWoXChMImJyDoZOb_QIVAAAAAB0AAAAAEAQ..i&docid=ZQeKRU4BqngKOM&w=1024&h=768&q=sikh%20turbans&ved=0CHAQMyj-AWoXChMImJyDoZOb_QIVAAAAAB0AAAAAEAQ'}
#     { imageURL: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn0.weddingwire.in%2Farticle%2F9859%2Foriginal%2F1280%2Fjpg%2F29589-types-of-turbans-ra-abta-by-rahul-sikh-turban-with-jewel-strings.jpeg&imgrefurl=https%3A%2F%2Fwww.weddingwire.in%2Fwedding-tips%2Ftypes-of-turbans--c5521&tbnid=pVAyxWO31gkjKM&vet=10CMkBEDMopQJqFwoTCJicg6GTm_0CFQAAAAAdAAAAABAE..i&docid=8XjvHiA8qWmWMM&w=1080&h=1079&q=sikh%20turbans&ved=0CMkBEDMopQJqFwoTCJicg6GTm_0CFQAAAAAdAAAAABAE'}
#     { imageURL: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.sikh24.com%2Fwp-content%2Fuploads%2F2019%2F11%2FSchool-Principal-asks-Sikh-boy-not-to-wear-turban-in-Uttar-Pradesh.jpg&imgrefurl=https%3A%2F%2Fwww.sikh24.com%2F2019%2F11%2F28%2Futtar-pradesh-school-principal-asks-sikh-boy-not-to-wear-turban%2F&tbnid=7HeQ5kXjD6g32M&vet=10CAcQMyi6AmoXChMImJyDoZOb_QIVAAAAAB0AAAAAEAU..i&docid=3-PrPq-CX8rFlM&w=700&h=420&q=sikh%20turbans&ved=0CAcQMyi6AmoXChMImJyDoZOb_QIVAAAAAB0AAAAAEAU'}
#     { imageURL: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F550x%2Fca%2F2e%2Fc1%2Fca2ec1927031f30a9c3e05e349a60567.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fbsinghkhinda%2Fsikh-model%2F&tbnid=onq980C6tADqMM&vet=12ahUKEwjYvdW9lJv9AhVgyMkDHUHxA2IQMygUegUIARCOAg..i&docid=ehUO-XXxE64TsM&w=480&h=480&q=sikh%20modeling&ved=2ahUKEwjYvdW9lJv9AhVgyMkDHUHxA2IQMygUegUIARCOAg'}
#     { imageURL: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.hindustantimes.com%2Frf%2Fimage_size_630x354%2FHT%2Fp2%2F2017%2F11%2F15%2FPictures%2F_2439366a-ca08-11e7-869c-1f24c33974c8.jpg&imgrefurl=https%3A%2F%2Fwww.hindustantimes.com%2Fworld-news%2Fchic-headwear-canadian-designer-launches-trendy-line-of-turbans%2Fstory-mtLLiElNYmypqTltWugdBN.html&tbnid=XVAooMQbSxL7-M&vet=12ahUKEwjYvdW9lJv9AhVgyMkDHUHxA2IQMyhBegUIARCDAQ..i&docid=EzAfSLpS8wtEIM&w=630&h=354&q=sikh%20modeling&ved=2ahUKEwjYvdW9lJv9AhVgyMkDHUHxA2IQMyhBegUIARCDAQ'}
#     { imageURL: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiatoday.in%2Fmagazine%2Fsupplements%2Fsimply-punjabi%2Fstory%2F20180129-punjab-turbaned-trendsetters-sikh-model-kenneth-cole-waris-ahluwalia-1149653-2018-01-19&psig=AOvVaw0gF5zYdwFMM-YAdvqnaWq-&ust=1676675331702000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKC9or6Um_0CFQAAAAAdAAAAABAI'}
#   ],
# )


puts '🍪 Seeding users...'
User.create(
  [
    { firstname: 'Keith', lastname: 'Ma', email: 'keithma@gmail.com', password: 'keithm@', phone_number: '951-256-0735' },
    { firstname: 'Jason', lastname: 'Tran', email: 'tranjason@gmail.com', password: 'tran69', phone_number: '951-561-7832' },
    { firstname: 'William', lastname: 'German', email: 'wilson@gmail.com', password: 'germanpassword', phone_number: '951-451-2371' },
    { firstname: 'Ian', lastname: 'Holsteen', email: 'djian@gmail.com', password: 'yourfavdj', phone_number: '951-222-0101' },
    { firstname: 'Adrian', lastname: 'Barba', email: 'abarba123@gmail.com', password: 'adbarb765', phone_number: '909-813-7041' },
    { firstname: 'Robert', lastname: 'Lee', email: 'golfislife@gmail.com', password: 'tigerwoods14', phone_number: '718-902-1602' },
    { firstname: 'John', lastname: 'Josef', email: 'jojo@gmail.com', password: 'tobifobi', phone_number: '951-666-3401' },
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
      datetime: "20/20/2022",
      location: "location",
      price: rand(2..10) * 50
    )
  end
end

puts '🍪 Done seeding!'
