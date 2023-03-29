class AttemptsController < ApplicationController

    def index
        attempts = @user.attempts
        render json: attempts, status: :ok
    end

    def show
        attempt = @user.attempts.where(current: true)
        render json: attempt, status: :ok
    end

    def detail 
        attempt = @user.attempts.find_by(current: true)
        render json: attempt, status: :ok, serializer: AttemptDetailSerializer
    end

    def create
    end

    def update
        attempt = Attempt.find(params[:id])
        attempt.update!(success: params[:success])
        @user.update(points: @user.points+10, streak: @user.streak+1) if attempt.success==true
        @user.update(streak: 0) if attempt.success==false
        next_attempt = attempt.expire_and_new

        render json: attempt, status: :accepted
    end

    private

    def attempt_params
        params.permit(:id, :user_id, :challenge, :challenge_set, :success, :active, :current)
    end

end
