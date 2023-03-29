class TipsController < ApplicationController

    def show
        challenge = Challenge.find(params[:id])
        render json: challenge, status: :ok
    end

    def create
        if Tip.find_by(attempt_id: params[:attempt_id])
            result = {errors: ["Tip already posted"]}
            code = :unprocessable_entity
            #render json: , status: :unprocessable_entity
        else 
            tip = Tip.create!(tip_params)
            # @user.update(points: @user.points+5)
            result = tip
            code = :created
        end
        render json: result, status: code
    end

    private 

    def tip_params
        params.permit(:text, :image, :user_id, :attempt_id)
    end
end
