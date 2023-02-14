class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.datetime :datetime
      t.string :location
      t.references :user, null: false, foreign_key: {on_delete: :cascade}
      t.references :event, null: false, foreign_key: {on_delete: :cascade}
      t.string :status, default: "Pending"
      t.float :price

      t.timestamps
    end
  end
end
