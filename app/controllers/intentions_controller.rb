class IntentionsController < ApplicationController

    def index
        intentions = @user.intentions
        render json: intentions, status: :ok
    end

    def show
    end

    def create
        if Intention.find_by(attempt_id: params[:attempt_id])
            render json: {errors: ["Intention already posted"]}, status: :unprocessable_entity
        end
        intention = Intention.create!(intention_params)
        @user.update(points: @user.point+5)
        render json: intention, status: :created
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
