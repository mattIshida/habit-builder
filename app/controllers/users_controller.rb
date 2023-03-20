class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    # auto login
    def show
        # @user.update(utc_offset: params[:utc_offset])
        render json: @user, status: :ok
    end

    #sign up
    def create
        @user = User.create!(user_params)
        @user.generate_first_attempt
        session[:user_id] = @user.id
        render json: @user, status: :created
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :utc_offset)
    end

end
