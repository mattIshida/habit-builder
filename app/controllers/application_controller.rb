class ApplicationController < ActionController::API
    include ActionController::Cookies
before_action :authorize

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
      end

    private 

    def authorize 
        @user = User.find_by(username: session[:username], password: session[:password])
        render json: {errors: "Username or password invalid"}, status: :unauthorized unless @user
    end

end
