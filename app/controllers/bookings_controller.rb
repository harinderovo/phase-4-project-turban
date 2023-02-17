class BookingsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]

    def index
        render json: Booking.all, status: :ok
    end

    def show 
        render json: Booking.find(params[:id]), status: :ok
    end

    #create, update and destroyneed debugging

    def create
        new_booking = @user.bookings.create!(bookings_params)
        render json: new_booking, status: :created
    end

    # def update
    #     @booking.update!(bookings_params)
    #     render json: @booking, status: :accepted
    # end

    def update
        find_booking
        @booking.update!(location: params[:location])
        render json: @booking, status: :accepted
      end

    # def update
    #     booking = Booking.find(params[:id])
    #     if booking.user == current_user
    #         booking.update!(booking_params)
    #         render json: booking, status: :accepted
    #     else
    #         render json: {error: "You can't update other people's posts"}
    #     end
    # end

    def destroy
        booking = Booking.find(params[:id])
        booking.destroy
        head :no_content
    end

    private 

    def find_booking
        @booking = Booking.find(params[:id])
    end

    def bookings_params
        params.permit(:datetime, :location, :status, :price, :user_id, :event_id, :booking)
    end
end
