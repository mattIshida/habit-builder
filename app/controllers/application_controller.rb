class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authorize
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
      end

    private 

    def authorize 
        @user = User.find_by(id: session[:user_id])
        render json: {errors: "Username or password invalid"}, status: :unauthorized unless @user
    end

    def render_unprocessable_entity exception
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_not_found exception
        render json: {errors: "#{exception.model} not found"}, status: :not_found
    end

end
