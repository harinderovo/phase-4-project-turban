class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from ActiveRecord::RecordInvalid, with: :not_valid
  before_action :authorize 

  private 

def not_found(error)
  render json: { error: "#{error.model} not found"}, status: :not_found
end

def not_valid(invalid)
  render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
end

def authorize
  @current_user = User.find_by(id: session[:user_id])
  render json: { errors: ["Not authorized"]}, status: :unauthorized unless @current_user
end

end
