class SessionsController < ApplicationController

    def update
        session[:user_id] = @user.id
        render json: @user, status: :ok
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

end
