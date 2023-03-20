class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    # sign in
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            user.update(utc_offset: params[:utc_offset])
            render json: user, status: :created
        else 
            render json: {errors: ["Username or password invalid"]}, status: :unauthorized
        end
    end

    # log out
    def destroy
        session.delete :user_id
        head :no_content
    end

end
