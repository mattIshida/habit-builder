class AttemptsController < ApplicationController

    def index
        attempts = @user.attempts
        render json: attempts, status: :ok
    end

    def show
        attempt = @user.attempts.where(current: true)
        render json: attempt, status: :ok
    end

    def create
    end

    def update
        attempt = Attempt.find(params[:id])
        attempt.update!(success: params[:success])
        next_attempt = attempt.expire_and_new

        render json: attempt, status: :accepted
    end

    private

    def attempt_params
        params.permit(:id, :user_id, :challenge, :challenge_set, :success, :active, :current)
    end

end
