class AttemptsController < ApplicationController

    def create
    
    end

    def update
        attempt = Attempt.find(params[:attempt_id])
        attempt.update(success: params[:success])
        if attempt.success
            attempt = Attempt.create(user: @user, challenge: Challenge.find(params[:challenge]+1))
        else 
            attempt = Attempt.create(user: @user, challenge: attempt.challenge)
        end
           
        render json: attempt, status: :accepted
    end

    private

    def attempt_params
        params.permit(:user_id, :challenge, :challenge_set, :success)
    end

    def after_success
        
    end

end
