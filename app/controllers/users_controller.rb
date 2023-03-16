class UsersController < ApplicationController
skip_before_action :authorize, only: [:create, :show]
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    
    def show
        @user = User.find(session[:user_id])
        render json: @user, status: :ok
    end

    def create
        @user = User.create(user_params)
        session[:user_id] = @user.id
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:username, :password)
    end

    def render_unprocessable_entity exception
        render json: {errors: exception.record.full_messages}, status: :unprocessable_entity
    end

    def render_not_found exception
        render json: {errors: "#{exception.model} not found"}, status: :not_found
    end

end
