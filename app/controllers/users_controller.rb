class UsersController < ApplicationController
    before_action :find_user, only: [:show]

    def index
        render json: User.all, status: :ok
    end

    # def show
    #     render json: User.find(params[:id]), status: :ok
    # end

    def show
        user = find_user
        render json: user
    end

    private

    def find_user
        user= User.find(params[:id])
    end

end
