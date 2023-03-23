class IntentionsController < ApplicationController

    def index
        intentions = @user.intentions
        render json: intentions, status: :ok
    end

    def show
    end

    def create
        if Intention.find_by(attempt_id: params[:attempt_id])
            result = {errors: ["Intention already posted"]}
            code = :unprocessable_entity
            #render json: , status: :unprocessable_entity
        else 
            intention = Intention.create!(intention_params)
            @user.update(points: @user.points+5)
            result = intention
            code = :created
        end
        render json: result, status: code
    end

    def update
    end

    def destroy
    end

    private

    def intention_params
        params.permit(:user_id, :attempt_id, :when, :where, :what, :image, :note, :time, :success)
    end
end
